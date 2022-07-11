/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-11 22:51:19
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-12 00:52:02
 */
import * as $CloudAPI20160714 from '@alicloud/cloudapi20160714';
// import * as $OpenApi from '@alicloud/openapi-client';
import * as $Util from '@alicloud/tea-util';
import { InputProps } from '../../../common/entity'
import { ClientInit } from '../ClientInit';
import { getAccess, handleAutoFormat } from '../tools';
export default class CreateApiGroups {
    private props
    private AccessKeyID
    private AccessKeySecret
    constructor(inputs: InputProps) {
        [this.AccessKeyID, this.AccessKeySecret] = getAccess(inputs)
        this.props = handleAutoFormat(inputs.props)
    }
    async deploy(): Promise<void | $CloudAPI20160714.CreateApiGroupResponseBody> {
    let client = ClientInit.createClient(this.AccessKeyID, this.AccessKeySecret, this.props.region);
    let createApiGroupRequest = new $CloudAPI20160714.CreateApiGroupRequest({
        groupName: this.props.groupName,
        basePath: this.props.basePath,
        description: this.props.description || "",
        instanceId: this.props.instanceId
     });
    let runtime = new $Util.RuntimeOptions({ });
    try {
        const res = await (await client.createApiGroupWithOptions(createApiGroupRequest, runtime)).body;
        return res
    } catch (error) {
        console.error(error)
    }    
    }
}
