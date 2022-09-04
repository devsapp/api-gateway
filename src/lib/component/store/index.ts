/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-08-06 18:09:13
 * @LastEditors: aei imaei@foxmail.com
 * @LastEditTime: 2022-09-04 00:30:40
 */
export class SStore {
    private domain: string
    private custom_domain: string
    private use_remote: number // 是否使用远程配置 0 是未作出决定 1 是使用 2 是不使用
    constructor() {
        this.custom_domain = ''
        this.domain = ''
        this.use_remote = 0
    }
    setDomain(str: string) {
        this.domain = str
    }
    getDomain() {
        return this.domain
    }
    setCustom(str: string) {
        this.custom_domain = str
    }
    getCustom() {
        return this.custom_domain
    }
    useRemote() {
        this.use_remote = 1
    }
    useLocal() {
        this.use_remote = 2
    }
    isRomote() {
        return (this.use_remote === 1)
    }
    isLocal() {
        return (this.use_remote === 2)
    }
}

export default (new SStore())