import { SApisDescription } from '../../declaration';
export declare class SDescribeApis {
    private config;
    constructor(config: SApisDescription);
    describeApis(pageNumber: any): Promise<import("../../declaration").SClientResponseBody>;
}
