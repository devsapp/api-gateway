/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-15 21:52:28
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-17 14:26:21
 */
import { BatchDeployApisConfig } from '../../declaration'
import { ClientInit } from '../ClientInit'
import * as $CloudAPI20160714 from '@alicloud/cloudapi20160714'
import * as $Util from '@alicloud/tea-util'
import { handleClientRequst } from '../../tools/tools'

export class SDeployApi {
  private apisconfig: BatchDeployApisConfig
  constructor(apisconfig: BatchDeployApisConfig) {
    this.apisconfig = apisconfig
  }
  async batchDeployApis() {
    let client = ClientInit.createClient(
      this.apisconfig.access.AccessKeyID,
      this.apisconfig.access.AccessKeySecret,
      this.apisconfig.region
    )
    const apis = this.apisconfig.apis?.map(item => {
      return new $CloudAPI20160714.BatchDeployApisRequestApi(item)
    }) || []
    let batchDeployApisRequest = new $CloudAPI20160714.BatchDeployApisRequest({
      api: apis,
      stageName: 'RELEASE',
      description: '批量发布api',
    })
    let runtime = new $Util.RuntimeOptions({})
    return await handleClientRequst(
      client,
      'batchDeployApisWithOptions',
      batchDeployApisRequest,
      runtime
    )
  }
}
