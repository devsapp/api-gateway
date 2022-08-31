import { InputProps } from './declaration/entity';
/**
 * @description 解析yaml并且将必要的阿里云id和key拼装进来
 */
export declare function parseInput(inputs: InputProps): Promise<{
    credentials: any;
    props: any;
    argsObj: any;
}>;
/**
 * @param c1 全部配置（远程返回）
 * @param c2 部分配置（本地配置）
 * @description 比对本地配置和远程配置，并返回合适结构的需更新api配置
 */
export declare function parseApiConfig(c1: any, c2: any): any;
