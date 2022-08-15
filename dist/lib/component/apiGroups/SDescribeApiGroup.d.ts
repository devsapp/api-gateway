import { SApiGroupDescription, SClientResponseBody } from '../../declaration';
export declare class SDescribeApiGroup {
    config: SApiGroupDescription;
    constructor(config: SApiGroupDescription);
    describeApiGroups(): Promise<SClientResponseBody>;
    describeApiGroup(): Promise<SClientResponseBody>;
    setGroupId(str: any): void;
}
