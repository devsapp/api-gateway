/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-06 22:01:52
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-23 21:06:32
 */

import { InputProps } from './declaration/entity'
import { deepClone, handleAutoFormat } from './tools/tools'



function getAccess(inputs: InputProps) {
  const {
    credentials: { AccessKeyID, AccessKeySecret },
  } = inputs
  return [AccessKeyID, AccessKeySecret]
}

/**
 * @description 解析yaml并且将必要的阿里云id和key拼装进来
 */
export function parseInput(inputs: InputProps) {
  const theInputs = deepClone(inputs)
  const argsObj:string[] = theInputs.argsObj
  const [AccessKeyID, AccessKeySecret] = getAccess(theInputs)
  const props = handleAutoFormat(theInputs.props)
  return {
    AccessKeyID,
    AccessKeySecret,
    props,
    argsObj
  }
}
