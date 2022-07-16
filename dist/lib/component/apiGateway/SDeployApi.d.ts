import { BatchDeployApisConfig } from '../../declaration/interface';
export declare class SDeployApi {
    private apisconfig;
    constructor(apisconfig: BatchDeployApisConfig);
    batchDeployApis(): Promise<import("../../declaration/interface").SClientResponseBody>;
}
