/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-11 22:30:43
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-16 17:41:25
 */
import { InputProps } from '../../common/entity'
import { constant } from '../component/constant'
//处理auto字段
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
        if (initalObj[i] === 'auto') {
          obj[i] = `${map.get(i)}${generateRandomStr()}`
        } else {
          obj[i] = initalObj[i]
        }
      }
    }
    return obj
  })(o)
}

export function getAccess(inputs: InputProps) {
  const {
    credentials: { AccessKeyID, AccessKeySecret },
  } = inputs
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

function mergeClone(target) {
  if (typeof target === 'object') {
    return target.constructor === Array
      ? deepClone(target, [])
      : deepClone(target, {})
  }
  return target
}

export function merge(initalObj, ...sources) {
  for (const source of sources) {
    for (const key in source) {
      if (source[key] === undefined && key in initalObj) {
        continue
      }
      if (typeof source[key] === 'object') {
        if (
          typeof initalObj[key] === 'object' &&
          Object.prototype.toString.call(initalObj[key]) ===
            Object.prototype.toString.call(initalObj[key])
        ) {
          if (initalObj[key].constructor === Array) {
            initalObj[key] = source[key].map((element, index) => {
              if (typeof initalObj[key][index] === 'object')
                return merge(initalObj[key][index], element)
              return element
            })
            continue
          }
          merge(initalObj[key], source[key])
        } else {
          initalObj[key] = mergeClone(source[key])
        }
      } else {
        initalObj[key] = mergeClone(source[key])
      }
    }
  }
  return initalObj
}

export function generateRandomStr() {
  return Math.random().toString(36).slice(-6)
}

/**
 *
 * @param target
 * @description 根据阿里云openApi需求规范参数
 */
export function formatRequest(target: object) {
  const obj = deepClone(target)
  for (const key in obj) {
    if (typeof obj[key] === 'object') obj[key] = JSON.stringify(obj[key])
  }
  return obj
}
import CloudAPI20160714 from '@alicloud/cloudapi20160714'
import * as $Util from '@alicloud/tea-util';
import { SClientResponseBody } from '../declaration/interface'
export async function handleClientRequst(
  client: CloudAPI20160714,
  fnName: string,
  body,
  runtime: $Util.RuntimeOptions
): Promise<SClientResponseBody> {
  try {
    return Object.assign({responseStatus: true},(await client[fnName](body, runtime)).body) 
  } catch (error) {
    // console.error(error)
    return {
      responseStatus: false,
      error,
    }
  }
}
