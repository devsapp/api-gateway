import { SAccess, SClientResponseBody } from '../../declaration'
import * as $CloudAPI20160714 from '@alicloud/cloudapi20160714'
import * as $Util from '@alicloud/tea-util'
import { ClientInit } from '../ClientInit'
import { handleClientRequst } from '../../tools/tools'
import { SDescribeApiGroup } from './SDescribeApiGroup'

/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-24 13:39:48
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-24 14:11:54
 */
export class SModifyApiGroup {
  access: SAccess
  props
  groupId: string
  constructor(AccessKeyID: string, AccessKeySecret: string, props) {
    this.access = {
      AccessKeyID,
      AccessKeySecret,
    }
    this.props = props
  }
  async modifyApiGroupAndApis():Promise<SClientResponseBody> {  
    //更新api组
    const modifyApiGroupRes = await this.modifyApiGroup() 
    if(!modifyApiGroupRes.responseStatus) return {
        responseStatus: false,
        error: modifyApiGroupRes.error
    }
    //更新apis
    return {
        responseStatus: true
    }
  }
  async modifyApiGroup():Promise<SClientResponseBody> {
    const sdescribeApiGroup = new SDescribeApiGroup({
        access: this.access,
        groupName: this.props.groupName,
        region: this.props.region
    })
    const apiGroupsDescrib = await sdescribeApiGroup.describeApiGroups()
    if (!apiGroupsDescrib.responseStatus) return {
        responseStatus: false,
        error: apiGroupsDescrib.error
    }
    if (
      apiGroupsDescrib.apiGroupAttributes.apiGroupAttribute[0]?.groupName !==
      this.props.groupName
    )
    return {
    responseStatus: false,
    error: 'no this apiGroup 无该api组',
    }
    const groupId =
      apiGroupsDescrib.apiGroupAttributes.apiGroupAttribute[0]?.groupId
    this.setGroupId(groupId)

    let client = ClientInit.createClient(
      this.access.AccessKeyID,
      this.access.AccessKeySecret,
      this.props.region
    )
    let modifyApiGroupRequest = new $CloudAPI20160714.ModifyApiGroupRequest({
        groupId,
        basePath: this.props.basePath,
        description: this.props.description || "",
        instanceId: this.props.instanceId,
        defaultDomain: this.props.defaultDomain
    })
    let runtime = new $Util.RuntimeOptions({})
    return await handleClientRequst(
      client,
      'modifyApiGroupWithOptions',
      modifyApiGroupRequest,
      runtime
    )
  }
  setGroupId(groupId:string) {
    this.groupId = groupId
  }
}
