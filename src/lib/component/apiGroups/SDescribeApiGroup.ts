import { SApiGroupDescription, SClientResponseBody } from '../../declaration'
import * as $CloudAPI20160714 from '@alicloud/cloudapi20160714'
import * as $Util from '@alicloud/tea-util'
import { ClientInit } from '../ClientInit'
import { handleClientRequst } from '../../tools/tools'

/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-11 22:51:33
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-23 19:55:46
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
  async describeApiGroup():Promise<SClientResponseBody> {
    if(!this.config.groupId) return {
      responseStatus: false,
      error: new Error('lack groupId')
    }
    let client = ClientInit.createClient(
      this.config.access.AccessKeyID,
      this.config.access.AccessKeySecret,
      this.config.region
    )
    let describeApiGroupRequest =
      new $CloudAPI20160714.DescribeApiGroupRequest({
        groupId: this.config.groupId
      })
    let runtime = new $Util.RuntimeOptions({})
    return await handleClientRequst(
      client,
      'describeApiGroupWithOptions',
      describeApiGroupRequest,
      runtime
    )
  }
  setGroupId(str) {
    this.config.groupId = str
  }
}
