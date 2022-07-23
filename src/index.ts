/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-05 22:22:42
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-23 21:19:48
 */
import { InputProps } from './lib/declaration/entity'
import { SApiGroup } from './lib/component/apiGroups/SApiGroup'
import { SDeleteApiGroup } from './lib/component/apiGroups/SDeleteApiGroup'
import { SDescribeApiGroup } from './lib/component/apiGroups/SDescribeApiGroup'
import { showHelpDoc } from './lib/help'
import { Slogger } from './lib/tools/tools'
import { parseInput } from './lib/utils' 

export default class ComponentDemo {
  public async deploy(inputs: InputProps) {
    const { AccessKeyID, AccessKeySecret, props, argsObj } = parseInput(inputs)
    const screateApiGroup = new SApiGroup(AccessKeyID, AccessKeySecret, props)
    if(argsObj.length) {
      if(argsObj.includes('--help') || argsObj.includes('-h')) {
          this.help('deploy')
      }
      else if(argsObj.includes('--force') || argsObj.includes('-f')){
        await this.delete(inputs)
        
        await screateApiGroup.deploy(argsObj)
      }
      return
    }
    if(props.groupName !== 'auto') {
      const sDescribeApiGroup = new SDescribeApiGroup({
        access: {
          AccessKeyID,
          AccessKeySecret
        },
        region: props.region,
        groupName: props.groupName
      })
      if((await sDescribeApiGroup.describeApiGroups()).apiGroupAttributes?.apiGroupAttribute[0]?.groupName 
      === props.groupName) {
        Slogger.error('已存在该api组', props.groupName)
        return
      }
    }
    await screateApiGroup.deploy()
  }
  public async delete(inputs: InputProps) {
    const { AccessKeyID, AccessKeySecret, props } = parseInput(inputs)
    const sdeleteApiGroup = new SDeleteApiGroup( AccessKeyID, AccessKeySecret, props)
    const res = await sdeleteApiGroup.deleteApiGroup()
    if(!res.responseStatus) {
      Slogger.error('api组删除失败', res.error)
    }else {
      Slogger.info('api组删除成功')
    }
  }
  private help(methodName: string) {
    showHelpDoc(methodName)
  }
}
