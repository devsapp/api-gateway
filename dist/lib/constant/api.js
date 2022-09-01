"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultApi = void 0;
/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-13 23:56:18
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-14 22:48:20
 */
exports.defaultApi = {
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jb25zdGFudC9hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7OztHQU1HO0FBQ1UsUUFBQSxVQUFVLEdBQUc7SUFDeEIsVUFBVSxFQUFFLFNBQVM7SUFDckIsZUFBZSxFQUFFLEtBQUs7SUFDdEIsZUFBZSxFQUFFLEtBQUs7SUFDdEIsUUFBUSxFQUFFLFdBQVc7SUFDckIsYUFBYSxFQUFFO1FBQ2IsZUFBZSxFQUFFLFlBQVk7UUFDN0IsaUJBQWlCLEVBQUUsS0FBSztRQUN4Qiw0QkFBNEI7UUFDNUIsVUFBVSxFQUFFLEVBQUU7UUFDZCxtQkFBbUIsRUFBRSxFQUFFO1FBQ3ZCLFdBQVcsRUFBRSxhQUFhO1FBQzFCLFNBQVMsRUFBRSxFQUFFO0tBQ2Q7SUFDRCxhQUFhLEVBQUUsS0FBSztJQUNwQixhQUFhLEVBQUU7UUFDYixlQUFlLEVBQUUsTUFBTTtRQUN2QixpQkFBaUIsRUFBRSxLQUFLO1FBQ3hCLGtCQUFrQjtRQUNsQixxRUFBcUU7UUFDckUsY0FBYyxFQUFFLE9BQU87UUFDdkIsMkJBQTJCO1FBQzNCLElBQUksRUFBRSxPQUFPO1FBQ2IsVUFBVSxFQUFFLEVBQUU7UUFDZCxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1FBQ2xDLGdCQUFnQixFQUFFLE9BQU87UUFDekIsU0FBUyxFQUFFLEVBQUU7UUFDYixxQkFBcUIsRUFBRTtZQUNyQixNQUFNLEVBQUUsU0FBUztZQUNqQixVQUFVLEVBQUUsYUFBYTtZQUN6QixJQUFJLEVBQUUsRUFBRTtZQUNSLFNBQVMsRUFBRSxFQUFFO1NBQ2Q7UUFDRCxpQkFBaUIsRUFBRSxFQUFFO1FBQ3JCLG1CQUFtQixFQUFFLFFBQVE7UUFDN0IsZ0JBQWdCLEVBQUUsRUFBRTtLQUNyQjtJQUNELFVBQVUsRUFBRSxNQUFNO0lBQ2xCLFlBQVksRUFBRSxFQUFFO0lBQ2hCLGdCQUFnQixFQUFFLEVBQUU7SUFDcEIsZ0JBQWdCLEVBQUUsSUFBSTtJQUN0QixtQkFBbUIsRUFBRSxJQUFJO0lBQ3pCLGlCQUFpQixFQUFFLElBQUk7SUFDdkIsb0JBQW9CLEVBQUUsSUFBSTtJQUMxQixpQkFBaUIsRUFBRSxJQUFJO0lBQ3ZCLG9CQUFvQixFQUFFLFlBQVk7SUFDbEMsZUFBZSxFQUFFLEVBQUU7SUFDbkIsZ0JBQWdCLEVBQUUsUUFBUTtJQUMxQiwyQkFBMkI7SUFDM0IsS0FBSyxFQUFFLEVBQUU7Q0FDVixDQUFBIn0=