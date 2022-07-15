interface SAccess {
    AccessKeyID: string;
    AccessKeySecret: string;
}
interface SApisGroup {
    access: SAccess;
    domain: string;
    region: string;
    groupId: string;
    apis: SApi[];
}
interface SSingleApiConfig {
    access: SAccess;
    domain: string;
    region: string;
    groupId: string;
    api: SApi;
}
declare type SApi = any;
