import { SModifyApiConfig } from "../../declaration";
export declare class SModifyApi {
    config: SModifyApiConfig;
    constructor(config: SModifyApiConfig);
    modifyApis(): Promise<void>;
    /**
     * @description 修改api时需要对比是否需要更新
     */
    modifyApi(apiId: any, apiConfig: any): Promise<import("../../declaration").SClientResponseBody>;
}
