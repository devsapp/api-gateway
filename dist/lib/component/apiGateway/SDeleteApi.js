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
exports.SDeleteApi = void 0;
var $CloudAPI20160714 = __importStar(require("@alicloud/cloudapi20160714"));
var $Util = __importStar(require("@alicloud/tea-util"));
var ClientInit_1 = require("../ClientInit");
var tools_1 = require("../../tools/tools");
/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-20 00:05:20
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-23 20:48:18
 */
var SDeleteApi = /** @class */ (function () {
    function SDeleteApi(config) {
        this.config = config;
    }
    SDeleteApi.prototype.deleteApis = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.config.apis.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.deleteApi(this.config.apis[i].groupId, this.config.apis[i].apiId)];
                    case 2:
                        res = _a.sent();
                        if (!res.responseStatus)
                            return [2 /*return*/, {
                                    responseStatus: false,
                                    error: res.error,
                                }];
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, {
                            responseStatus: true,
                        }];
                }
            });
        });
    };
    SDeleteApi.prototype.deleteApi = function (groupId, apiId) {
        return __awaiter(this, void 0, void 0, function () {
            var client, deleteApiRequest, runtime;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = ClientInit_1.ClientInit.createClient(this.config.access.AccessKeyID, this.config.access.AccessKeySecret, this.config.region);
                        deleteApiRequest = new $CloudAPI20160714.DeleteApiRequest({
                            groupId: groupId,
                            apiId: apiId,
                        });
                        runtime = new $Util.RuntimeOptions({});
                        return [4 /*yield*/, (0, tools_1.handleClientRequst)(client, 'deleteApiWithOptions', deleteApiRequest, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return SDeleteApi;
}());
exports.SDeleteApi = SDeleteApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU0RlbGV0ZUFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50L2FwaUdhdGV3YXkvU0RlbGV0ZUFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDRFQUErRDtBQUMvRCx3REFBMkM7QUFDM0MsNENBQTBDO0FBQzFDLDJDQUFzRDtBQUV0RDs7Ozs7O0dBTUc7QUFDSDtJQUVFLG9CQUFZLE1BQXdCO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0lBQ3RCLENBQUM7SUFDSywrQkFBVSxHQUFoQjs7Ozs7O3dCQUNXLENBQUMsR0FBRyxDQUFDOzs7NkJBQUUsQ0FBQSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO3dCQUM3QixxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FDMUIsRUFBQTs7d0JBSEssR0FBRyxHQUFHLFNBR1g7d0JBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjOzRCQUNyQixzQkFBTztvQ0FDTCxjQUFjLEVBQUUsS0FBSztvQ0FDckIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLO2lDQUNqQixFQUFBOzs7d0JBVHdDLENBQUMsRUFBRSxDQUFBOzs0QkFXaEQsc0JBQU87NEJBQ0wsY0FBYyxFQUFFLElBQUk7eUJBQ3JCLEVBQUE7Ozs7S0FDRjtJQUNLLDhCQUFTLEdBQWYsVUFBZ0IsT0FBTyxFQUFFLEtBQUs7Ozs7Ozt3QkFDeEIsTUFBTSxHQUFHLHVCQUFVLENBQUMsWUFBWSxDQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ25CLENBQUE7d0JBQ0csZ0JBQWdCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQzs0QkFDMUQsT0FBTyxTQUFBOzRCQUNQLEtBQUssT0FBQTt5QkFDUixDQUFDLENBQUE7d0JBQ0UsT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQTt3QkFDbkMscUJBQU0sSUFBQSwwQkFBa0IsRUFDN0IsTUFBTSxFQUNOLHNCQUFzQixFQUN0QixnQkFBZ0IsRUFDaEIsT0FBTyxDQUNSLEVBQUE7NEJBTEQsc0JBQU8sU0FLTixFQUFBOzs7O0tBQ0Y7SUFDSCxpQkFBQztBQUFELENBQUMsQUF2Q0QsSUF1Q0M7QUF2Q1ksZ0NBQVUifQ==