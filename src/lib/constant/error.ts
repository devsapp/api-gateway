/*
 * @Date: 2022-09-02 00:52:25
 * @LastEditors: aei imaei@foxmail.com
 * @LastEditTime: 2022-09-05 00:03:32
 * @FilePath: \api-gateway\src\lib\constant\error.ts
 * @description: 
 */
import { SError } from "../declaration"
const errorDictionary = new Map<string, SError>()

// type 1 是直接抛出错误，2是打印错误继续执行

errorDictionary.set('ExceedLimitGroupWithoutFormalDomain', {
    type: 1,
    text: '超出api网关组最大限度'
})

errorDictionary.set('RepeatedPath', {
    type: 1,
    text: '当前api存在在线api方法路径重复，请删除或修改后继续部署'
})

export {
    errorDictionary
}