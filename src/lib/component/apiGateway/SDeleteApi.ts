import { SClientResponseBody, SDeleteApiConfig } from '../../declaration'
import * as $CloudAPI20160714 from '@alicloud/cloudapi20160714'
import * as $Util from '@alicloud/tea-util'
import { ClientInit } from '../ClientInit'
import { handleClientRequst } from '../../tools/tools'

/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-20 00:05:20
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-23 20:48:18
 */
export class SDeleteApi {
  config: SDeleteApiConfig
  constructor(config: SDeleteApiConfig) {
    this.config = config
  }
  async deleteApis(): Promise<SClientResponseBody> {
    for (let i = 0; i < this.config.apis.length; i++) {
      const res = await this.deleteApi(
        this.config.apis[i].groupId,
        this.config.apis[i].apiId
      )
      if (!res.responseStatus)
        return {
          responseStatus: false,
          error: res.error,
        }
    }
    return {
      responseStatus: true,
    }
  }
  async deleteApi(groupId, apiId): Promise<SClientResponseBody> {
    let client = ClientInit.createClient(
      this.config.access.AccessKeyID,
      this.config.access.AccessKeySecret,
      this.config.region
    )
    let deleteApiRequest = new $CloudAPI20160714.DeleteApiRequest({
        groupId,
        apiId,
    })
    let runtime = new $Util.RuntimeOptions({})
    return await handleClientRequst(
      client,
      'deleteApiWithOptions',
      deleteApiRequest,
      runtime
    )
  }
}
