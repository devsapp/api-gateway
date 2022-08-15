import CloudAPI20160714 from '@alicloud/cloudapi20160714';
export declare class ClientInit {
    /**
     * @param region 服务地址，默认是深圳
     */
    static createClient: (accessKeyId: string, accessKeySecret: string, region?: any) => CloudAPI20160714;
}
