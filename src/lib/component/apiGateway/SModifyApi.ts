/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-24 13:39:22
 * @LastEditors: aei imaei@foxmail.com
 * @LastEditTime: 2022-09-01 01:13:42
 */
import { SModifyApiConfig } from "../../declaration"
import * as $CloudAPI20160714 from '@alicloud/cloudapi20160714';
import * as $Util from '@alicloud/tea-util';
import { blockProcess, formatRequest, handleClientRequst, merge, Slogger } from '../../tools/tools';
import { ClientInit } from '../ClientInit';
import { defaultApi } from "../../config/api";
import { SDescribeApis } from "./SDescribeApis";
import { parseApiConfig } from "../../utils";
import { SAbolishApi } from "./SAbolishApi";

export class SModifyApi {
    config: SModifyApiConfig
    constructor(config: SModifyApiConfig) {
        this.config = config
    }
    /**
     * @description 修改api时对比是否需要更新,实现动态更新
     */
    async modifyApi(apiId, apiConfig, stages) {
        const sDescribeApis = new SDescribeApis({
            access: this.config.access,
            groupId: this.config.groupId,
            region: this.config.region
        })
        const sDescribeApisRes = await sDescribeApis.describeApi(apiId)
        const currentApiConfig =  parseApiConfig(sDescribeApisRes, apiConfig)
        if(currentApiConfig.needModify === 0) {
            // Slogger.info(`${apiConfig.apiName} 远程无需更新`)
            return {
                responseStatus: true,
                error: 'no updates are needed here'
            }
        }
        if(stages.length > 0) {
            const sabolishApi = new SAbolishApi({
            access: this.config.access,
            region: this.config.region,
            apis: [{
                groupId: this.config.groupId,
                apiUid: apiId,
                stages
            }],
            })
            const batchAbolishApisRes = await sabolishApi.batchAbolishApis()
            if (!batchAbolishApisRes.responseStatus) return {
                responseStatus: false,
                error: batchAbolishApisRes.error
            }
        }
        // 进行阻塞 下线和修改之间有延迟
        await blockProcess(100)
        if(currentApiConfig.needModify === 1) {
           return await this.modifyApiAll(apiId, apiConfig)
        }
        // console.log(currentApiConfig)
        let client = ClientInit.createClient(this.config.access.AccessKeyID, this.config.access.AccessKeySecret, this.config.region);
        let modifyApiConfigurationRequest = new $CloudAPI20160714.ModifyApiConfigurationRequest(currentApiConfig);
        let runtime = new $Util.RuntimeOptions({});
        return await handleClientRequst(client, 'modifyApiConfigurationWithOptions', modifyApiConfigurationRequest, runtime)  
    }
    // 更新当前修改api操作，此为全部修改
    async modifyApiAll(apiId, apiConfig) {
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