import { SApiGroupDescription } from '../../declaration';
export declare class SDescribeApiGroup {
    config: SApiGroupDescription;
    constructor(config: SApiGroupDescription);
    describeApiGroups(): Promise<import("../../declaration").SClientResponseBody>;
    setGroupId(str: any): void;
}
