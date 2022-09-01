/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-13 23:56:18
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-14 22:48:20
 */
export const defaultApi = {
  visibility: 'PRIVATE',
  forceNonceCheck: false,
  disableInternet: false,
  authType: 'ANONYMOUS',
  requestConfig: {
    requestProtocol: 'HTTP,HTTPS',
    requestHttpMethod: 'ANY',
    // requestPath: '/subtract',
    bodyFormat: '',
    postBodyDescription: '',
    requestMode: 'PASSTHROUGH',
    bodyModel: '',
  },
  backendEnable: false,
  serviceConfig: {
    serviceProtocol: 'HTTP',
    serviceHttpMethod: 'ANY',
    // serviceAddress:
    //   'https://http-request-testapi-kqfxpwcsxl.cn-shenzhen.fcapp.run',
    serviceTimeout: '10000',
    // servicePath: '/api/add',
    mock: 'FALSE',
    mockResult: '',
    ossConfig: { Action: 'GetObject' },
    serviceVpcEnable: 'FALSE',
    vpcConfig: {},
    functionComputeConfig: {
      fcType: 'FCEvent',
      fcRegionId: 'cn-shenzhen',
      path: '',
      fcBaseUrl: '',
    },
    eventBridgeConfig: {},
    contentTypeCatagory: 'CLIENT',
    contentTypeValue: '',
  },
  resultType: 'JSON',
  resultSample: '',
  failResultSample: '',
  errorCodeSamples: '[]',
  openIdConnectConfig: '{}',
  requestParameters: '[]',
  serviceParametersMap: '[]',
  serviceParameters: '[]',
  allowSignatureMethod: 'HmacSHA256',
  appCodeAuthType: '',
  webSocketApiType: 'COMMON',
  // regionId: 'cn-shenzhen',
  other: {},
}
