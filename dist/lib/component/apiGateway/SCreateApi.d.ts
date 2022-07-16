import { SClientResponseBody, SSingleApiConfig } from '../../declaration/interface';
export declare class SCreateApi {
    config: SSingleApiConfig;
    constructor(config: SSingleApiConfig);
    createApiByConfig(): Promise<SClientResponseBody>;
}
