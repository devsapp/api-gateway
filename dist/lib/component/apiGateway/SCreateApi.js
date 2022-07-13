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
exports.SCreateApi = void 0;
/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-13 22:10:37
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-14 01:43:24
 */
var $CloudAPI20160714 = __importStar(require("@alicloud/cloudapi20160714"));
// 依赖的模块可通过下载工程中的模块依赖文件或右上角的获取 SDK 依赖信息查看
var tea_util_1 = __importStar(require("@alicloud/tea-util")), $Util = tea_util_1;
var ClientInit_1 = require("../ClientInit");
var api_1 = require("../../../config/api");
var tools_1 = require("../tools");
var SCreateApi = /** @class */ (function () {
    function SCreateApi(config) {
        this.config = config;
    }
    SCreateApi.prototype.createApiByConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            var client, defaultApiConfig, createApiRequest, runtime, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = ClientInit_1.ClientInit.createClient(this.config.access.AccessKeyID, this.config.access.AccessKeySecret, this.config.region);
                        defaultApiConfig = (0, tools_1.deepClone)(api_1.defaultApi);
                        defaultApiConfig.groupId = this.config.groupId;
                        //TODO：写一个深度的assign
                        defaultApiConfig.apiName = this.config.api.apiName;
                        defaultApiConfig.regionId = this.config.api.region || this.config.region;
                        defaultApiConfig.requestConfig = JSON.stringify(Object.assign({}, defaultApiConfig.requestConfig, this.config.api.requestConfig));
                        defaultApiConfig.serviceConfig = JSON.stringify(Object.assign({}, defaultApiConfig.serviceConfig, this.config.api.serviceConfig));
                        console.log('apiConfig', defaultApiConfig);
                        createApiRequest = new $CloudAPI20160714.CreateApiRequest(defaultApiConfig);
                        runtime = new $Util.RuntimeOptions({});
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        // 复制代码运行请自行打印 API 的返回值
                        return [4 /*yield*/, client.createApiWithOptions(createApiRequest, runtime)];
                    case 2:
                        // 复制代码运行请自行打印 API 的返回值
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error(error_1);
                        // 如有需要，请打印 error
                        tea_util_1.default.assertAsString(error_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return SCreateApi;
}());
exports.SCreateApi = SCreateApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU0NyZWF0ZUFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50L2FwaUdhdGV3YXkvU0NyZWF0ZUFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7R0FNRztBQUNILDRFQUFnRTtBQUNoRSx5Q0FBeUM7QUFDekMsaUZBQWtEO0FBQ2xELDRDQUEyQztBQUMzQywyQ0FBaUQ7QUFDakQsa0NBQXFDO0FBQ3JDO0lBRUksb0JBQVksTUFBd0I7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7SUFDeEIsQ0FBQztJQUNLLHNDQUFpQixHQUF2Qjs7Ozs7O3dCQUNRLE1BQU0sR0FBRyx1QkFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ3ZILGdCQUFnQixHQUFHLElBQUEsaUJBQVMsRUFBQyxnQkFBVSxDQUFDLENBQUE7d0JBQzlDLGdCQUFnQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQTt3QkFDOUMsbUJBQW1CO3dCQUNuQixnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFBO3dCQUNsRCxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFBO3dCQUN4RSxnQkFBZ0IsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQTt3QkFDakksZ0JBQWdCLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7d0JBQ2pJLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUE7d0JBQ3RDLGdCQUFnQixHQUFHLElBQUksaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzt3QkFDNUUsT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7Ozt3QkFFekMsdUJBQXVCO3dCQUN2QixxQkFBTSxNQUFNLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLEVBQUE7O3dCQUQ1RCx1QkFBdUI7d0JBQ3ZCLFNBQTRELENBQUM7Ozs7d0JBRTNELE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBSyxDQUFDLENBQUE7d0JBQ3RCLGlCQUFpQjt3QkFDakIsa0JBQUksQ0FBQyxjQUFjLENBQUMsT0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7S0FFeEM7SUFDTCxpQkFBQztBQUFELENBQUMsQUExQkQsSUEwQkM7QUExQlksZ0NBQVUifQ==