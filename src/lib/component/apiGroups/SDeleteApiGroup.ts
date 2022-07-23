/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-20 00:15:11
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-23 21:21:40
 */
import { SAccess, SClientResponseBody } from '../../declaration'
import { SAbolishApi } from '../apiGateway/SAbolishApi'
import { SDeleteApi } from '../apiGateway/SDeleteApi'
import { SDescribeApis } from '../apiGateway/SDescribeApis'
import { SDescribeApiGroup } from './SDescribeApiGroup'
import * as $CloudAPI20160714 from '@alicloud/cloudapi20160714'
import * as $Util from '@alicloud/tea-util'
import { ClientInit } from '../ClientInit'
import { handleClientRequst, Slogger } from '../../tools/tools'

/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-20 00:15:11
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-21 23:49:37
 */
export class SDeleteApiGroup {
  access: SAccess
  props
  constructor(AccessKeyID: string, AccessKeySecret: string, props) {
    this.access = {
      AccessKeyID,
      AccessKeySecret,
    }
    this.props = props
  }
  /**
   * @description 删除api组
   */
  async deleteApiGroup(): Promise<SClientResponseBody> {
    //查询api组id
    Slogger.info('查询线上api组中...')
    const sdescribeApiGroups = new SDescribeApiGroup({
      access: this.access,
      region: this.props.region,
      groupName: this.props.groupName,
    })
    const apiGroupsDescrib = await sdescribeApiGroups.describeApiGroups()
    if (!apiGroupsDescrib.responseStatus) return {
        responseStatus: false,
        error: apiGroupsDescrib.error
    }
    if (
      apiGroupsDescrib.apiGroupAttributes.apiGroupAttribute[0]?.groupName !==
      this.props.groupName
    )
    return {
    responseStatus: true,
    error: 'no this apiGroup 无该api组',
    }
    const groupId =
      apiGroupsDescrib.apiGroupAttributes.apiGroupAttribute[0]?.groupId
    Slogger.info('查询线上环境中...')
    //查询api组详情从而获得StageId 运行环境id
    sdescribeApiGroups.setGroupId(groupId)
    const moreApiGroupsDescrib = await sdescribeApiGroups.describeApiGroup()
    if (!moreApiGroupsDescrib.responseStatus) return {
        responseStatus: false,
        error: moreApiGroupsDescrib.error
    }
    const stages = moreApiGroupsDescrib.stageItems.stageInfo
    //查询api列表id
    Slogger.info('查询Api列表...')
    const sDescribeApis = new SDescribeApis({
      access: this.access,
      region: this.props.region,
      groupId,
    })
    let apis = []
    let pageIndex = 0,
      totalCount = 1
    while (pageIndex * 10 < totalCount) {
      const apisDescrib = await sDescribeApis.describeApis(pageIndex)
      totalCount = apisDescrib.totalCount
      if (!apisDescrib.responseStatus) return {
        responseStatus: false,
        error: apisDescrib.error
      }
      apis = apis.concat(
        apisDescrib.apiSummarys.apiSummary.map(item => ({
          apiUid: item.apiId,
          groupId: item.groupId,
          stages,
        }))
      )
      pageIndex++
    }
    //批量下线api
    Slogger.info('批量下线api...')
    const sabolishApi = new SAbolishApi({
      access: this.access,
      region: this.props.region,
      apis,
    })
    const batchAbolishApisRes = await sabolishApi.batchAbolishApis()
    if (!batchAbolishApisRes.responseStatus) return {
        responseStatus: false,
        error: batchAbolishApisRes.error
    }
    //批量删除api
    Slogger.info('批量删除api...')
    apis = apis.map(item => ({
      apiId: item.apiUid,
      groupId: item.groupId,
    }))
    const sDeleteApis = new SDeleteApi({
      access: this.access,
      region: this.props.region,
      apis,
    })
    const deleteApisRes = await sDeleteApis.deleteApis()
    if (!deleteApisRes.responseStatus) return {
        responseStatus: false,
        error: deleteApisRes.error
    }
    //删除api组
    Slogger.info('删除api组...')
    let client = ClientInit.createClient(
      this.access.AccessKeyID,
      this.access.AccessKeySecret,
      this.props.region
    )
    let deleteApiGroupRequest = new $CloudAPI20160714.DeleteApiGroupRequest({
      groupId,
    })
    let runtime = new $Util.RuntimeOptions({})
    return await handleClientRequst(
      client,
      'deleteApiGroupWithOptions',
      deleteApiGroupRequest,
      runtime
    )
  }
}
