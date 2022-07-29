/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-05 22:22:42
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-29 22:54:43
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

export default class ComponentDemo {
  public async deploy(inputs: InputProps) {
    const { AccessKeyID, AccessKeySecret, props, argsObj } = parseInput(inputs)
    const screateApiGroup = new SApiGroup(AccessKeyID, AccessKeySecret, props)
    let hasRemote: boolean = false
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
            return
          }
          await this.modify(inputs)
          break
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
          this.modify(inputs)
          break
        case 'use a remote configuration':
          Slogger.info('已使用远程配置')
          break
        default:
          break
      }
      return
    } else await screateApiGroup.deploy()
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
    const res = await smodifyApiGroup.modifyApiGroupAndApis()
    if (!res.responseStatus) {
      Slogger.error(res.error, 'api组修改失败')
    } else {
      if (res.error) {
        Slogger.info(res.error)
      }
    }
  }
  private help(methodName: string) {
    showHelpDoc(methodName)
  }
}
