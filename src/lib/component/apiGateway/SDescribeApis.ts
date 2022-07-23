/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-21 23:51:23
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-23 20:47:22
 */
import { SApisDescription } from '../../declaration'
import * as $CloudAPI20160714 from '@alicloud/cloudapi20160714'
import * as $Util from '@alicloud/tea-util'
import { ClientInit } from '../ClientInit'
import { handleClientRequst } from '../../tools/tools'

export class SDescribeApis {
  private config: SApisDescription
  constructor(config: SApisDescription) {
    this.config = config
  }
  async describeApis(pageNumber) {
    let client = ClientInit.createClient(
      this.config.access.AccessKeyID,
      this.config.access.AccessKeySecret,
      this.config.region
    )
    let describeApisRequest = new $CloudAPI20160714.DescribeApisRequest({
      groupId: this.config.groupId,
      pageNumber,
    })
    let runtime = new $Util.RuntimeOptions({})
    return await handleClientRequst(
      client,
      'describeApisWithOptions',
      describeApisRequest,
      runtime
    )
  }
}
