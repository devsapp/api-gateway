import { BatchDeployApisConfig } from '../../declaration';
export declare class SDeployApi {
    private apisconfig;
    constructor(apisconfig: BatchDeployApisConfig);
    batchDeployApis(): Promise<import("../../declaration").SClientResponseBody>;
}
