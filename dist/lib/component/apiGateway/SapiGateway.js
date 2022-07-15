"use strict";
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
exports.SApiGateway = void 0;
var SCreateApi_1 = require("./SCreateApi");
/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-13 22:06:25
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-15 00:50:41
 * @description: api网关相关操作
 */
var SApiGateway = /** @class */ (function () {
    function SApiGateway(config) {
        this.config = config;
    }
    SApiGateway.prototype.createApis = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, access, domain, region, groupId, apis, successApis, promiseArr;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.config, access = _a.access, domain = _a.domain, region = _a.region, groupId = _a.groupId, apis = _a.apis;
                        successApis = [];
                        promiseArr = apis === null || apis === void 0 ? void 0 : apis.map(function (item) {
                            return __awaiter(this, void 0, void 0, function () {
                                var createapi, res, config;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            createapi = new SCreateApi_1.SCreateApi({
                                                api: item,
                                                access: access,
                                                domain: domain,
                                                region: region,
                                                groupId: groupId,
                                            });
                                            return [4 /*yield*/, createapi.createApiByConfig()];
                                        case 1:
                                            res = _a.sent();
                                            if (!res.responseStatus) {
                                                console.log('创建api失败:', res.error);
                                            }
                                            else {
                                                config = {
                                                    apiName: item.apiName,
                                                    path: "/".concat(item.requestConfig.requestPath),
                                                    apiId: res.apiId
                                                };
                                                console.log('创建api成功:', config);
                                                successApis.push(config);
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        });
                        return [4 /*yield*/, Promise.all(promiseArr)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, successApis];
                }
            });
        });
    };
    return SApiGateway;
}());
exports.SApiGateway = SApiGateway;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2FwaUdhdGV3YXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudC9hcGlHYXRld2F5L1NhcGlHYXRld2F5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUF5QztBQUV6Qzs7Ozs7OztHQU9HO0FBQ0g7SUFFRSxxQkFBWSxNQUFrQjtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUN0QixDQUFDO0lBQ0ssZ0NBQVUsR0FBaEI7Ozs7Ozt3QkFDUSxLQUE0QyxJQUFJLENBQUMsTUFBTSxFQUFyRCxNQUFNLFlBQUEsRUFBRSxNQUFNLFlBQUEsRUFBRSxNQUFNLFlBQUEsRUFBRSxPQUFPLGFBQUEsRUFBRSxJQUFJLFVBQUEsQ0FBZ0I7d0JBQ3ZELFdBQVcsR0FBRyxFQUFFLENBQUE7d0JBQ2xCLFVBQVUsR0FBSSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsR0FBRyxDQUFDLFVBQWUsSUFBSTs7Ozs7OzRDQUN2QyxTQUFTLEdBQUcsSUFBSSx1QkFBVSxDQUFDO2dEQUMvQixHQUFHLEVBQUUsSUFBSTtnREFDVCxNQUFNLFFBQUE7Z0RBQ04sTUFBTSxRQUFBO2dEQUNOLE1BQU0sUUFBQTtnREFDTixPQUFPLFNBQUE7NkNBQ1IsQ0FBQyxDQUFBOzRDQUNVLHFCQUFNLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxFQUFBOzs0Q0FBekMsR0FBRyxHQUFHLFNBQW1DOzRDQUMvQyxJQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRTtnREFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBOzZDQUNuQztpREFBSztnREFDRSxNQUFNLEdBQUc7b0RBQ2IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO29EQUNyQixJQUFJLEVBQUUsV0FBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBRTtvREFDMUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLO2lEQUNqQixDQUFBO2dEQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFBO2dEQUMvQixXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBOzZDQUN6Qjs7Ozs7eUJBQ0YsQ0FBQyxDQUFBO3dCQUNGLHFCQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUE7O3dCQUE3QixTQUE2QixDQUFBO3dCQUM3QixzQkFBTyxXQUFXLEVBQUE7Ozs7S0FDbkI7SUFDSCxrQkFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7QUFoQ1ksa0NBQVcifQ==