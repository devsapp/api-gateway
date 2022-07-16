import { InputProps } from '../../common/entity';
export declare function handleAutoFormat(o: any): any;
export declare function getAccess(inputs: InputProps): string[];
export declare function deepClone(initalObj: any, finalObj?: any): any;
export declare function merge(initalObj: any, ...sources: any[]): any;
export declare function generateRandomStr(): string;
/**
 *
 * @param target
 * @description 根据阿里云openApi需求规范参数
 */
export declare function formatRequest(target: object): any;
import CloudAPI20160714 from '@alicloud/cloudapi20160714';
import * as $Util from '@alicloud/tea-util';
import { SClientResponseBody } from '../declaration/interface';
export declare function handleClientRequst(client: CloudAPI20160714, fnName: string, body: any, runtime: $Util.RuntimeOptions): Promise<SClientResponseBody>;
