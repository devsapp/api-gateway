/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-13 21:53:33
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-15 00:40:56
 */
import {CreateApiGroupResponseBody} from '@alicloud/cloudapi20160714';
import SCreateApiGroup from "./SCreateApiGroup";
import { SApiGateway } from '../apiGateway/SapiGateway';
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
    async deploy(): Promise<void | CreateApiGroupResponseBody> {
        // TODO 根据是否有远程的apiGroup来决定是否创建
        const sCreateApiGroup =  new SCreateApiGroup(this.AccessKeyID, this.AccessKeySecret, this.props)
        const res = await sCreateApiGroup.createApiGroup()
        if(!res.responseStatus) {
            console.log('创建api组失败:', res.error)
            return
        }
        const {groupId, subDomain} = res as  CreateApiGroupResponseBody
        this.groupId = groupId
        this.subDomain = subDomain
        console.log('创建api组成功: ', {
            groupName: this.props.groupName,
            groupId,
            subDomain,
            basePath: this.props.basePath
        })
        const sApiGateway = new SApiGateway({
            access: {
                AccessKeyID: this.AccessKeyID, 
                AccessKeySecret: this.AccessKeySecret  
            },
            region: this.props.region,
            groupId: this.groupId,
            domain: this.props.domain,
            apis: this.props.apis
        })
        const apis = await sApiGateway.createApis()
        console.log('apis', apis)
    }
}