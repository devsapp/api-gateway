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
    var _a, _b;
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
    need((_a = c1.serviceConfig.serviceTimeout) === null || _a === void 0 ? void 0 : _a.toString(), (_b = myParse(c2.serviceConfig).serviceTimeout) === null || _b === void 0 ? void 0 : _b.toString()) && (c.serviceTimeout = myParse(c2.serviceConfig).serviceTimeout);
    need(c1.serviceConfig.contentTypeCatagory, myParse(c2.serviceConfig).contentTypeCategory) && (c.contentTypeCategory = myParse(c2.serviceConfig).contentTypeCategory,
        c.contentTypeCatagory = myParse(c2.serviceConfig).contentTypeCategory);
    need(c1.serviceConfig.contentTypeValue, myParse(c2.serviceConfig).contentTypeValue) && (c.contentTypeValue = myParse(c2.serviceConfig).contentTypeValue);
    //特殊判断：
    if (myParse(c2.serviceConfig).serviceHttpMethod && c1.serviceConfig.serviceHttpMethod !== myParse(c2.serviceConfig).serviceHttpMethod) {
        tools_1.Slogger.debug('serviceHttpMethod不同');
        c.httpConfig = {};
        c.httpConfig.serviceHttpMethod = myParse(c2.serviceConfig).serviceHttpMethod;
    }
    if ("".concat(c1.serviceConfig.serviceAddress).concat(c1.serviceConfig.servicePath) !== "".concat(myParse(c2.serviceConfig).serviceAddress).concat(myParse(c2.serviceConfig).servicePath)) {
        tools_1.Slogger.debug('serviceAddress，serviceAddress不同');
        if (!c.httpConfig)
            c.httpConfig = {};
        c.httpConfig.serviceAddress = myParse(c2.serviceConfig).serviceAddress;
        c.httpConfig.servicePath = myParse(c2.serviceConfig).servicePath;
    }
    c.httpConfig && (c.httpConfig = JSON.stringify(c.httpConfig));
    tools_1.Slogger.debug('解析api参数完成', c);
    if (Object.keys(c).length === 0)
        return { needModify: 0 };
    return (0, tools_1.merge)({}, {
        apiId: c1.apiId,
        apiName: c1.apiName,
        visibility: "PRIVATE",
        resultType: "JSON",
        serviceProtocol: "HTTP",
        resultSample: "",
        httpConfig: "{}" //必须加上，否则报错
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUEsdUNBQTJFO0FBQzNFLGtFQUE0QztBQUM1QywwREFBOEM7QUFFOUM7O0dBRUc7QUFDSCxTQUFzQixVQUFVLENBQUMsTUFBa0I7Ozs7Ozs7b0JBQzNDLFNBQVMsR0FBRyxJQUFBLGlCQUFTLEVBQUMsTUFBTSxDQUFDLENBQUE7b0JBRS9CLFdBQVcsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO3lCQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBaEMsd0JBQWdDO29CQUNQLHFCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBQSxTQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsT0FBTywwQ0FBRSxNQUFNLENBQUMsRUFBQTs7b0JBQXpFLGFBQWEsR0FBUSxTQUFvRDtvQkFDL0UsV0FBVyxHQUFHO3dCQUNaLFNBQVMsRUFBRSxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsU0FBUzt3QkFDbkMsV0FBVyxFQUFFLGFBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxXQUFXO3dCQUN2QyxlQUFlLEVBQUUsYUFBYSxhQUFiLGFBQWEsdUJBQWIsYUFBYSxDQUFFLGVBQWU7d0JBQy9DLGFBQWEsRUFBRSxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsYUFBYTtxQkFDNUMsQ0FBQzs7O29CQUdFLEtBQUssR0FBRyxJQUFBLHdCQUFnQixFQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtvQkFDekMsUUFBUSxHQUFRLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBRW5ELHNCQUFPOzRCQUNMLFdBQVcsYUFBQTs0QkFDWCxLQUFLLE9BQUE7NEJBQ0wsT0FBTyxFQUFFLENBQUEsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLElBQUksS0FBSSxFQUFFO3lCQUM5QixFQUFBOzs7O0NBQ0Y7QUF0QkQsZ0NBc0JDO0FBRUQ7Ozs7R0FJRztBQUNILFNBQWdCLGNBQWMsQ0FBQyxFQUFFLEVBQUUsRUFBRTs7SUFDbkMsa0NBQWtDO0lBQ2xDLElBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsS0FBSyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQztRQUFFLE9BQU87WUFDM0osVUFBVSxFQUFFLENBQUMsQ0FBQyxXQUFXO1NBQzFCLENBQUE7SUFDRCxJQUFNLENBQUMsR0FBUSxFQUFFLENBQUE7SUFDakIsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUk7UUFDdEIsT0FBTyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQTtJQUM5QixDQUFDO0lBQ0QsU0FBUyxXQUFXLENBQUMsR0FBRztRQUN0QixJQUFHLE9BQU8sR0FBRyxLQUFLLFFBQVE7WUFBRSxPQUFPLEdBQUcsQ0FBQTtRQUN0QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUNELFNBQVMsT0FBTyxDQUFDLEdBQUc7UUFDbEIsSUFBRyxPQUFPLEdBQUcsS0FBSyxRQUFRO1lBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2xELE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztJQUNELElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsb0JBQW9CLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixDQUFDLENBQUE7SUFDNUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUE7SUFDeEYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUM7V0FDdEYsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUE7SUFDL0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUM7V0FDdEYsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUE7SUFDOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLENBQUM7V0FDL0YsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUE7SUFDcEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEVBQUUsV0FBVyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1dBQ3JGLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFBO0lBQzFELElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3BFLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQzVFLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQ3hGLElBQUksQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDNUYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUE7SUFDeEYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDaEksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUNwSyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBQzVKLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3BJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3BJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQ3BKLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQ3BKLElBQUksQ0FBQyxNQUFBLEVBQUUsQ0FBQyxhQUFhLENBQUMsY0FBYywwQ0FBRSxRQUFRLEVBQUUsRUFBRSxNQUFBLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsY0FBYywwQ0FBRSxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBQ3hLLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUN6RixDQUFDLENBQUMsbUJBQW1CLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxtQkFBbUI7UUFDckUsQ0FBQyxDQUFDLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsbUJBQW1CLENBQ3RFLENBQUE7SUFDSCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQ3hKLE9BQU87SUFDUCxJQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsaUJBQWlCLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsS0FBSyxPQUFPLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGlCQUFpQixFQUFFO1FBQ3BJLGVBQU8sQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQTtRQUNwQyxDQUFDLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQTtRQUNqQixDQUFDLENBQUMsVUFBVSxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsaUJBQWlCLENBQUE7S0FDN0U7SUFDRCxJQUFHLFVBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxjQUFjLFNBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUUsS0FBSyxVQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsY0FBYyxTQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsV0FBVyxDQUFFLEVBQUU7UUFDaEssZUFBTyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO1FBQ2hELElBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVTtZQUFFLENBQUMsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFBO1FBQ25DLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsY0FBYyxDQUFBO1FBQ3RFLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsV0FBVyxDQUFBO0tBQ2xFO0lBQ0QsQ0FBQyxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtJQUM3RCxlQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUM3QixJQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLEVBQUMsVUFBVSxFQUFFLENBQUMsRUFBQyxDQUFBO0lBQ3RELE9BQU8sSUFBQSxhQUFLLEVBQUMsRUFBRSxFQUFFO1FBQ2YsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLO1FBQ2YsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPO1FBQ25CLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVztLQUM3QixFQUFFLENBQUMsQ0FBQyxDQUFBO0FBQ1AsQ0FBQztBQXRFRCx3Q0FzRUM7QUFJRDs7R0FFRztBQUNLLElBQU0sUUFBUSxHQUFHLFVBQUMsS0FBSztJQUM3QixJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUE7SUFDbkIsSUFBRyxDQUFDLEtBQUssQ0FBQyxNQUFNO1FBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUN6QyxJQUFHLENBQUMsS0FBSyxDQUFDLFNBQVM7UUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQy9DLElBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSTtRQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDckMsSUFBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzdCLE1BQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0tBQzlDO0lBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1FBQ3JCLElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7WUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQzNFLElBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7WUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQTtRQUM3RyxJQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO1lBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDLENBQUE7SUFFL0csQ0FBQyxDQUFDLENBQUE7SUFDRixJQUFHLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU07SUFDaEMsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQUssRUFBRSxJQUFJO1FBQ3hDLE9BQU8sS0FBSyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUE7SUFDNUIsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFBO0lBQ2hCLE1BQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ3RDLENBQUMsQ0FBQTtBQW5CYSxRQUFBLFFBQVEsWUFtQnJCO0FBRU0sSUFBTyxjQUFjLEdBQUc7Ozs7O2dCQUM3QixlQUFPLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUE7Z0JBR2pDLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO3dCQUM3Qjs0QkFDSSxJQUFJLEVBQUUsTUFBTTs0QkFDWixJQUFJLEVBQUUsUUFBUTs0QkFDZCxPQUFPLEVBQUUsdURBQXVEOzRCQUNoRSxPQUFPLEVBQUU7Z0NBQ1AsRUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFDO2dDQUNsQixFQUFDLElBQUksRUFBQyxZQUFZLEVBQUM7NkJBQ3BCO3lCQUNKO3FCQUNGLENBQUMsRUFBQTs7Z0JBWkksR0FBRyxHQUVMLFNBVUY7Z0JBQ0YsUUFBUSxHQUFHLENBQUMsTUFBTSxFQUFFO29CQUNsQixLQUFLLFdBQVc7d0JBQ2QsZUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFBO3dCQUNqQixzQkFBTTtvQkFDUixLQUFLLFlBQVk7d0JBQ2YsZUFBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTt3QkFDdkIsTUFBSztvQkFDUDt3QkFDRSxNQUFLO2lCQUNSO2dCQUNELGVBQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQTtnQkFDbEIsc0JBQU07OztLQUNQLENBQUE7QUEzQmEsUUFBQSxjQUFjLGtCQTJCM0IifQ==