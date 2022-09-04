/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-13 21:53:33
 * @LastEditors: aei imaei@foxmail.com
 * @LastEditTime: 2022-09-04 21:15:44
 */
import {CreateApiGroupResponseBody} from '@alicloud/cloudapi20160714';
import SCreateApiGroup from "./SCreateApiGroup";
import { SApiGateway } from '../apiGateway/SApiGateway';
import { SDeployApi } from '../apiGateway/SDeployApi';
import { ApiStageName } from '../../declaration';
import { Slogger } from '../../tools/tools';
import sStore from '../store';
import { SSetDomain } from '../domain/SSetDomain';
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
        const sCreateApiGroup =  new SCreateApiGroup(this.AccessKeyID, this.AccessKeySecret, this.props)
        const res = await sCreateApiGroup.createApiGroup()
        if(!res.responseStatus) {
            Slogger.error('创建api组失败:', res.error)
            return
        }
        const {groupId, subDomain} = res
        this.groupId = groupId
        this.subDomain = subDomain
        Slogger.info('创建api组成功: ', {
            groupName: this.props.groupName,
            description: this.props.description,
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
                Slogger.error('绑定域名失败:', sSetDomainRes.error)
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