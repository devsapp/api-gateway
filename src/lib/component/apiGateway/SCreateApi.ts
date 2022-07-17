/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-13 22:10:37
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-17 14:26:21
 */
import * as $CloudAPI20160714 from '@alicloud/cloudapi20160714';
// 依赖的模块可通过下载工程中的模块依赖文件或右上角的获取 SDK 依赖信息查看
import * as $Util from '@alicloud/tea-util';
import { ClientInit } from '../ClientInit';
import { defaultApi } from '../../config/api';
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
          serviceConfig: {
            serviceAddress: this.config.domain
          }
        }
        const currentApiConfig = merge({}, defaultApi, defaultApiConfig, this.config.api)
        let createApiRequest = new $CloudAPI20160714.CreateApiRequest(formatRequest(currentApiConfig));
        let runtime = new $Util.RuntimeOptions({});
        return await handleClientRequst(client, 'createApiWithOptions', createApiRequest, runtime)
    }
}


