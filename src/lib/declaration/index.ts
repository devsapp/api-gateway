/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-13 22:50:15
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-16 17:16:11
 */


export interface SAccess {
    AccessKeyID: string
    AccessKeySecret: string
}
export interface SApisGroup {
    access: SAccess
    domain: string
    region: string
    groupId: string
    apis: SApi[]
}
export interface SSingleApiConfig {
    access: SAccess
    domain: string
    region: string
    groupId: string
    api: SApi
}
export type SApi = any

// 运行环境名称
export enum ApiStageName {
    RELEASE = 'RELEASE', //线上
    TEST = 'TEST',
    PRE = 'PRE'
}

export interface BatchDeployApisConfig {
    stageName: ApiStageName
    access: SAccess
    region: string
    description?: string
    apis?: {
        groupId: string
        apiUid: string
    }[]
}
export interface SClientResponseBody {
    responseStatus: boolean
    [prop: string]: any
}