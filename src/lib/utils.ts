/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-06 22:01:52
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-13 22:35:15
 */

import { InputProps } from '../common/entity'
import { getAccess, handleAutoFormat } from './component/tools'

/**
 * @description 解析yaml并且将必要的阿里云id和key拼装进来
 */
export function parseInput(inputs: InputProps) {
  const [AccessKeyID, AccessKeySecret] = getAccess(inputs)
  const props = handleAutoFormat(inputs.props)

  return {
    AccessKeyID,
    AccessKeySecret,
    props,
  }
}
