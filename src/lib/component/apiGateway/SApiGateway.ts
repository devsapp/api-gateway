import { SCreateApi } from './SCreateApi'

/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-13 22:06:25
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-14 01:25:43
 * @description: api网关相关操作
 */
export class SApiGateway {
  private config: SApisGroup
  constructor(config: SApisGroup) {
    this.config = config
  }
  createApis() {
    const { access, domain, region, groupId, apis } = this.config
    apis?.forEach(async item => {
      const createapi = new SCreateApi({
        api: item,
        access,
        domain,
        region,
        groupId,
      })
      await createapi.createApiByConfig()
    })
  }
}
