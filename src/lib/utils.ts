/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-06 22:01:52
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-17 15:52:27
 */

import { InputProps } from '../common/entity'
import { handleAutoFormat } from './tools/tools'



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
  const argsObj:string[] = inputs.argsObj
  const [AccessKeyID, AccessKeySecret] = getAccess(inputs)
  const props = handleAutoFormat(inputs.props)

  return {
    AccessKeyID,
    AccessKeySecret,
    props,
    argsObj
  }
}
