import { SModifyApiConfig } from "../../declaration";
export declare class SModifyApi {
    config: SModifyApiConfig;
    constructor(config: SModifyApiConfig);
    modifyApis(): Promise<void>;
    modifyApi(apiId: any, apiConfig: any): Promise<import("../../declaration").SClientResponseBody>;
}
