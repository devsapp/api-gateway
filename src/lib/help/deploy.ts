/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-17 15:33:03
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-23 16:43:42
 */
import { Slogger } from "../tools/tools";

export function main() {
    Slogger.log('Options:')
    Slogger.log(' --force -f  Enforce the deployment of API Gateway with configuration')
    Slogger.log(' --edit -e Modify the api gateway according to the configuration')
}