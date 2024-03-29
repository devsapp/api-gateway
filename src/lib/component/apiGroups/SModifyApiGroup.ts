import { ApiStageName, SAccess, SClientResponseBody } from '../../declaration'
import * as $CloudAPI20160714 from '@alicloud/cloudapi20160714'
import * as $Util from '@alicloud/tea-util'
import { ClientInit } from '../ClientInit'
import { blockProcess, handleClientRequst, Slogger } from '../../tools/tools'
import { SDescribeApiGroup } from './SDescribeApiGroup'
import { SDescribeApis } from '../apiGateway/SDescribeApis'
import { SAbolishApi } from '../apiGateway/SAbolishApi'
import { SDeployApi } from '../apiGateway/SDeployApi'
import { SModifyApi } from '../apiGateway/SModifyApi'
import { SCreateApi } from '../apiGateway/SCreateApi'
import sStore from '../store'
import { SSetDomain } from './SSetDomain'
export class SModifyApiGroup {
  access: SAccess
  props
  groupId: string
  subDomain: string
  constructor(AccessKeyID: string, AccessKeySecret: string, props) {
    this.access = {
      AccessKeyID,
      AccessKeySecret,
    }
    this.props = props
  }
  async modifyApiGroupAndApis():Promise<SClientResponseBody> {  
    //更新api组
    Slogger.info('修改api组中...')
    const modifyApiGroupRes = await this.modifyApiGroup() 
    if(!modifyApiGroupRes.responseStatus) return {
        responseStatus: false,
        error: modifyApiGroupRes.error
    }
    const custom_domain =  this.props.custom_domain?.trim()
    if(custom_domain) {
      const sSetDomain = new SSetDomain({
          access: this.access,
          region: this.props.region,
          groupId: this.groupId,
          domainName: custom_domain
      })
      const sSetDomainRes = await sSetDomain.setDomain()
      if(!sSetDomainRes.responseStatus) {
          Slogger.info('绑定域名失败:', sSetDomainRes.error)
          return
      }
      sStore.setCustom(`http://${custom_domain}`)
    }
    //查询api组id
    Slogger.info('查询线上api组中...')
    const sdescribeApiGroups = new SDescribeApiGroup({
      access: this.access,
      region: this.props.region,
      groupName: this.props.groupName,
    })
    Slogger.info('查询线上环境中...')
    //查询api组详情从而获得StageId 运行环境id
    sdescribeApiGroups.setGroupId(this.groupId)
    const moreApiGroupsDescrib = await sdescribeApiGroups.describeApiGroup()
    if (!moreApiGroupsDescrib.responseStatus) return {
        responseStatus: false,
        error: moreApiGroupsDescrib.error
    }
    const stages = moreApiGroupsDescrib.stageItems.stageInfo
    this.subDomain = moreApiGroupsDescrib.subDomain
    //查询api列表id
    Slogger.info('查询Api列表...')
    const sDescribeApis = new SDescribeApis({
      access: this.access,
      region: this.props.region,
      groupId: this.groupId,
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
      const apiSummary =  apisDescrib.apiSummarys ? apisDescrib.apiSummarys.apiSummary : []
      apis = apis.concat(
        apiSummary.map(item => ({
          apiUid: item.apiId,
          apiName: item.apiName,
          groupId: item.groupId,
          stages,
        }))
      )
      pageIndex++
    }
    // //批量下线api
    // Slogger.info('批量下线api...')
    // const sabolishApi = new SAbolishApi({
    //   access: this.access,
    //   region: this.props.region,
    //   apis,
    // })
    // const batchAbolishApisRes = await sabolishApi.batchAbolishApis()
    // if (!batchAbolishApisRes.responseStatus) return {
    //     responseStatus: false,
    //     error: batchAbolishApisRes.error
    // }
    //更新apis
    const smodifyApi = new SModifyApi({
      access: this.access,
      region: this.props.region,
      groupId: this.groupId,
    })
    //如果远程中能匹配到，执行修改，否则执行新建发布
    await blockProcess()
    Slogger.info('修改api...')
    let newApis = []
    for(let i = 0; i < this.props.apis.length; i++) {
      const j = apis.findIndex(item => item.apiName === this.props.apis[i].apiName)
      if(j !== -1) {
        const smodifyApiRs = await smodifyApi.modifyApi(apis[j].apiUid, this.props.apis[i], apis[j].stages)
        if(!smodifyApiRs.responseStatus) return{
            responseStatus: false,
            error: smodifyApiRs.error
          }
        newApis = newApis.concat({
          groupId: this.groupId,
          apiUid: apis[j].apiUid
        })
      }else {
        Slogger.info('创建新API')
        const screateApi = new SCreateApi({
          access: this.access,
          region: this.props.region,
          groupId: this.groupId,
          api: this.props.apis[i]
        })
        const createsApiRes =  await screateApi.createApiByConfig()
        if(!createsApiRes.responseStatus) return {
          responseStatus: false,
          error: createsApiRes.error
        }
        newApis = newApis.concat({
          groupId: this.groupId,
          apiUid: createsApiRes.apiId
        })
      }
    }
    //发布apis
    Slogger.info('批量发布api...')
    const deployApisRes = await new SDeployApi({
        stageName: ApiStageName.RELEASE,
        apis: newApis,
        access:this.access,
        region: this.props.region
    }).batchDeployApis()
    if(deployApisRes.responseStatus) {
        Slogger.info('发布成功。');
        // Slogger.info('发布成功。', `使用 http://${this.subDomain+(this.props.basePath || '')} 拼接api请求path作为api网关访问地址`)
        sStore.setDomain(`http://${this.subDomain+(this.props.basePath || '')}`)
    }
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
