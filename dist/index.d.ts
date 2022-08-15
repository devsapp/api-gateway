import { InputProps } from './lib/declaration/entity';
export default class ComponentDemo {
    deploy(inputs: InputProps): Promise<any>;
    remove(inputs: InputProps): Promise<void>;
    modify(inputs: InputProps): Promise<any>;
    private help;
    private enrich;
}
