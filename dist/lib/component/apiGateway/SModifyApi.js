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
exports.SModifyApi = void 0;
var $CloudAPI20160714 = __importStar(require("@alicloud/cloudapi20160714"));
var $Util = __importStar(require("@alicloud/tea-util"));
var tools_1 = require("../../tools/tools");
var ClientInit_1 = require("../ClientInit");
var api_1 = require("../../constant/api");
var SDescribeApis_1 = require("./SDescribeApis");
var utils_1 = require("../../utils");
var SAbolishApi_1 = require("./SAbolishApi");
var index_1 = __importDefault(require("../store/index"));
var SModifyApi = /** @class */ (function () {
    function SModifyApi(config) {
        this.config = config;
    }
    /**
     * @description 修改api时对比是否需要更新,实现动态更新
     */
    SModifyApi.prototype.modifyApi = function (apiId, apiConfig, stages) {
        return __awaiter(this, void 0, void 0, function () {
            var sDescribeApis, sDescribeApisRes, currentApiConfig, sabolishApi, batchAbolishApisRes, client, modifyApiConfigurationRequest, runtime;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sDescribeApis = new SDescribeApis_1.SDescribeApis({
                            access: this.config.access,
                            groupId: this.config.groupId,
                            region: this.config.region
                        });
                        return [4 /*yield*/, sDescribeApis.describeApi(apiId)];
                    case 1:
                        sDescribeApisRes = _a.sent();
                        currentApiConfig = (0, utils_1.parseApiConfig)(sDescribeApisRes, apiConfig);
                        if (currentApiConfig.needModify === 0) {
                            // Slogger.info(`${apiConfig.apiName} 远程无需更新`)
                            return [2 /*return*/, {
                                    responseStatus: true,
                                    remote: true
                                }];
                        }
                        if (!!index_1.default.isLocal()) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, utils_1.inquirerRemote)()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (index_1.default.isRomote())
                            return [2 /*return*/, {
                                    responseStatus: true,
                                    remote: true
                                }];
                        tools_1.Slogger.info('修改api...');
                        if (!(stages.length > 0)) return [3 /*break*/, 5];
                        sabolishApi = new SAbolishApi_1.SAbolishApi({
                            access: this.config.access,
                            region: this.config.region,
                            apis: [{
                                    groupId: this.config.groupId,
                                    apiUid: apiId,
                                    stages: stages
                                }],
                        });
                        return [4 /*yield*/, sabolishApi.batchAbolishApis()];
                    case 4:
                        batchAbolishApisRes = _a.sent();
                        if (!batchAbolishApisRes.responseStatus)
                            return [2 /*return*/, {
                                    responseStatus: false,
                                    error: batchAbolishApisRes.error
                                }];
                        _a.label = 5;
                    case 5: 
                    // 进行阻塞 下线和修改之间有延迟
                    return [4 /*yield*/, (0, tools_1.blockProcess)(100)];
                    case 6:
                        // 进行阻塞 下线和修改之间有延迟
                        _a.sent();
                        if (!(currentApiConfig.needModify === 1)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.modifyApiAll(apiId, apiConfig)];
                    case 7: return [2 /*return*/, _a.sent()];
                    case 8:
                        client = ClientInit_1.ClientInit.createClient(this.config.access.AccessKeyID, this.config.access.AccessKeySecret, this.config.region);
                        modifyApiConfigurationRequest = new $CloudAPI20160714.ModifyApiConfigurationRequest(currentApiConfig);
                        runtime = new $Util.RuntimeOptions({});
                        return [4 /*yield*/, (0, tools_1.handleClientRequst)(client, 'modifyApiConfigurationWithOptions', modifyApiConfigurationRequest, runtime)];
                    case 9: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // 更新当前修改api操作，此为全部修改
    SModifyApi.prototype.modifyApiAll = function (apiId, apiConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var client, config, currentApiConfig, modifyApiRequest, runtime;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = ClientInit_1.ClientInit.createClient(this.config.access.AccessKeyID, this.config.access.AccessKeySecret, this.config.region);
                        config = {
                            groupId: this.config.groupId,
                            apiId: apiId,
                        };
                        currentApiConfig = (0, tools_1.merge)({}, api_1.defaultApi, config, apiConfig);
                        modifyApiRequest = new $CloudAPI20160714.ModifyApiRequest((0, tools_1.formatRequest)(currentApiConfig));
                        runtime = new $Util.RuntimeOptions({});
                        return [4 /*yield*/, (0, tools_1.handleClientRequst)(client, 'modifyApiWithOptions', modifyApiRequest, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return SModifyApi;
}());
exports.SModifyApi = SModifyApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU01vZGlmeUFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50L2FwaUdhdGV3YXkvU01vZGlmeUFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLDRFQUFnRTtBQUNoRSx3REFBNEM7QUFDNUMsMkNBQW9HO0FBQ3BHLDRDQUEyQztBQUMzQywwQ0FBZ0Q7QUFDaEQsaURBQWdEO0FBQ2hELHFDQUE2RDtBQUM3RCw2Q0FBNEM7QUFDNUMseURBQW1DO0FBRW5DO0lBRUksb0JBQVksTUFBd0I7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7SUFDeEIsQ0FBQztJQUNEOztPQUVHO0lBQ0csOEJBQVMsR0FBZixVQUFnQixLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU07Ozs7Ozt3QkFDOUIsYUFBYSxHQUFHLElBQUksNkJBQWEsQ0FBQzs0QkFDcEMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs0QkFDMUIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs0QkFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTt5QkFDN0IsQ0FBQyxDQUFBO3dCQUN1QixxQkFBTSxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFBOzt3QkFBekQsZ0JBQWdCLEdBQUcsU0FBc0M7d0JBQ3pELGdCQUFnQixHQUFJLElBQUEsc0JBQWMsRUFBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsQ0FBQTt3QkFDckUsSUFBRyxnQkFBZ0IsQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFOzRCQUNsQyw4Q0FBOEM7NEJBQzlDLHNCQUFPO29DQUNILGNBQWMsRUFBRSxJQUFJO29DQUNwQixNQUFNLEVBQUUsSUFBSTtpQ0FDZixFQUFBO3lCQUNKOzZCQUNFLENBQUMsZUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFqQix3QkFBaUI7d0JBQUUscUJBQU0sSUFBQSxzQkFBYyxHQUFFLEVBQUE7O3dCQUF0QixTQUFzQixDQUFBOzs7d0JBQzVDLElBQUcsZUFBTSxDQUFDLFFBQVEsRUFBRTs0QkFBRSxzQkFBTztvQ0FDM0IsY0FBYyxFQUFFLElBQUk7b0NBQ3BCLE1BQU0sRUFBRSxJQUFJO2lDQUNiLEVBQUE7d0JBQ0QsZUFBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTs2QkFDckIsQ0FBQSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQSxFQUFqQix3QkFBaUI7d0JBQ1YsV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBQzs0QkFDcEMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs0QkFDMUIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs0QkFDMUIsSUFBSSxFQUFFLENBQUM7b0NBQ0gsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztvQ0FDNUIsTUFBTSxFQUFFLEtBQUs7b0NBQ2IsTUFBTSxRQUFBO2lDQUNULENBQUM7eUJBQ0QsQ0FBQyxDQUFBO3dCQUMwQixxQkFBTSxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsRUFBQTs7d0JBQTFELG1CQUFtQixHQUFHLFNBQW9DO3dCQUNoRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYzs0QkFBRSxzQkFBTztvQ0FDNUMsY0FBYyxFQUFFLEtBQUs7b0NBQ3JCLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxLQUFLO2lDQUNuQyxFQUFBOzs7b0JBRUwsa0JBQWtCO29CQUNsQixxQkFBTSxJQUFBLG9CQUFZLEVBQUMsR0FBRyxDQUFDLEVBQUE7O3dCQUR2QixrQkFBa0I7d0JBQ2xCLFNBQXVCLENBQUE7NkJBQ3BCLENBQUEsZ0JBQWdCLENBQUMsVUFBVSxLQUFLLENBQUMsQ0FBQSxFQUFqQyx3QkFBaUM7d0JBQzFCLHFCQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUFBOzRCQUFoRCxzQkFBTyxTQUF5QyxFQUFBOzt3QkFHL0MsTUFBTSxHQUFHLHVCQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDekgsNkJBQTZCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyw2QkFBNkIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3dCQUN0RyxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNwQyxxQkFBTSxJQUFBLDBCQUFrQixFQUFDLE1BQU0sRUFBRSxtQ0FBbUMsRUFBRSw2QkFBNkIsRUFBRSxPQUFPLENBQUMsRUFBQTs0QkFBcEgsc0JBQU8sU0FBNkcsRUFBQTs7OztLQUN2SDtJQUNELHFCQUFxQjtJQUNmLGlDQUFZLEdBQWxCLFVBQW1CLEtBQUssRUFBRSxTQUFTOzs7Ozs7d0JBQzNCLE1BQU0sR0FBRyx1QkFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ3pILE1BQU0sR0FBRzs0QkFDVCxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzRCQUM1QixLQUFLLE9BQUE7eUJBQ1IsQ0FBQTt3QkFDSyxnQkFBZ0IsR0FBRyxJQUFBLGFBQUssRUFBQyxFQUFFLEVBQUUsZ0JBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUE7d0JBQzdELGdCQUFnQixHQUFHLElBQUksaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsSUFBQSxxQkFBYSxFQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQzt3QkFDM0YsT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFHLENBQUMsQ0FBQzt3QkFDckMscUJBQU0sSUFBQSwwQkFBa0IsRUFBQyxNQUFNLEVBQUUsc0JBQXNCLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLEVBQUE7NEJBQTFGLHNCQUFPLFNBQW1GLEVBQUE7Ozs7S0FDN0Y7SUFDTCxpQkFBQztBQUFELENBQUMsQUFwRUQsSUFvRUM7QUFwRVksZ0NBQVUifQ==