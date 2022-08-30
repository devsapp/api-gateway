/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-05 22:22:42
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-08-15 21:53:01
 */
import { InputProps } from './lib/declaration/entity'
import { SApiGroup } from './lib/component/apiGroups/SApiGroup'
import { SDeleteApiGroup } from './lib/component/apiGroups/SDeleteApiGroup'
import { SDescribeApiGroup } from './lib/component/apiGroups/SDescribeApiGroup'
import { showHelpDoc } from './lib/help'
import { Slogger } from './lib/tools/tools'
import { parseInput } from './lib/utils'
import { SModifyApiGroup } from './lib/component/apiGroups/SModifyApiGroup'
import { inquirer } from '@serverless-devs/core'
import sStore from './lib/component/store'
import { SSetDomain } from './lib/component/apiGroups/SSetDomain'

export default class ComponentDemo {
  public async deploy(inputs: InputProps) {
    const { AccessKeyID, AccessKeySecret, props, argsObj } = parseInput(inputs)
    const screateApiGroup = new SApiGroup(AccessKeyID, AccessKeySecret, props)
    let hasRemote: boolean = false
    const apis = props.apis.map(item => ({
      apiName: item.apiName,
      requestPath: item.requestConfig.requestPath,
      servicePath: item.serviceConfig.servicePath
    }))
    const re = {
      region: props.region,
      apiGroup: props.groupName,
      apis
    }
    if (props.groupName !== 'auto') {
      const sDescribeApiGroup = new SDescribeApiGroup({
        access: {
          AccessKeyID,
          AccessKeySecret,
        },
        region: props.region,
        groupName: props.groupName,
      })
      if (
        (await sDescribeApiGroup.describeApiGroups()).apiGroupAttributes
          ?.apiGroupAttribute[0]?.groupName === props.groupName
      )
        hasRemote = true
    }
    if (argsObj.length) {
      const op = argsObj[0]
      console.log(op)
      switch (op) {
        case '--help':
        case '-h':
          this.help('deploy')
          break
        case '--use-local':
          if (props.groupName === 'auto' || !hasRemote) {
            await screateApiGroup.deploy()
            return this.enrich(re)
          } 
          return await this.modify(inputs)
        case '--use-remote':
          if (props.groupName === 'auto' || !hasRemote)
            await screateApiGroup.deploy()
          else Slogger.info('已选择使用远程配置')
          break
        default:
          Slogger.warn('There is no such command')
      } 
      return
    }
    if (hasRemote) {
      Slogger.info('已存在远程API组，是否使用本地配置更新?')
      const ans: {
        option: string
      } = await inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Choose whether to use a local configuration or a remote configuration',
            choices: [
                {name:'use a local configuration'},
                {name:'use a remote configuration'}
            ]
        }
      ])
      switch (ans.option) {
        case 'use a local configuration':
          return await this.modify(inputs)
        case 'use a remote configuration':
          Slogger.info('已使用远程配置')
          break
        default:
          break
      }
      return
    } else await screateApiGroup.deploy()

    return this.enrich(re)
  }
  public async remove(inputs: InputProps) {
    const { AccessKeyID, AccessKeySecret, props } = parseInput(inputs)
    const sdeleteApiGroup = new SDeleteApiGroup(
      AccessKeyID,
      AccessKeySecret,
      props
    )
    const res = await sdeleteApiGroup.deleteApiGroup()
    if (!res.responseStatus) {
      Slogger.error('api组删除失败', res.error)
    } else {
      Slogger.info('api组删除成功')
    }
  }
  public async modify(inputs: InputProps) {
    const { AccessKeyID, AccessKeySecret, props } = parseInput(inputs)
    const smodifyApiGroup = new SModifyApiGroup(
      AccessKeyID,
      AccessKeySecret,
      props
    )
    const apis = props.apis.map(item => ({
      apiName: item.apiName,
      requestPath: item.requestConfig.requestPath,
      servicePath: item.serviceConfig.servicePath
    }))
    const re = {
      region: props.region,
      apiGroup: props.groupName,
      apis
    }
    const res = await smodifyApiGroup.modifyApiGroupAndApis()
    if (!res.responseStatus) {
      Slogger.error(res.error, 'api组修改失败')
    } else {
      if (res.error) {
        Slogger.info(res.error)
      } else {
        return this.enrich(re)
      }
    }
  }
  public async domain(inputs: InputProps) {
    const { AccessKeyID, AccessKeySecret, props, argsObj } = parseInput(inputs)
    console.log(argsObj)
    const describeApiGroup = new SDescribeApiGroup({
      access: {
        AccessKeyID,
        AccessKeySecret
      },
      region: props.region,
      groupName: props.groupName
    })
    const describeApiGroupRes = await describeApiGroup.describeApiGroups()
    if(!describeApiGroupRes.responseStatus) {
      Slogger.error('查询api组出错', describeApiGroupRes.error)
    }
    if(describeApiGroupRes.apiGroupAttributes.apiGroupAttribute[0]?.groupName !==
      props.groupName) {
        Slogger.warn('api组不正确或尚未注册')
        return
      }
    const groupId = describeApiGroupRes.apiGroupAttributes.apiGroupAttribute[0]?.groupId
    const setDomain = new SSetDomain({
      access: {
        AccessKeyID,
        AccessKeySecret
      },
      region: props.region,
      domainName: argsObj[0],
      groupId
    })
    const setDomainRes = await setDomain.setDomain()
    if(!setDomainRes.responseStatus) {
      Slogger.error('绑定域名失败', setDomainRes.error)
    }
    else Slogger.info('绑定成功')
  }
  private help(methodName: string) {
    showHelpDoc(methodName)
  }
  private enrich(re) {
    re.domain = sStore.getDomain()
    const domain= sStore.getDomain()
    const custom_domain = sStore.getCustom()
    custom_domain && (re.custom_domain = custom_domain)
    domain && (re.domain = domain)
    return re
  }
}
