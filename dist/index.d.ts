import { InputProps } from './common/entity';
export default class ComponentDemo {
    deploy(inputs: InputProps): Promise<void>;
    help(methodName: string): Promise<void>;
}
