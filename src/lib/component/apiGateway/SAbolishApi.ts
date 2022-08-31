import { AbolishApisConif, SClientResponseBody } from '../../declaration'
import * as $CloudAPI20160714 from '@alicloud/cloudapi20160714'
import * as $Util from '@alicloud/tea-util'
import { ClientInit } from '../ClientInit'
import { handleClientRequst } from '../../tools/tools'

/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-20 00:13:05
 * @LastEditors: aei imaei@foxmail.com
 * @LastEditTime: 2022-09-01 01:02:18
 */
export class SAbolishApi {
  config: AbolishApisConif
  constructor(config: AbolishApisConif) {
    this.config = config
  }
  async batchAbolishApis(): Promise<SClientResponseBody> {
    let client = ClientInit.createClient(
      this.config.access.AccessKeyID,
      this.config.access.AccessKeySecret,
      this.config.region
    )
    const api = this.config.apis.reduce((arr, item) => {
      if(item.stages[0])
      arr.push(new $CloudAPI20160714.BatchAbolishApisRequestApi({
          groupId: item.groupId,
          apiUid: item.apiUid,
          stageId: item.stages[0].stageId,
        }))
      if(item.stages[1])
      arr.push(new $CloudAPI20160714.BatchAbolishApisRequestApi({
        groupId: item.groupId,
        apiUid: item.apiUid,
        stageId: item.stages[1].stageId,
      }))
      if(item.stages[2])
      arr.push(new $CloudAPI20160714.BatchAbolishApisRequestApi({
        groupId: item.groupId,
        apiUid: item.apiUid,
        stageId: item.stages[2].stageId,
      }))
      return arr
    }, [])
    let batchAbolishApisRequest = new $CloudAPI20160714.BatchAbolishApisRequest(
      {
        api,
      }
    )
    let runtime = new $Util.RuntimeOptions({})
    return await handleClientRequst(
      client,
      'batchAbolishApisWithOptions',
      batchAbolishApisRequest,
      runtime
    )
  }
}
