/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-13 22:10:37
 * @LastEditors: aei imaei@foxmail.com
 * @LastEditTime: 2022-09-02 01:27:24
 */
import * as $CloudAPI20160714 from '@alicloud/cloudapi20160714';
import * as $Util from '@alicloud/tea-util';
import { ClientInit } from '../ClientInit';
import { defaultApi } from '../../constant/api';
import { formatRequest, handleClientRequst, merge } from '../../tools/tools';
import { SClientResponseBody, SSingleApiConfig } from '../../declaration';
export class SCreateApi {
    config: SSingleApiConfig
    constructor(config: SSingleApiConfig) {
        this.config = config
    }
    async createApiByConfig():Promise<SClientResponseBody> {
        let client = ClientInit.createClient(this.config.access.AccessKeyID, this.config.access.AccessKeySecret, this.config.region);
        const defaultApiConfig = {
          groupId: this.config.groupId,
          regionId: this.config.region,
        }
        const currentApiConfig = merge({}, defaultApi, defaultApiConfig, this.config.api)
        let createApiRequest = new $CloudAPI20160714.CreateApiRequest(formatRequest(currentApiConfig));
        let runtime = new $Util.RuntimeOptions({});
        return await handleClientRequst(client, 'createApiWithOptions', createApiRequest, runtime)
    }
}


