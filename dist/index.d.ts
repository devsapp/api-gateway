import { InputProps } from './lib/declaration/entity';
export default class ComponentDemo {
    deploy(inputs: InputProps): Promise<void>;
    delete(inputs: InputProps): Promise<void>;
    modify(inputs: InputProps): Promise<void>;
    private help;
}
