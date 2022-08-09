import { SModifyApiConfig } from "../../declaration";
export declare class SModifyApi {
    config: SModifyApiConfig;
    constructor(config: SModifyApiConfig);
    modifyApis(): Promise<void>;
    /**
     * @description 修改api时对比是否需要更新,实现动态更新
     */
    modifyApi(apiId: any, apiConfig: any): Promise<import("../../declaration").SClientResponseBody>;
    modifyApiAll(apiId: any, apiConfig: any): Promise<import("../../declaration").SClientResponseBody>;
}
