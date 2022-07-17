import { SClientResponseBody, SSingleApiConfig } from '../../declaration';
export declare class SCreateApi {
    config: SSingleApiConfig;
    constructor(config: SSingleApiConfig);
    createApiByConfig(): Promise<SClientResponseBody>;
}
