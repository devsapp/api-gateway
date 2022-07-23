import { SApiGroupDescription } from '../../declaration'
import * as $CloudAPI20160714 from '@alicloud/cloudapi20160714'
import * as $Util from '@alicloud/tea-util'
import { ClientInit } from '../ClientInit'
import { handleClientRequst } from '../../tools/tools'

/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-11 22:51:33
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-22 00:17:11
 */
export class SDescribeApiGroup {
  config: SApiGroupDescription
  constructor(config: SApiGroupDescription) {
    this.config = config
  }
  async describeApiGroups() {
    let client = ClientInit.createClient(
      this.config.access.AccessKeyID,
      this.config.access.AccessKeySecret,
      this.config.region
    )
    let describeApiGroupsRequest =
      new $CloudAPI20160714.DescribeApiGroupsRequest({
        groupName: this.config.groupName,
      })
    let runtime = new $Util.RuntimeOptions({})
    return await handleClientRequst(
      client,
      'describeApiGroupsWithOptions',
      describeApiGroupsRequest,
      runtime
    )
  }
  setGroupId(str) {
    this.config.groupId = str
  }
}
