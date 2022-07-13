/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-11 22:30:43
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-14 01:30:14
 */
import { InputProps } from '../../common/entity'
import { constant } from './constant'
//处理
export function handleAutoFormat(o: any) {
    const map = new Map()
    Object.keys(constant.autoMapTable).forEach(item => {
        map.set(item, constant.autoMapTable[item])
    })
    return (function deepFormat(initalObj, finalObj?) {
        var obj = finalObj || {}
        for (var i in initalObj) {
          if (typeof initalObj[i] === 'object') {
            obj[i] = initalObj[i].constructor === Array ? [] : {}
            deepFormat(initalObj[i], obj[i])
          } else {
            if(initalObj[i] === 'auto') {
                obj[i] = `${map.get(i)}${Math.floor(Math.random() * 100000)}`
            }else {
                obj[i] = initalObj[i]
            } 
          }
        }
        return obj
    })(o)
}

export function getAccess(inputs: InputProps) {
    const { credentials:{AccessKeyID, AccessKeySecret} }= inputs
    return [AccessKeyID, AccessKeySecret]
}

export function deepClone(initalObj, finalObj?) {
    var obj = finalObj || {}
    for (var i in initalObj) {
      if (typeof initalObj[i] === 'object') {
        //判断构造函数是不是Array即initalObj[i]是不是数组，注意判断数组不能用typeof，因为typeof [1,2,3] === 'object'
        obj[i] = initalObj[i].constructor === Array ? [] : {}
        deepClone(initalObj[i], obj[i]) 
      } else {
        obj[i] = initalObj[i]
      }
    }
    return obj
}
