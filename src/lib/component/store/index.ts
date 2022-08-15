/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-08-06 18:09:13
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-08-07 23:28:58
 */
export class SStore {
    private domain: string
    private custom_domain: string
    constructor() {
        this.custom_domain = ''
        this.domain = ''
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
}

export default (new SStore())