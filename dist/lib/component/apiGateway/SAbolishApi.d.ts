import { AbolishApisConif, SClientResponseBody } from '../../declaration';
export declare class SAbolishApi {
    config: AbolishApisConif;
    constructor(config: AbolishApisConif);
    batchAbolishApis(): Promise<SClientResponseBody>;
}
