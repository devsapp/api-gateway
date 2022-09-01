/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-13 22:50:15
 * @LastEditors: aei imaei@foxmail.com
 * @LastEditTime: 2022-09-02 01:34:52
 */


export interface SAccess {
    AccessKeyID: string
    AccessKeySecret: string
}
export interface SApisGroup {
    access: SAccess
    region: string
    groupId: string
    apis: SApi[]
}
export interface SSingleApiConfig {
    access: SAccess
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
    error?:any
}

export interface SApiGroupDescription {
    access: SAccess
    region: string
    groupId?: string
    groupName: string
}

export interface SApisDescription {
    access: SAccess
    region: string
    groupId: string
}

export interface AbolishApisConif {
    access: SAccess
    region: string
    apis: {
        groupId: string
        apiUid: string
        stages: {
          description?: string
          stageId: string
          stageName: string
        }[]
    }[]
  }

export interface SDeleteApiConfig {
    access: SAccess
    region: string
    apis: {
        groupId: string
        apiId: string
    }[]  //直接采用数组，兼容删除多个api
}

export interface SModifyApiConfig {
    access: SAccess
    region: string
    groupId: string  
}

export interface SSetDomainConfig {
    access: SAccess
    region: string
    groupId: string
    domainName: string
}

export interface SError {
    type: number,
    text: string
}