/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-17 15:37:16
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-23 16:44:50
 */
import { Slogger } from "../tools/tools";
import { main as deployMain } from "./deploy";

export function showHelpDoc(docName: string) {
    switch (docName) {
        case 'deploy':
            deployMain()
            break;
        default:
            Slogger.log('None')
            break;
    }
}