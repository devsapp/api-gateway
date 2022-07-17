export interface SAccess {
    AccessKeyID: string;
    AccessKeySecret: string;
}
export interface SApisGroup {
    access: SAccess;
    domain: string;
    region: string;
    groupId: string;
    apis: SApi[];
}
export interface SSingleApiConfig {
    access: SAccess;
    domain: string;
    region: string;
    groupId: string;
    api: SApi;
}
export declare type SApi = any;
export declare enum ApiStageName {
    RELEASE = "RELEASE",
    TEST = "TEST",
    PRE = "PRE"
}
export interface BatchDeployApisConfig {
    stageName: ApiStageName;
    access: SAccess;
    region: string;
    description?: string;
    apis?: {
        groupId: string;
        apiUid: string;
    }[];
}
export interface SClientResponseBody {
    responseStatus: boolean;
    [prop: string]: any;
}
