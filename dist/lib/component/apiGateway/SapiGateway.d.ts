import { SApisGroup } from '../../declaration/interface';
export declare class SApiGateway {
    private config;
    constructor(config: SApisGroup);
    createApis(): Promise<any[]>;
}
