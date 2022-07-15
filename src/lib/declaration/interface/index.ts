/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-13 22:50:15
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-14 01:09:13
 */
interface SAccess {
    AccessKeyID: string
    AccessKeySecret: string
}
interface SApisGroup {
    access: SAccess
    domain: string
    region: string
    groupId: string
    apis: SApi[]
}
interface SSingleApiConfig {
    access: SAccess
    domain: string
    region: string
    groupId: string
    api: SApi
}
type SApi = any