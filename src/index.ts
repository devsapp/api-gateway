/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-05 22:22:42
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-12 00:47:27
 */
import logger from './common/logger';
import { InputProps } from './common/entity';
import CreateApiGroups from './lib/component/apiGroups/CreateApiGroup';

export default class ComponentDemo {
  /**
   * demo 实例
   * @param inputs
   * @returns
   */
  public async test(inputs: InputProps) {
    logger.debug(`input: ${JSON.stringify(inputs.props)}`);
    logger.info('command test');
    return { hello: 'world' };
  }
  public async deploy(inputs: InputProps) {
    const createApiGroup = new CreateApiGroups(inputs)
    const res = await createApiGroup.deploy()
    console.log('创建成功', res)
  }
}
