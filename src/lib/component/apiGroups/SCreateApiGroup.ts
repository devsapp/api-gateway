/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-11 22:51:19
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-15 00:37:32
 */
import * as $CloudAPI20160714 from '@alicloud/cloudapi20160714';
// import * as $OpenApi from '@alicloud/openapi-client';
import * as $Util from '@alicloud/tea-util';
import { handleClientRequst } from '../../tools/tools';
import { ClientInit } from '../ClientInit';
export default class SCreateApiGroup {
    private props
    private AccessKeyID:string
    private AccessKeySecret: string
    constructor(AccessKeyID: string, AccessKeySecret:string, props) {
        this.AccessKeyID = AccessKeyID 
        this.AccessKeySecret = AccessKeySecret
        this.props = props
    }
    /**
     * @description 创建api网关组
     */
    async createApiGroup() {
        let client = ClientInit.createClient(this.AccessKeyID, this.AccessKeySecret, this.props.region);
        let createApiGroupRequest = new $CloudAPI20160714.CreateApiGroupRequest({
            groupName: this.props.groupName,
            basePath: this.props.basePath,
            description: this.props.description || "",
            instanceId: this.props.instanceId
        });
        let runtime = new $Util.RuntimeOptions({ });
        return await handleClientRequst(client, 'createApiGroupWithOptions', createApiGroupRequest, runtime)  
    }
}
