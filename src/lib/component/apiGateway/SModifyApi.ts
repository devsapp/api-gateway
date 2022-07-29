/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-24 13:39:22
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-27 00:29:52
 */
import { SModifyApiConfig } from "../../declaration"
import * as $CloudAPI20160714 from '@alicloud/cloudapi20160714';
import * as $Util from '@alicloud/tea-util';
import { formatRequest, handleClientRequst, merge } from '../../tools/tools';
import { ClientInit } from '../ClientInit';
import { defaultApi } from "../../config/api";

export class SModifyApi {
    config: SModifyApiConfig
    constructor(config: SModifyApiConfig) {
        this.config = config
    }
    async modifyApis() {
        
    }
    async modifyApi(apiId, apiConfig) {
        let client = ClientInit.createClient(this.config.access.AccessKeyID, this.config.access.AccessKeySecret, this.config.region);
        let config = {
            groupId: this.config.groupId,
            apiId,
        }
        const currentApiConfig = merge({}, defaultApi, config, apiConfig)
        let modifyApiRequest = new $CloudAPI20160714.ModifyApiRequest(formatRequest(currentApiConfig));
        let runtime = new $Util.RuntimeOptions({ });
        return await handleClientRequst(client, 'modifyApiWithOptions', modifyApiRequest, runtime)  
    }
}