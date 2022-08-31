import { SApisGroup } from '../../declaration';
export declare class SApiGateway {
    private config;
    constructor(config: SApisGroup);
    createApis(): Promise<any[]>;
}
