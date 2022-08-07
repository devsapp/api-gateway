import { CreateApiGroupResponseBody } from '@alicloud/cloudapi20160714';
export declare class SApiGroup {
    private AccessKeyID;
    private AccessKeySecret;
    private props;
    private groupId;
    private subDomain;
    constructor(AccessKeyID: string, AccessKeySecret: string, props: any);
    /**
     * @description 一键部署
    */
    deploy(args?: string[]): Promise<void | CreateApiGroupResponseBody>;
}
