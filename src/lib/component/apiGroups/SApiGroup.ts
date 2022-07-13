/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-13 21:53:33
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-14 01:26:07
 */
import {CreateApiGroupResponseBody} from '@alicloud/cloudapi20160714';
import SCreateApiGroup from "./SCreateApiGroup";
import { SApiGateway } from '../apiGateway/SapiGateway';
export class SApiGroup {
    private AccessKeyID
    private AccessKeySecret
    private props
    private groupId
    private subDomain  //二級域名
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
        if(res.error) {
            return res.error
        }
        const {groupId, subDomain} = res as  CreateApiGroupResponseBody
        this.groupId = groupId
        this.subDomain =subDomain
        console.log('props', this.props)
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
        sApiGateway.createApis()
    }
}