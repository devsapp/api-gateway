"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inquirerRemote = exports.preCheck = exports.parseApiConfig = exports.parseInput = void 0;
var tools_1 = require("./tools/tools");
var index_1 = __importDefault(require("./component/store/index"));
var core = __importStar(require("@serverless-devs/core"));
/**
 * @description 解析yaml并且将必要的阿里云id和key拼装进来
 */
function parseInput(inputs) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var theInputs, credentials, credentialRes, props, comParse;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    theInputs = (0, tools_1.deepClone)(inputs);
                    credentials = theInputs.credentials;
                    if (!core.lodash.isEmpty(credentials)) return [3 /*break*/, 2];
                    return [4 /*yield*/, core.getCredential((_a = theInputs === null || theInputs === void 0 ? void 0 : theInputs.project) === null || _a === void 0 ? void 0 : _a.access)];
                case 1:
                    credentialRes = _b.sent();
                    credentials = {
                        AccountID: credentialRes === null || credentialRes === void 0 ? void 0 : credentialRes.AccountID,
                        AccessKeyID: credentialRes === null || credentialRes === void 0 ? void 0 : credentialRes.AccessKeyID,
                        AccessKeySecret: credentialRes === null || credentialRes === void 0 ? void 0 : credentialRes.AccessKeySecret,
                        SecurityToken: credentialRes === null || credentialRes === void 0 ? void 0 : credentialRes.SecurityToken,
                    };
                    _b.label = 2;
                case 2:
                    props = (0, tools_1.handleAutoFormat)(theInputs.props);
                    comParse = core.commandParse(theInputs);
                    return [2 /*return*/, {
                            credentials: credentials,
                            props: props,
                            argsObj: (comParse === null || comParse === void 0 ? void 0 : comParse.data) || [],
                        }];
            }
        });
    });
}
exports.parseInput = parseInput;
/**
 * @param c1 全部配置（远程返回）
 * @param c2 部分配置（本地配置）
 * @description 比对本地配置和远程配置，并返回合适结构的需更新api配置
 */
function parseApiConfig(c1, c2) {
    // 除了http方式之外的网关，参数暂时不明，这里直接采取全局更新
    if (myParse(c2.serviceConfig).serviceProtocol && (myParse(c2.serviceConfig).serviceProtocol !== 'HTTP' || !myParse(c2.serviceConfig).serviceProtocol))
        return {
            needModify: 1 //需要api全局更新
        };
    var c = {};
    function need(obj1, obj2) {
        return obj1 !== obj2 && obj2;
    }
    function myStringify(obj) {
        if (typeof obj === 'string')
            return obj;
        return JSON.stringify(obj);
    }
    function myParse(str) {
        if (typeof str === 'string')
            return JSON.parse(str);
        return str;
    }
    need(c1.allowSignatureMethod, c2.allowSignatureMethod) && (c.allowSignatureMethod = c2.allowSignatureMethod);
    need(c1.appCodeAuthType, c2.appCodeAuthType) && (c.appCodeAuthType = c2.appCodeAuthType);
    need(c1.authType, c2.authType) && (c.authType = c2.authType);
    need(myStringify(c1.requestParameters.requestParameter), myStringify(c2.requestParameters))
        && (c.requestParameters = myStringify(c2.constantParameters));
    need(myStringify(c1.serviceParameters.serviceParameter), myStringify(c2.serviceParameters))
        && (c.serviceParameters = myStringify(c2.serviceParameters));
    need(myStringify(c1.serviceParametersMap.serviceParameterMap), myStringify(c2.serviceParametersMap))
        && (c.serviceParametersMap = myStringify(c2.serviceParametersMap));
    need(myStringify(c1.errorCodeSamples.errorCodeSample), myStringify(c2.errorCodeSamples))
        && (c.errorCodeSamples = myStringify(c2.errorCodeSamples));
    need(c1.visibility, c2.visibility) && (c.visibility = c2.visibility);
    need(c1.ResultSample, c2.ResultSample) && (c.ResultSample = c2.ResultSample);
    need(c1.disableInternet, c2.disableInternet) && (c.disableInternet = c2.disableInternet);
    need(c1.failResultSample, c2.failResultSample) && (c.failResultSample = c2.failResultSample);
    need(c1.forceNonceCheck, c2.forceNonceCheck) && (c.forceNonceCheck = c2.forceNonceCheck);
    need(c1.requestConfig.bodyFormat, myParse(c2.requestConfig).bodyFormat) && (c.bodyFormat = myParse(c2.requestConfig).bodyFormat);
    need(c1.requestConfig.postBodyDescription, myParse(c2.requestConfig).postBodyDescription) && (c.postBodyDescription = myParse(c2.requestConfig).postBodyDescription);
    need(c1.requestConfig.requestHttpMethod, myParse(c2.requestConfig).requestHttpMethod) && (c.requestHttpMethod = myParse(c2.requestConfig).requestHttpMethod);
    need(c1.requestConfig.requestPath, myParse(c2.requestConfig).requestPath) && (c.requestPath = myParse(c2.requestConfig).requestPath);
    need(c1.requestConfig.requestMode, myParse(c2.requestConfig).requestMode) && (c.requestMode = myParse(c2.requestConfig).requestMode);
    need(c1.requestConfig.requestProtocol, myParse(c2.requestConfig).requestProtocol) && (c.requestProtocol = myParse(c2.requestConfig).requestProtocol);
    need(c1.serviceConfig.serviceProtocol, myParse(c2.serviceConfig).serviceProtocol) && (c.serviceProtocol = myParse(c2.serviceConfig).serviceProtocol);
    need(c1.serviceConfig.serviceTimeout, myParse(c2.serviceConfig).serviceTimeout) && (c.serviceTimeout = myParse(c2.serviceConfig).serviceTimeout);
    need(c1.serviceConfig.contentTypeValue, myParse(c2.serviceConfig).contentTypeValue) && (c.contentTypeValue = myParse(c2.serviceConfig).contentTypeValue);
    //特殊判断：
    if (myParse(c2.serviceConfig).serviceHttpMethod && c1.serviceConfig.serviceHttpMethod !== myParse(c2.serviceConfig).serviceHttpMethod) {
        tools_1.Slogger.debug('serviceHttpMethod不同');
        c.httpConfig = {};
        c.httpConfig.serviceHttpMethod = myParse(c2.serviceConfig).serviceHttpMethod;
    }
    if ("".concat(c1.serviceConfig.serviceAddress).concat(c1.serviceConfig.servicePath) !== "".concat(myParse(c2.serviceConfig).serviceAddress).concat(myParse(c2.serviceConfig).servicePath)) {
        tools_1.Slogger.debug('serviceAddress不同');
        if (!c.httpConfig)
            c.httpConfig = {};
        c.httpConfig.serviceAddress = myParse(c2.serviceConfig).serviceAddress;
        c.httpConfig.servicePath = myParse(c2.serviceConfig).servicePath;
    }
    c.httpConfig && (c.httpConfig = JSON.stringify(c.httpConfig));
    if (Object.keys(c).length === 0)
        return { needModify: 0 };
    tools_1.Slogger.debug('解析api参数完成');
    return (0, tools_1.merge)({}, {
        apiId: c1.apiId,
        apiName: c1.apiName,
        visibility: "PRIVATE",
        resultType: "JSON",
        serviceProtocol: "HTTP",
        resultSample: ""
    }, c);
}
exports.parseApiConfig = parseApiConfig;
/**
 * @description 检测必填项
 */
var preCheck = function (props) {
    var requires = [];
    if (!props.region)
        requires.push('region');
    if (!props.groupName)
        requires.push('groupName');
    if (!props.apis)
        requires.push('apis');
    if (!Array.isArray(props.apis)) {
        throw new core.CatchableError('apis参数应为数组结构');
    }
    props.apis.forEach(function (item) {
        if (!item.apiName && !requires.includes('apiName'))
            requires.push('apiName');
        if (!item.requestConfig && !requires.includes('requestConfig'))
            requires.push(item.apiName + '.requestConfig');
        if (!item.serviceConfig && !requires.includes('serviceConfig'))
            requires.push(item.apiName + '.serviceConfig');
    });
    if (requires.length === 0)
        return;
    var error = requires.reduce(function (error, item) {
        return error + '\n' + item;
    }, '配置文件缺少字段: ');
    throw new core.CatchableError(error);
};
exports.preCheck = preCheck;
var inquirerRemote = function () { return __awaiter(void 0, void 0, void 0, function () {
    var ans;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                tools_1.Slogger.info('已存在远程API组，是否使用本地配置更新?');
                return [4 /*yield*/, core.inquirer.prompt([
                        {
                            type: 'list',
                            name: 'option',
                            message: 'Choose whether to use local or a remote configuration',
                            choices: [
                                { name: 'use local' },
                                { name: 'use remote' }
                            ]
                        }
                    ])];
            case 1:
                ans = _a.sent();
                switch (ans.option) {
                    case 'use local':
                        index_1.default.useLocal();
                        return [2 /*return*/];
                    case 'use remote':
                        tools_1.Slogger.info('已使用远程配置');
                        break;
                    default:
                        break;
                }
                index_1.default.useRemote();
                return [2 /*return*/];
        }
    });
}); };
exports.inquirerRemote = inquirerRemote;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUEsdUNBQTJFO0FBQzNFLGtFQUE0QztBQUM1QywwREFBOEM7QUFFOUM7O0dBRUc7QUFDSCxTQUFzQixVQUFVLENBQUMsTUFBa0I7Ozs7Ozs7b0JBQzNDLFNBQVMsR0FBRyxJQUFBLGlCQUFTLEVBQUMsTUFBTSxDQUFDLENBQUE7b0JBRS9CLFdBQVcsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO3lCQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBaEMsd0JBQWdDO29CQUNQLHFCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBQSxTQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsT0FBTywwQ0FBRSxNQUFNLENBQUMsRUFBQTs7b0JBQXpFLGFBQWEsR0FBUSxTQUFvRDtvQkFDL0UsV0FBVyxHQUFHO3dCQUNaLFNBQVMsRUFBRSxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsU0FBUzt3QkFDbkMsV0FBVyxFQUFFLGFBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxXQUFXO3dCQUN2QyxlQUFlLEVBQUUsYUFBYSxhQUFiLGFBQWEsdUJBQWIsYUFBYSxDQUFFLGVBQWU7d0JBQy9DLGFBQWEsRUFBRSxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsYUFBYTtxQkFDNUMsQ0FBQzs7O29CQUdFLEtBQUssR0FBRyxJQUFBLHdCQUFnQixFQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtvQkFDekMsUUFBUSxHQUFRLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBRW5ELHNCQUFPOzRCQUNMLFdBQVcsYUFBQTs0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