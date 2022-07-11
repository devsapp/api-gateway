import { InputProps } from './common/entity';
export default class ComponentDemo {
    /**
     * demo 实例
     * @param inputs
     * @returns
     */
    test(inputs: InputProps): Promise<{
        hello: string;
    }>;
    deploy(inputs: InputProps): Promise<void>;
}
