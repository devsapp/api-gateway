/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-05 22:22:42
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-16 20:58:53
 */
import { InputProps } from './common/entity'
import { SApiGroup } from './lib/component/apiGroups/SApiGroup'
import { parseInput } from './lib/utils' 

export default class ComponentDemo {
  public async deploy(inputs: InputProps) {
    const { AccessKeyID, AccessKeySecret, props } = parseInput(inputs)
    const createApiGroup = new SApiGroup(AccessKeyID, AccessKeySecret, props)
    await createApiGroup.deploy()
  }
  // async test(inputs: InputProps) {
  //   const { AccessKeyID, AccessKeySecret, props } = parseInput(inputs)
  //   const deployApisRes = await new SDeployApi({
  //     stageName: ApiStageName.TEST,
  //     apis: [{
  //       groupId: '64a50fc47fca4b30a08b2e5eb55c50dc',
  //       apiUid: '242955efb4364a3f961e6747f49a1e86'
  //     }],
  //     access:{
  //         AccessKeyID: AccessKeyID, 
  //         AccessKeySecret:  AccessKeySecret  
  //     },
  //     region: props.region
  //     }).batchDeployApis()
  //   Slogger.info(deployApisRes)
  // }
}
