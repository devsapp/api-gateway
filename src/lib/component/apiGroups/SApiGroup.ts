/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-13 21:53:33
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-08-15 21:35:28
 */
import {CreateApiGroupResponseBody} from '@alicloud/cloudapi20160714';
import SCreateApiGroup from "./SCreateApiGroup";
import { SApiGateway } from '../apiGateway/SApiGateway';
import { SDeployApi } from '../apiGateway/SDeployApi';
import { ApiStageName } from '../../declaration';
import { Slogger } from '../../tools/tools';
import sStore from '../store';
import { SSetDomain } from './SSetDomain';
export class SApiGroup {
    private AccessKeyID
    private AccessKeySecret
    private props
    private groupId
    private subDomain  
    constructor(AccessKeyID:string, AccessKeySecret:string, props) {
        this.AccessKeyID = AccessKeyID
        this.AccessKeySecret = AccessKeySecret
        this.props = props
    }
    /**
     * @description 一键部署
    */
    async deploy(args?: string[]): Promise<void | CreateApiGroupResponseBody> {
        // TODO 根据是否有远程的apiGroup来决定是否创建
        const sCreateApiGroup =  new SCreateApiGroup(this.AccessKeyID, this.AccessKeySecret, this.props)
        const res = await sCreateApiGroup.createApiGroup()
        if(!res.responseStatus) {
            Slogger.info('创建api组失败:', res.error)
            return
        }
        const {groupId, subDomain} = res
        this.groupId = groupId
        this.subDomain = subDomain
        Slogger.info('创建api组成功: ', {
            groupName: this.props.groupName,
            groupId,
            subDomain,
            basePath: this.props.basePath || '/'
        })
        const custom_domain = this.props.custom_domain?.trim()
        if(custom_domain) {
            const sSetDomain = new SSetDomain({
                access: {
                    AccessKeyID: this.AccessKeyID, 
                    AccessKeySecret: this.AccessKeySecret  
                },
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
        const sApiGateway = new SApiGateway({
            access: {
                AccessKeyID: this.AccessKeyID, 
                AccessKeySecret: this.AccessKeySecret  
            },
            region: this.props.region,
            groupId: this.groupId,
            apis: this.props.apis
        })
        const apis = await sApiGateway.createApis()
        // Slogger.info('apis', apis)
        const deployApis: {
            groupId: string
            apiUid: string
        }[] = apis.map((item) => {
            return {
                groupId: this.groupId, 
                apiUid: item.apiId
            }
        })
        if(apis.length) {
            Slogger.info('正在发布中...')
            const deployApisRes = await new SDeployApi({
                stageName: ApiStageName.RELEASE,
                apis: deployApis,
                access:{
                    AccessKeyID: this.AccessKeyID, 
                    AccessKeySecret: this.AccessKeySecret  
                },
                region: this.props.region
            }).batchDeployApis()
            if(deployApisRes.responseStatus) {
                Slogger.info('发布成功。')
                sStore.setDomain(`http://${this.subDomain+(this.props.basePath || '')}`)
            }
        }
    }
}