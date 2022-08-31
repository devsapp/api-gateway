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
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseApiConfig = exports.parseInput = void 0;
var tools_1 = require("./tools/tools");
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
    if (c1.serviceConfig.serviceHttpMethod !== myParse(c2.serviceConfig).serviceHttpMethod) {
        c.httpConfig = {};
        c.httpConfig.serviceHttpMethod = myParse(c2.serviceConfig).serviceHttpMethod;
    }
    if ("".concat(c1.serviceConfig.serviceAddress).concat(c1.serviceConfig.servicePath) !== "".concat(myParse(c2.serviceConfig).serviceAddress).concat(myParse(c2.serviceConfig).servicePath)) {
        if (!c.httpConfig)
            c.httpConfig = {};
        c.httpConfig.serviceAddress = myParse(c2.serviceConfig).serviceAddress;
        c.httpConfig.servicePath = myParse(c2.serviceConfig).servicePath;
    }
    c.httpConfig ? c.httpConfig = JSON.stringify(c.httpConfig) : c.httpConfig = JSON.stringify({});
    if (Object.keys(c).length === 0)
        return { needModify: 0 };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUEsdUNBQWtFO0FBQ2xFLDBEQUE4QztBQUU5Qzs7R0FFRztBQUNILFNBQXNCLFVBQVUsQ0FBQyxNQUFrQjs7Ozs7OztvQkFDM0MsU0FBUyxHQUFHLElBQUEsaUJBQVMsRUFBQyxNQUFNLENBQUMsQ0FBQTtvQkFFL0IsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7eUJBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFoQyx3QkFBZ0M7b0JBQ1AscUJBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFBLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxPQUFPLDBDQUFFLE1BQU0sQ0FBQyxFQUFBOztvQkFBekUsYUFBYSxHQUFRLFNBQW9EO29CQUMvRSxXQUFXLEdBQUc7d0JBQ1osU0FBUyxFQUFFLGFBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxTQUFTO3dCQUNuQyxXQUFXLEVBQUUsYUFBYSxhQUFiLGFBQWEsdUJBQWIsYUFBYSxDQUFFLFdBQVc7d0JBQ3ZDLGVBQWUsRUFBRSxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsZUFBZTt3QkFDL0MsYUFBYSxFQUFFLGFBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxhQUFhO3FCQUM1QyxDQUFDOzs7b0JBR0UsS0FBSyxHQUFHLElBQUEsd0JBQWdCLEVBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUN6QyxRQUFRLEdBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFFbkQsc0JBQU87NEJBQ0wsV0FBVyxhQUFBOzRCQUNYLEtBQUssT0FBQTs0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QUFDLG1CQUFtQixDQUFDLENBQUE7SUFDcEssSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtJQUM1SixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNwSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNwSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUNwSixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUNwSixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUNoSixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQ3hKLE9BQU87SUFDUCxJQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEtBQUssT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxpQkFBaUIsRUFBRTtRQUNyRixDQUFDLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQTtRQUNqQixDQUFDLENBQUMsVUFBVSxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsaUJBQWlCLENBQUE7S0FDN0U7SUFDRCxJQUFHLFVBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxjQUFjLFNBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUUsS0FBSyxVQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsY0FBYyxTQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsV0FBVyxDQUFFLEVBQUU7UUFDaEssSUFBRyxDQUFDLENBQUMsQ0FBQyxVQUFVO1lBQUUsQ0FBQyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUE7UUFDbkMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxjQUFjLENBQUE7UUFDdEUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUksT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxXQUFXLENBQUE7S0FDbEU7SUFDRCxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDOUYsSUFBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxFQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUMsQ0FBQTtJQUN0RCxPQUFPLElBQUEsYUFBSyxFQUFDLEVBQUUsRUFBRTtRQUNmLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSztRQUNmLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTztRQUNuQixVQUFVLEVBQUUsU0FBUztRQUNyQixVQUFVLEVBQUUsTUFBTTtRQUNsQixlQUFlLEVBQUUsTUFBTTtRQUN2QixZQUFZLEVBQUUsRUFBRTtLQUNqQixFQUFFLENBQUMsQ0FBQyxDQUFBO0FBQ1AsQ0FBQztBQTlERCx3Q0E4REMifQ==