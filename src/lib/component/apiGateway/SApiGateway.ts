import { SApisGroup } from '../../declaration/interface'
import { SCreateApi } from './SCreateApi'

/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-13 22:06:25
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-16 18:21:04
 * @description: api网关相关操作
 */
export class SApiGateway {
  private config: SApisGroup
  constructor(config: SApisGroup) {
    this.config = config
  }
  async createApis() {
    const { access, domain, region, groupId, apis } = this.config
    const successApis = []
    let promiseArr =  apis?.map(async function(item) {
      const createapi = new SCreateApi({
        api: item,
        access,
        domain,
        region,
        groupId,
      })
      const res = await createapi.createApiByConfig()
      if(!res.responseStatus) {
        console.log('创建api失败:', res.error)
      }else {
        const config = { 
          apiName: item.apiName,
          path: `${item.requestConfig.requestPath}`,
          apiId: res.apiId
        }
        console.log('创建api成功:', config)
        successApis.push(config)
      }
    })
    await Promise.all(promiseArr) 
    return successApis
  }
}
