import { SSetDomainConfig } from "../../declaration";
export declare class SSetDomain {
    config: SSetDomainConfig;
    constructor(config: SSetDomainConfig);
    setDomain(): Promise<import("../../declaration").SClientResponseBody>;
}
