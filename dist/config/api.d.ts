export declare const defaultApi: {
    visibility: string;
    forceNonceCheck: boolean;
    disableInternet: boolean;
    authType: string;
    requestConfig: {
        requestProtocol: string;
        requestHttpMethod: string;
        requestPath: string;
        bodyFormat: string;
        postBodyDescription: string;
        requestMode: string;
        bodyModel: string;
    };
    backendEnable: boolean;
    serviceConfig: {
        serviceProtocol: string;
        serviceHttpMethod: string;
        serviceAddress: string;
        serviceTimeout: string;
        servicePath: string;
        mock: string;
        mockResult: string;
        ossConfig: {
            Action: string;
        };
        serviceVpcEnable: string;
        vpcConfig: {};
        functionComputeConfig: {
            fcType: string;
            fcRegionId: string;
            path: string;
            fcBaseUrl: string;
        };
        eventBridgeConfig: {};
        contentTypeCatagory: string;
        contentTypeValue: string;
    };
    resultType: string;
    resultSample: string;
    failResultSample: string;
    errorCodeSamples: string;
    openIdConnectConfig: string;
    requestParameters: string;
    serviceParametersMap: string;
    serviceParameters: string;
    allowSignatureMethod: string;
    appCodeAuthType: string;
    webSocketApiType: string;
    regionId: string;
    other: {};
};
