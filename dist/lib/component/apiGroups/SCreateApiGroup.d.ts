import * as $CloudAPI20160714 from '@alicloud/cloudapi20160714';
export default class SCreateApiGroup {
    private props;
    private AccessKeyID;
    private AccessKeySecret;
    constructor(AccessKeyID: string, AccessKeySecret: string, props: any);
    /**
     * @description 创建api网关组
     */
    createApiGroup(): Promise<$CloudAPI20160714.CreateApiGroupResponseBody | {
        error: any;
    }>;
}
