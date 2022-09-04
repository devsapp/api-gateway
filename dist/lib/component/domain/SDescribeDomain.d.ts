import { SDescribeDomainConfig } from "../../declaration";
export declare class SDescribeDomain {
    config: SDescribeDomainConfig;
    constructor(config: SDescribeDomainConfig);
    describeDomain(): Promise<import("../../declaration").SClientResponseBody>;
}
