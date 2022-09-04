/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-08-07 15:18:22
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-08-15 21:36:08
 */
import { SSetDomainConfig } from "../../declaration";
import { handleClientRequst, Slogger } from "../../tools/tools";
import * as $CloudAPI20160714 from '@alicloud/cloudapi20160714'
import * as $Util from '@alicloud/tea-util'
import { ClientInit } from "../ClientInit";

export class SSetDomain {
    config: SSetDomainConfig
    constructor(config: SSetDomainConfig) {
        this.config = config
    }
    async setDomain() {
        Slogger.info('绑定域名中...')
        let client = ClientInit.createClient(  this.config.access.AccessKeyID,
            this.config.access.AccessKeySecret,
            this.config.region);
        let setDomainRequest = new $CloudAPI20160714.SetDomainRequest({
            groupId: this.config.groupId,
            domainName: this.config.domainName,
        });
        let runtime = new $Util.RuntimeOptions({ });
        return await handleClientRequst(
            client,
            'setDomainWithOptions',
            setDomainRequest,
            runtime
        )
    }
}