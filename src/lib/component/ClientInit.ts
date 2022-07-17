/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-11 22:51:33
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-16 18:11:56
 */
import CloudAPI20160714 from '@alicloud/cloudapi20160714';
import * as $OpenApi from '@alicloud/openapi-client';
export class ClientInit {
    /**
     * @param region 服务地址，默认是深圳
     */
    static createClient = function(accessKeyId: string, accessKeySecret: string, region?): CloudAPI20160714 {
        let config = new $OpenApi.Config({
        // 您的 AccessKey ID
        accessKeyId: accessKeyId,
        // 您的 AccessKey Secret
        accessKeySecret: accessKeySecret,
        });
        // 访问的域名
        config.endpoint = `apigateway.${region || 'cn-shenzhen'}.aliyuncs.com`;
        return new CloudAPI20160714(config);
    }
}