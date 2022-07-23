import { SClientResponseBody, SDeleteApiConfig } from '../../declaration';
export declare class SDeleteApi {
    config: SDeleteApiConfig;
    constructor(config: SDeleteApiConfig);
    deleteApis(): Promise<SClientResponseBody>;
    deleteApi(groupId: any, apiId: any): Promise<SClientResponseBody>;
}
