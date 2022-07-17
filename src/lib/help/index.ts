/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-17 15:37:16
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-17 16:16:15
 */
import { main as deployMain } from "./deploy";

export function showHelpDoc(docName: string) {
    switch (docName) {
        case 'deploy':
            deployMain()
            break;
    }
}