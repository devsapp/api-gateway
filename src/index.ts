/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-05 22:22:42
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-15 00:11:10
 */
import logger from './common/logger'
import { InputProps } from './common/entity'
import { SApiGroup } from './lib/component/apiGroups/SApiGroup'
import { parseInput } from './lib/utils'

export default class ComponentDemo {
  /**
   * demo 实例
   * @param inputs
   * @returns
   */
  public async test(inputs: InputProps) {
    logger.debug(`input: ${JSON.stringify(inputs.props)}`)
    logger.info('command test')
    return { hello: 'world' }
  }
  public async deploy(inputs: InputProps) {
    const { AccessKeyID, AccessKeySecret, props } = parseInput(inputs)
    const createApiGroup = new SApiGroup(AccessKeyID, AccessKeySecret, props)
    await createApiGroup.deploy()
  }
}
