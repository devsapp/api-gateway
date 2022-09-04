/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-11 22:30:43
 * @LastEditors: aei imaei@foxmail.com
 * @LastEditTime: 2022-09-05 00:41:05
 */
import { constant } from '../constant/autoMap'
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
    //特殊处理阿里云的错误，单词ContentTypeCategory拼错
  }
  return obj
}
import CloudAPI20160714 from '@alicloud/cloudapi20160714'
import * as $Util from '@alicloud/tea-util'
import { SClientResponseBody } from '../declaration'
import { Logger, CatchableError } from '@serverless-devs/core'
import { errorDictionary } from '../constant/error'
export async function handleClientRequst(
  client: CloudAPI20160714,
  fnName: string,
  body,
  runtime: $Util.RuntimeOptions
): Promise<SClientResponseBody> {
  try {
    return Object.assign(
      { responseStatus: true },
      (await client[fnName](body, runtime)).body
    )
  } catch (error) {
    // console.error(error)
    return {
      responseStatus: false,
      error,
    }
  }
}

function parseError(message: string) {
  Logger.debug('解析Error', '开始')
  const firstIndex = message.indexOf('request id')
  if(firstIndex === -1)  return message
  message = message.slice(0, firstIndex).replace(/code: [0-9]+, /g, '')
  const transform = errorDictionary.get(message.split(':')[0])
  if(transform) {
    if(transform.type)
    throw new CatchableError(transform.text)
    message = transform.text
  } 
  Logger.debug('解析Error', '完成')
  return message
}

/**
 * @description  封装core包的打印方法，去除不必要参数，支持读入多个log以及对象log
 */
export class Slogger {
  static logger = new Logger('API-GATEWAY')
  static formatLog(logs: any[]) {
    logs.forEach((element,index) => {
      if(element instanceof Error) {
        logs[index] = element.stack || element.message
      }
    });
    const arr: any[] = deepClone(logs, [])
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'string') continue
      if (typeof arr[i] === 'object') {
        arr.splice(i, 1)
        let len = 0
        for (const key in logs[i]) {
          arr.splice(i + len, 0, `${key}: ${logs[i][key]}`)
          len++
        }
        if(len) i += len - 1
      }
      
    }
    return arr
  }
  static info(...logs) {
    logs = this.formatLog(logs)
    logs.forEach(log => {
      this.logger.info(log)
    })
  }

  static warn(...logs) {
    logs = this.formatLog(logs)
    logs.forEach(log => {
      this.logger.warn(log)
    })
  }
  // 这里对error进行处理，解析存在错误栈的错误，最终只显示名称，名且对一些常用错误友好提示
  static error(...logs) {
    for(let i = 0; i < logs.length; i++) {
     if(Object.prototype.toString.call(logs[i])=== '[object Error]') {
      logs[i] = parseError(logs[i].message)
     }
    }
    logs = this.formatLog(logs)
    logs.forEach(log => {
      this.logger.error(log)
    })
  }
  static debug(...logs) {
    logs = this.formatLog(logs)
    logs.forEach(log => {
      this.logger.debug(log)
    })
  }
  static log(...logs) {
    logs = this.formatLog(logs)
    logs.forEach(log => {
      this.logger.log(log)
    })
  }
  static task(
    tasks: {
      title: string
      task: Function
    }[]
  ) {
    this.logger.task('tast', tasks)
  }
}


/**
 * @description 阻塞
 */
export const blockProcess = async (time = 1000) =>{
  return new Promise<void>((res) => {
    setTimeout(() => {res()}, time)
  })
}
