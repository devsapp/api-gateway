import { SAccess, SClientResponseBody } from '../../declaration';
export declare class SModifyApiGroup {
    access: SAccess;
    props: any;
    groupId: string;
    subDomain: string;
    constructor(AccessKeyID: string, AccessKeySecret: string, props: any);
    modifyApiGroupAndApis(): Promise<SClientResponseBody>;
    modifyApiGroup(): Promise<SClientResponseBody>;
    setGroupId(groupId: string): void;
}
