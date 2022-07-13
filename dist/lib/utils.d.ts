import { InputProps } from '../common/entity';
/**
 * @description 解析yaml并且将必要的阿里云id和key拼装进来
 */
export declare function parseInput(inputs: InputProps): {
    AccessKeyID: string;
    AccessKeySecret: string;
    props: any;
};
