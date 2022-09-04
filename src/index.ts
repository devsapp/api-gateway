/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-05 22:22:42
 * @LastEditors: aei imaei@foxmail.com
 * @LastEditTime: 2022-09-04 21:15:43
 */
import { InputProps } from './lib/declaration/entity'
import { SApiGroup } from './lib/component/apiGroups/SApiGroup'
import { SDeleteApiGroup } from './lib/component/apiGroups/SDeleteApiGroup'
import { SDescribeApiGroup } from './lib/component/apiGroups/SDescribeApiGroup'
import { showHelpDoc } from './lib/help'
import { Slogger } from './lib/tools/tools'
import { parseInput, preCheck } from './lib/utils'
import { SModifyApiGroup } from './lib/component/apiGroups/SModifyApiGroup'
import sStore from './lib/component/store'
import { SSetDomain } from './lib/component/domain/SSetDomain'

export default class ComponentDemo {
  public async deploy(inputs: InputProps) {
    const { credentials, props, argsObj } = await parseInput(inputs)
    preCheck(props)
    if (argsObj.help || argsObj.h) {
      this.help('deploy');
      return;
    }

    const screateApiGroup = new SApiGroup(credentials.AccessKeyID, credentials.AccessKeySecret, props)
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
        access: credentials,
        region: props.region,
        groupName: props.groupName,
      })
      if (
        (await sDescribeApiGroup.describeApiGroups()).apiGroupAttributes
          ?.apiGroupAttribute[0]?.groupName === props.groupName
      )
        hasRemote = true
    }
    

    if (hasRemote) {
      if (argsObj['use-local']) {
        if (props.groupName === 'auto' || !hasRemote) {
          await screateApiGroup.deploy()
          return this.enrich(re)
        } 
        return await this.modify(inputs)
      } else if (argsObj['use-remote']) {
        if (props.groupName === 'auto' || !hasRemote) {
          await screateApiGroup.deploy()
          return this.enrich(re)
        } 
        return await this.modify(inputs)
      }
      return await this.modify(inputs)
    }
    await screateApiGroup.deploy();
    return this.enrich(re)
  }
  public async remove(inputs: InputProps) {
    const { credentials, props } = await parseInput(inputs)
    const sdeleteApiGroup = new SDeleteApiGroup(
      credentials.AccessKeyID,
      credentials.AccessKeySecret,
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
    const { credentials, props } = await parseInput(inputs)
    const smodifyApiGroup = new SModifyApiGroup(
      credentials.AccessKeyID,
      credentials.AccessKeySecret,
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
        if(res.remote) {
          Slogger.info('远程配置无需修改')
          return
        }
        return this.enrich(re)
      }
    }
  }
  public async domain(inputs: InputProps) {
    const { credentials, props, argsObj } = await parseInput(inputs)
    // console.log(argsObj)
    const describeApiGroup = new SDescribeApiGroup({
      access: credentials,
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
      access: credentials,
      region: props.region,
      domainName: argsObj?.['domain-name'],
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
