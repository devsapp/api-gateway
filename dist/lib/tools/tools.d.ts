export declare function handleAutoFormat(o: any): any;
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
import { SClientResponseBody } from '../declaration';
export declare function handleClientRequst(client: CloudAPI20160714, fnName: string, body: any, runtime: $Util.RuntimeOptions): Promise<SClientResponseBody>;
/**
 * @description  封装core包的打印方法，去除不必要参数，支持读入多个log以及对象log
 */
export declare class Slogger {
    static logger: any;
    static formatLog(logs: any[]): any[];
    static info(...logs: any[]): void;
    static warn(...logs: any[]): void;
    static error(...logs: any[]): void;
    static debug(...logs: any[]): void;
    static log(...logs: any[]): void;
    static task(tasks: {
        title: string;
        task: Function;
    }[]): void;
}
/**
 * @description 阻塞
 */
export declare const blockProcess: (time?: number) => Promise<void>;
