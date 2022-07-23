import { SAccess, SClientResponseBody } from "../../declaration";
export declare class SDeleteApiGroup {
    access: SAccess;
    props: any;
    constructor(AccessKeyID: string, AccessKeySecret: string, props: any);
    /**
     * @description 一键删除api组
     */
    deleteApiGroup(): Promise<SClientResponseBody>;
}
