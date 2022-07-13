/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-13 22:10:37
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-14 01:43:24
 */
import * as $CloudAPI20160714 from '@alicloud/cloudapi20160714';
// 依赖的模块可通过下载工程中的模块依赖文件或右上角的获取 SDK 依赖信息查看
import Util, * as $Util from '@alicloud/tea-util';
import { ClientInit } from '../ClientInit';
import { defaultApi } from '../../../config/api';
import { deepClone } from '../tools';
export class SCreateApi {
    config: SSingleApiConfig
    constructor(config: SSingleApiConfig) {
        this.config = config
    }
    async createApiByConfig() {
        let client = ClientInit.createClient(this.config.access.AccessKeyID, this.config.access.AccessKeySecret, this.config.region);
        const defaultApiConfig = deepClone(defaultApi)
        defaultApiConfig.groupId = this.config.groupId
        //TODO：写一个深度的assign
        defaultApiConfig.apiName = this.config.api.apiName
        defaultApiConfig.regionId = this.config.api.region || this.config.region
        defaultApiConfig.requestConfig = JSON.stringify(Object.assign({}, defaultApiConfig.requestConfig, this.config.api.requestConfig)) 
        defaultApiConfig.serviceConfig = JSON.stringify(Object.assign({}, defaultApiConfig.serviceConfig, this.config.api.serviceConfig)) 
        console.log('apiConfig', defaultApiConfig)
        let createApiRequest = new $CloudAPI20160714.CreateApiRequest(defaultApiConfig);
        let runtime = new $Util.RuntimeOptions({});
        try {
          // 复制代码运行请自行打印 API 的返回值
          await client.createApiWithOptions(createApiRequest, runtime);
        } catch (error) {
            console.error(error)
          // 如有需要，请打印 error
          Util.assertAsString(error.message);
        }  
    }
}


