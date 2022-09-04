/*
 * @Date: 2022-09-04 18:45:10
 * @LastEditors: aei imaei@foxmail.com
 * @LastEditTime: 2022-09-04 22:37:42
 * @FilePath: \api-gateway\src\lib\component\domain\SDescribeDomain.ts
 * @description: 
 */
import { SDescribeDomainConfig } from "../../declaration"
import * as $CloudAPI20160714 from '@alicloud/cloudapi20160714'
import * as $Util from '@alicloud/tea-util'
import { ClientInit } from "../ClientInit";
import { handleClientRequst } from "../../tools/tools";
import { Logger } from '@serverless-devs/core'


export class SDescribeDomain {
    config: SDescribeDomainConfig
    constructor(config: SDescribeDomainConfig ) {
        this.config = config
    }
    async describeDomain() {
        let client = ClientInit.createClient(  
            this.config.access.AccessKeyID,
            this.config.access.AccessKeySecret,
            this.config.region);
            Logger.debug('groupId', this.config.groupId)
            Logger.debug('域名:', this.config.domainName)
        let describeDomainRequest = new $CloudAPI20160714.DescribeDomainRequest({
            groupId: this.config.groupId,
            domainName: this.config.domainName,
        });
        let runtime = new $Util.RuntimeOptions({ });
        return await handleClientRequst(
            client,
            'describeDomainWithOptions',
            describeDomainRequest,
            runtime
        )
    }
}