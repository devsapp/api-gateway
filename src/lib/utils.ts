/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-06 22:01:52
 * @LastEditors: aei imaei@foxmail.com
 * @LastEditTime: 2022-09-05 00:35:19
 */
import { InputProps } from './declaration/entity'
import { deepClone, handleAutoFormat, merge, Slogger } from './tools/tools'
import sStore from './component/store/index'
import * as core from '@serverless-devs/core';

/**
 * @description 解析yaml并且将必要的阿里云id和key拼装进来
 */
export async function parseInput(inputs: InputProps) {
  const theInputs = deepClone(inputs)
  
  let credentials = theInputs.credentials;
  if (core.lodash.isEmpty(credentials)) {
    const credentialRes: any = await core.getCredential(theInputs?.project?.access);
    credentials = {
      AccountID: credentialRes?.AccountID,
      AccessKeyID: credentialRes?.AccessKeyID,
      AccessKeySecret: credentialRes?.AccessKeySecret,
      SecurityToken: credentialRes?.SecurityToken,
    };
  }

  const props = handleAutoFormat(theInputs.props)
  const comParse: any = core.commandParse(theInputs);

  return {
    credentials,
    props,
    argsObj: comParse?.data || [],
  }
}

/**
 * @param c1 全部配置（远程返回）
 * @param c2 部分配置（本地配置）
 * @description 比对本地配置和远程配置，并返回合适结构的需更新api配置
 */
export function parseApiConfig(c1, c2) {
  // 除了http方式之外的网关，参数暂时不明，这里直接采取全局更新
  if(myParse(c2.serviceConfig).serviceProtocol && (myParse(c2.serviceConfig).serviceProtocol !== 'HTTP' || !myParse(c2.serviceConfig).serviceProtocol)) return {
    needModify: 1 //需要api全局更新
  }
  const c: any = {}
  function need(obj1, obj2) {
    return obj1 !== obj2 && obj2
  }
  function myStringify(obj) {
    if(typeof obj === 'string') return obj
    return JSON.stringify(obj)
  }
  function myParse(str) {
    if(typeof str === 'string') return JSON.parse(str)
    return str
  }
  need(c1.allowSignatureMethod, c2.allowSignatureMethod) && (c.allowSignatureMethod = c2.allowSignatureMethod)
  need(c1.appCodeAuthType, c2.appCodeAuthType) && (c.appCodeAuthType = c2.appCodeAuthType)
  need(c1.authType, c2.authType) && (c.authType = c2.authType)
  need(myStringify(c1.requestParameters.requestParameter), myStringify(c2.requestParameters)) 
    && (c.requestParameters = myStringify(c2.constantParameters))
  need(myStringify(c1.serviceParameters.serviceParameter), myStringify(c2.serviceParameters)) 
    && (c.serviceParameters = myStringify(c2.serviceParameters))
  need(myStringify(c1.serviceParametersMap.serviceParameterMap), myStringify(c2.serviceParametersMap)) 
    && (c.serviceParametersMap = myStringify(c2.serviceParametersMap))
  need(myStringify(c1.errorCodeSamples.errorCodeSample), myStringify(c2.errorCodeSamples)) 
  && (c.errorCodeSamples = myStringify(c2.errorCodeSamples))
  need(c1.visibility, c2.visibility) && (c.visibility = c2.visibility)
  need(c1.ResultSample, c2.ResultSample) && (c.ResultSample = c2.ResultSample)
  need(c1.disableInternet, c2.disableInternet) && (c.disableInternet = c2.disableInternet)
  need(c1.failResultSample, c2.failResultSample) && (c.failResultSample = c2.failResultSample)
  need(c1.forceNonceCheck, c2.forceNonceCheck) && (c.forceNonceCheck = c2.forceNonceCheck)
  need(c1.requestConfig.bodyFormat, myParse(c2.requestConfig).bodyFormat) && (c.bodyFormat = myParse(c2.requestConfig).bodyFormat)
  need(c1.requestConfig.postBodyDescription, myParse(c2.requestConfig).postBodyDescription) && (c.postBodyDescription = myParse(c2.requestConfig).postBodyDescription)
  need(c1.requestConfig.requestHttpMethod, myParse(c2.requestConfig).requestHttpMethod) && (c.requestHttpMethod = myParse(c2.requestConfig).requestHttpMethod)
  need(c1.requestConfig.requestPath, myParse(c2.requestConfig).requestPath) && (c.requestPath = myParse(c2.requestConfig).requestPath)
  need(c1.requestConfig.requestMode, myParse(c2.requestConfig).requestMode) && (c.requestMode = myParse(c2.requestConfig).requestMode)
  need(c1.requestConfig.requestProtocol, myParse(c2.requestConfig).requestProtocol) && (c.requestProtocol = myParse(c2.requestConfig).requestProtocol)
  need(c1.serviceConfig.serviceProtocol, myParse(c2.serviceConfig).serviceProtocol) && (c.serviceProtocol = myParse(c2.serviceConfig).serviceProtocol)
  need(c1.serviceConfig.serviceTimeout?.toString(), myParse(c2.serviceConfig).serviceTimeout?.toString()) && (c.serviceTimeout = myParse(c2.serviceConfig).serviceTimeout)
  need(c1.serviceConfig.contentTypeCatagory, myParse(c2.serviceConfig).contentTypeCategory) && (
      c.contentTypeCategory = myParse(c2.serviceConfig).contentTypeCategory, 
      c.contentTypeCatagory = myParse(c2.serviceConfig).contentTypeCategory
    )
  need(c1.serviceConfig.contentTypeValue, myParse(c2.serviceConfig).contentTypeValue) && (c.contentTypeValue = myParse(c2.serviceConfig).contentTypeValue)
  //特殊判断：
  if(myParse(c2.serviceConfig).serviceHttpMethod && c1.serviceConfig.serviceHttpMethod !== myParse(c2.serviceConfig).serviceHttpMethod) {
    Slogger.debug('serviceHttpMethod不同')
    c.httpConfig = {}
    c.httpConfig.serviceHttpMethod = myParse(c2.serviceConfig).serviceHttpMethod
  }
  if(`${c1.serviceConfig.serviceAddress}${c1.serviceConfig.servicePath}` !== `${myParse(c2.serviceConfig).serviceAddress}${myParse(c2.serviceConfig).servicePath}`) {
    Slogger.debug('serviceAddress，serviceAddress不同')
    if(!c.httpConfig) c.httpConfig = {}
    c.httpConfig.serviceAddress = myParse(c2.serviceConfig).serviceAddress
    c.httpConfig.servicePath =  myParse(c2.serviceConfig).servicePath
  }
  c.httpConfig && (c.httpConfig = JSON.stringify(c.httpConfig))
  Slogger.debug('解析api参数完成', c)
  if(Object.keys(c).length === 0) return {needModify: 0}
  return merge({}, {
    apiId: c1.apiId,
    apiName: c1.apiName,
    visibility: "PRIVATE",
    resultType: "JSON",
    serviceProtocol: "HTTP", //必须加上，否则后端修改不生效
    resultSample: "",
    httpConfig: "{}" //必须加上，否则报错
  }, c)
}



/**
 * @description 检测必填项
 */
 export const preCheck = (props) => {
  const requires = []
  if(!props.region) requires.push('region')
  if(!props.groupName) requires.push('groupName')
  if(!props.apis) requires.push('apis')
  if(!Array.isArray(props.apis)) {
    throw new core.CatchableError('apis参数应为数组结构')
  }
  props.apis.forEach(item => {
    if(!item.apiName && !requires.includes('apiName')) requires.push('apiName')
    if(!item.requestConfig && !requires.includes('requestConfig')) requires.push(item.apiName + '.requestConfig')
    if(!item.serviceConfig && !requires.includes('serviceConfig')) requires.push(item.apiName + '.serviceConfig')

  })
  if(requires.length === 0) return
  const error = requires.reduce((error, item) => {
    return error + '\n' + item
  }, '配置文件缺少字段: ')
  throw new core.CatchableError(error)
}

export const  inquirerRemote = async ()  => {
  Slogger.info('已存在远程API组，是否使用本地配置更新?')
  const ans: {
    option: string
  } = await core.inquirer.prompt([
    {
        type: 'list',
        name: 'option',
        message: 'Choose whether to use local or a remote configuration',
        choices: [
          {name:'use local'},
          {name:'use remote'}
        ]
    }
  ])
  switch (ans.option) {
    case 'use local':
      sStore.useLocal()
      return
    case 'use remote':
      Slogger.info('已使用远程配置')
      break
    default:
      break
  }
  sStore.useRemote()
  return
}
