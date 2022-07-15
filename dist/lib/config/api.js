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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jb25maWcvYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7R0FNRztBQUNVLFFBQUEsVUFBVSxHQUFHO0lBQ3hCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLGVBQWUsRUFBRSxLQUFLO0lBQ3RCLGVBQWUsRUFBRSxLQUFLO0lBQ3RCLFFBQVEsRUFBRSxXQUFXO0lBQ3JCLGFBQWEsRUFBRTtRQUNiLGVBQWUsRUFBRSxZQUFZO1FBQzdCLGlCQUFpQixFQUFFLEtBQUs7UUFDeEIsNEJBQTRCO1FBQzVCLFVBQVUsRUFBRSxFQUFFO1FBQ2QsbUJBQW1CLEVBQUUsRUFBRTtRQUN2QixXQUFXLEVBQUUsYUFBYTtRQUMxQixTQUFTLEVBQUUsRUFBRTtLQUNkO0lBQ0QsYUFBYSxFQUFFLEtBQUs7SUFDcEIsYUFBYSxFQUFFO1FBQ2IsZUFBZSxFQUFFLE1BQU07UUFDdkIsaUJBQWlCLEVBQUUsS0FBSztRQUN4QixrQkFBa0I7UUFDbEIscUVBQXFFO1FBQ3JFLGNBQWMsRUFBRSxPQUFPO1FBQ3ZCLDJCQUEyQjtRQUMzQixJQUFJLEVBQUUsT0FBTztRQUNiLFVBQVUsRUFBRSxFQUFFO1FBQ2QsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTtRQUNsQyxnQkFBZ0IsRUFBRSxPQUFPO1FBQ3pCLFNBQVMsRUFBRSxFQUFFO1FBQ2IscUJBQXFCLEVBQUU7WUFDckIsTUFBTSxFQUFFLFNBQVM7WUFDakIsVUFBVSxFQUFFLGFBQWE7WUFDekIsSUFBSSxFQUFFLEVBQUU7WUFDUixTQUFTLEVBQUUsRUFBRTtTQUNkO1FBQ0QsaUJBQWlCLEVBQUUsRUFBRTtRQUNyQixtQkFBbUIsRUFBRSxRQUFRO1FBQzdCLGdCQUFnQixFQUFFLEVBQUU7S0FDckI7SUFDRCxVQUFVLEVBQUUsTUFBTTtJQUNsQixZQUFZLEVBQUUsRUFBRTtJQUNoQixnQkFBZ0IsRUFBRSxFQUFFO0lBQ3BCLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsbUJBQW1CLEVBQUUsSUFBSTtJQUN6QixpQkFBaUIsRUFBRSxJQUFJO0lBQ3ZCLG9CQUFvQixFQUFFLElBQUk7SUFDMUIsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixvQkFBb0IsRUFBRSxZQUFZO0lBQ2xDLGVBQWUsRUFBRSxFQUFFO0lBQ25CLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsMkJBQTJCO0lBQzNCLEtBQUssRUFBRSxFQUFFO0NBQ1YsQ0FBQSJ9