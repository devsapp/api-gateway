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
exports.SAbolishApi = void 0;
var $CloudAPI20160714 = __importStar(require("@alicloud/cloudapi20160714"));
var $Util = __importStar(require("@alicloud/tea-util"));
var ClientInit_1 = require("../ClientInit");
var tools_1 = require("../../tools/tools");
/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-20 00:13:05
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-23 20:40:47
 */
var SAbolishApi = /** @class */ (function () {
    function SAbolishApi(config) {
        this.config = config;
    }
    SAbolishApi.prototype.batchAbolishApis = function () {
        return __awaiter(this, void 0, void 0, function () {
            var client, api, batchAbolishApisRequest, runtime;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = ClientInit_1.ClientInit.createClient(this.config.access.AccessKeyID, this.config.access.AccessKeySecret, this.config.region);
                        api = this.config.apis.reduce(function (arr, item) {
                            return arr.concat(new $CloudAPI20160714.BatchAbolishApisRequestApi({
                                groupId: item.groupId,
                                apiUid: item.apiUid,
                                stageId: item.stages[0].stageId,
                            }), new $CloudAPI20160714.BatchAbolishApisRequestApi({
                                groupId: item.groupId,
                                apiUid: item.apiUid,
                                stageId: item.stages[1].stageId,
                            }), new $CloudAPI20160714.BatchAbolishApisRequestApi({
                                groupId: item.groupId,
                                apiUid: item.apiUid,
                                stageId: item.stages[2].stageId,
                            }));
                        }, []);
                        batchAbolishApisRequest = new $CloudAPI20160714.BatchAbolishApisRequest({
                            api: api,
                        });
                        runtime = new $Util.RuntimeOptions({});
                        return [4 /*yield*/, (0, tools_1.handleClientRequst)(client, 'batchAbolishApisWithOptions', batchAbolishApisRequest, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return SAbolishApi;
}());
exports.SAbolishApi = SAbolishApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU0Fib2xpc2hBcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudC9hcGlHYXRld2F5L1NBYm9saXNoQXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNEVBQStEO0FBQy9ELHdEQUEyQztBQUMzQyw0Q0FBMEM7QUFDMUMsMkNBQXNEO0FBRXREOzs7Ozs7R0FNRztBQUNIO0lBRUUscUJBQVksTUFBd0I7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7SUFDdEIsQ0FBQztJQUNLLHNDQUFnQixHQUF0Qjs7Ozs7O3dCQUNNLE1BQU0sR0FBRyx1QkFBVSxDQUFDLFlBQVksQ0FDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUNuQixDQUFBO3dCQUNLLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHLEVBQUUsSUFBSTs0QkFDNUMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUNmLElBQUksaUJBQWlCLENBQUMsMEJBQTBCLENBQUM7Z0NBQy9DLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztnQ0FDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dDQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPOzZCQUNoQyxDQUFDLEVBQ0YsSUFBSSxpQkFBaUIsQ0FBQywwQkFBMEIsQ0FBQztnQ0FDL0MsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2dDQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0NBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87NkJBQ2hDLENBQUMsRUFDRixJQUFJLGlCQUFpQixDQUFDLDBCQUEwQixDQUFDO2dDQUMvQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0NBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQ0FDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTzs2QkFDaEMsQ0FBQyxDQUNMLENBQUE7d0JBQ0QsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO3dCQUNGLHVCQUF1QixHQUFHLElBQUksaUJBQWlCLENBQUMsdUJBQXVCLENBQ3pFOzRCQUNFLEdBQUcsS0FBQTt5QkFDSixDQUNGLENBQUE7d0JBQ0csT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQTt3QkFDbkMscUJBQU0sSUFBQSwwQkFBa0IsRUFDN0IsTUFBTSxFQUNOLDZCQUE2QixFQUM3Qix1QkFBdUIsRUFDdkIsT0FBTyxDQUNSLEVBQUE7NEJBTEQsc0JBQU8sU0FLTixFQUFBOzs7O0tBQ0Y7SUFDSCxrQkFBQztBQUFELENBQUMsQUEzQ0QsSUEyQ0M7QUEzQ1ksa0NBQVcifQ==