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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SApiGroup_1 = require("./lib/component/apiGroups/SApiGroup");
var SDeleteApiGroup_1 = require("./lib/component/apiGroups/SDeleteApiGroup");
var SDescribeApiGroup_1 = require("./lib/component/apiGroups/SDescribeApiGroup");
var help_1 = require("./lib/help");
var tools_1 = require("./lib/tools/tools");
var utils_1 = require("./lib/utils");
var SModifyApiGroup_1 = require("./lib/component/apiGroups/SModifyApiGroup");
var core_1 = require("@serverless-devs/core");
var store_1 = __importDefault(require("./lib/component/store"));
var SSetDomain_1 = require("./lib/component/apiGroups/SSetDomain");
var ComponentDemo = /** @class */ (function () {
    function ComponentDemo() {
    }
    ComponentDemo.prototype.deploy = function (inputs) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var _c, credentials, props, argsObj, screateApiGroup, hasRemote, apis, re, sDescribeApiGroup, ans, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, (0, utils_1.parseInput)(inputs)];
                    case 1:
                        _c = _e.sent(), credentials = _c.credentials, props = _c.props, argsObj = _c.argsObj;
                        if (argsObj.help || argsObj.h) {
                            this.help('deploy');
                            return [2 /*return*/];
                        }
                        screateApiGroup = new SApiGroup_1.SApiGroup(credentials.AccessKeyID, credentials.AccessKeySecret, props);
                        hasRemote = false;
                        apis = props.apis.map(function (item) { return ({
                            apiName: item.apiName,
                            requestPath: item.requestConfig.requestPath,
                            servicePath: item.serviceConfig.servicePath
                        }); });
                        re = {
                            region: props.region,
                            apiGroup: props.groupName,
                            apis: apis
                        };
                        if (!(props.groupName !== 'auto')) return [3 /*break*/, 3];
                        sDescribeApiGroup = new SDescribeApiGroup_1.SDescribeApiGroup({
                            access: credentials,
                            region: props.region,
                            groupName: props.groupName,
                        });
                        return [4 /*yield*/, sDescribeApiGroup.describeApiGroups()];
                    case 2:
                        if (((_b = (_a = (_e.sent()).apiGroupAttributes) === null || _a === void 0 ? void 0 : _a.apiGroupAttribute[0]) === null || _b === void 0 ? void 0 : _b.groupName) === props.groupName)
                            hasRemote = true;
                        _e.label = 3;
                    case 3:
                        if (!hasRemote) return [3 /*break*/, 18];
                        if (!argsObj['use-local']) return [3 /*break*/, 7];
                        if (!(props.groupName === 'auto' || !hasRemote)) return [3 /*break*/, 5];
                        return [4 /*yield*/, screateApiGroup.deploy()];
                    case 4:
                        _e.sent();
                        return [2 /*return*/, this.enrich(re)];
                    case 5: return [4 /*yield*/, this.modify(inputs)];
                    case 6: return [2 /*return*/, _e.sent()];
                    case 7:
                        if (!argsObj['use-remote']) return [3 /*break*/, 11];
                        if (!(props.groupName === 'auto' || !hasRemote)) return [3 /*break*/, 9];
                        return [4 /*yield*/, screateApiGroup.deploy()];
                    case 8:
                        _e.sent();
                        return [2 /*return*/, this.enrich(re)];
                    case 9: return [4 /*yield*/, this.modify(inputs)];
                    case 10: return [2 /*return*/, _e.sent()];
                    case 11:
                        tools_1.Slogger.info('已存在远程API组，是否使用本地配置更新?');
                        return [4 /*yield*/, core_1.inquirer.prompt([
                                {
                                    type: 'list',
                                    name: 'option',
                                    message: 'Choose whether to use a local configuration or a remote configuration',
                                    choices: [
                                        { name: 'use a local configuration' },
                                        { name: 'use a remote configuration' }
                                    ]
                                }
                            ])];
                    case 12:
                        ans = _e.sent();
                        _d = ans.option;
                        switch (_d) {
                            case 'use a local configuration': return [3 /*break*/, 13];
                            case 'use a remote configuration': return [3 /*break*/, 15];
                        }
                        return [3 /*break*/, 16];
                    case 13: return [4 /*yield*/, this.modify(inputs)];
                    case 14: return [2 /*return*/, _e.sent()];
                    case 15:
                        tools_1.Slogger.info('已使用远程配置');
                        return [3 /*break*/, 17];
                    case 16: return [3 /*break*/, 17];
                    case 17: return [2 /*return*/];
                    case 18: return [4 /*yield*/, screateApiGroup.deploy()];
                    case 19:
                        _e.sent();
                        return [2 /*return*/, this.enrich(re)];
                }
            });
        });
    };
    ComponentDemo.prototype.remove = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, credentials, props, sdeleteApiGroup, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, utils_1.parseInput)(inputs)];
                    case 1:
                        _a = _b.sent(), credentials = _a.credentials, props = _a.props;
                        sdeleteApiGroup = new SDeleteApiGroup_1.SDeleteApiGroup(credentials.AccessKeyID, credentials.AccessKeySecret, props);
                        return [4 /*yield*/, sdeleteApiGroup.deleteApiGroup()];
                    case 2:
                        res = _b.sent();
                        if (!res.responseStatus) {
                            tools_1.Slogger.error('api组删除失败', res.error);
                        }
                        else {
                            tools_1.Slogger.info('api组删除成功');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ComponentDemo.prototype.modify = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, credentials, props, smodifyApiGroup, apis, re, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, utils_1.parseInput)(inputs)];
                    case 1:
                        _a = _b.sent(), credentials = _a.credentials, props = _a.props;
                        smodifyApiGroup = new SModifyApiGroup_1.SModifyApiGroup(credentials.AccessKeyID, credentials.AccessKeySecret, props);
                        apis = props.apis.map(function (item) { return ({
                            apiName: item.apiName,
                            requestPath: item.requestConfig.requestPath,
                            servicePath: item.serviceConfig.servicePath
                        }); });
                        re = {
                            region: props.region,
                            apiGroup: props.groupName,
                            apis: apis
                        };
                        return [4 /*yield*/, smodifyApiGroup.modifyApiGroupAndApis()];
                    case 2:
                        res = _b.sent();
                        if (!res.responseStatus) {
                            tools_1.Slogger.error(res.error, 'api组修改失败');
                        }
                        else {
                            if (res.error) {
                                tools_1.Slogger.info(res.error);
                            }
                            else {
                                return [2 /*return*/, this.enrich(re)];
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ComponentDemo.prototype.domain = function (inputs) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var _c, credentials, props, argsObj, describeApiGroup, describeApiGroupRes, groupId, setDomain, setDomainRes;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, (0, utils_1.parseInput)(inputs)
                        // console.log(argsObj)
                    ];
                    case 1:
                        _c = _d.sent(), credentials = _c.credentials, props = _c.props, argsObj = _c.argsObj;
                        describeApiGroup = new SDescribeApiGroup_1.SDescribeApiGroup({
                            access: credentials,
                            region: props.region,
                            groupName: props.groupName
                        });
                        return [4 /*yield*/, describeApiGroup.describeApiGroups()];
                    case 2:
                        describeApiGroupRes = _d.sent();
                        if (!describeApiGroupRes.responseStatus) {
                            tools_1.Slogger.error('查询api组出错', describeApiGroupRes.error);
                        }
                        if (((_a = describeApiGroupRes.apiGroupAttributes.apiGroupAttribute[0]) === null || _a === void 0 ? void 0 : _a.groupName) !==
                            props.groupName) {
                            tools_1.Slogger.warn('api组不正确或尚未注册');
                            return [2 /*return*/];
                        }
                        groupId = (_b = describeApiGroupRes.apiGroupAttributes.apiGroupAttribute[0]) === null || _b === void 0 ? void 0 : _b.groupId;
                        setDomain = new SSetDomain_1.SSetDomain({
                            access: credentials,
                            region: props.region,
                            domainName: argsObj === null || argsObj === void 0 ? void 0 : argsObj['domain-name'],
                            groupId: groupId
                        });
                        return [4 /*yield*/, setDomain.setDomain()];
                    case 3:
                        setDomainRes = _d.sent();
                        if (!setDomainRes.responseStatus) {
                            tools_1.Slogger.error('绑定域名失败', setDomainRes.error);
                        }
                        else
                            tools_1.Slogger.info('绑定成功');
                        return [2 /*return*/];
                }
            });
        });
    };
    ComponentDemo.prototype.help = function (methodName) {
        (0, help_1.showHelpDoc)(methodName);
    };
    ComponentDemo.prototype.enrich = function (re) {
        re.domain = store_1.default.getDomain();
        var domain = store_1.default.getDomain();
        var custom_domain = store_1.default.getCustom();
        custom_domain && (re.custom_domain = custom_domain);
        domain && (re.domain = domain);
        return re;
    };
    return ComponentDemo;
}());
exports.default = ComponentDemo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxpRUFBK0Q7QUFDL0QsNkVBQTJFO0FBQzNFLGlGQUErRTtBQUMvRSxtQ0FBd0M7QUFDeEMsMkNBQTJDO0FBQzNDLHFDQUF3QztBQUN4Qyw2RUFBMkU7QUFDM0UsOENBQWdEO0FBQ2hELGdFQUEwQztBQUMxQyxtRUFBaUU7QUFFakU7SUFBQTtJQWlLQSxDQUFDO0lBaEtjLDhCQUFNLEdBQW5CLFVBQW9CLE1BQWtCOzs7Ozs7NEJBQ0kscUJBQU0sSUFBQSxrQkFBVSxFQUFDLE1BQU0sQ0FBQyxFQUFBOzt3QkFBMUQsS0FBa0MsU0FBd0IsRUFBeEQsV0FBVyxpQkFBQSxFQUFFLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQTt3QkFDbkMsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxDQUFDLEVBQUU7NEJBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7NEJBQ3BCLHNCQUFPO3lCQUNSO3dCQUVLLGVBQWUsR0FBRyxJQUFJLHFCQUFTLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFBO3dCQUM5RixTQUFTLEdBQVksS0FBSyxDQUFBO3dCQUN4QixJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDOzRCQUNuQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87NEJBQ3JCLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVc7NEJBQzNDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVc7eUJBQzVDLENBQUMsRUFKa0MsQ0FJbEMsQ0FBQyxDQUFBO3dCQUNHLEVBQUUsR0FBRzs0QkFDVCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07NEJBQ3BCLFFBQVEsRUFBRSxLQUFLLENBQUMsU0FBUzs0QkFDekIsSUFBSSxNQUFBO3lCQUNMLENBQUE7NkJBQ0csQ0FBQSxLQUFLLENBQUMsU0FBUyxLQUFLLE1BQU0sQ0FBQSxFQUExQix3QkFBMEI7d0JBQ3RCLGlCQUFpQixHQUFHLElBQUkscUNBQWlCLENBQUM7NEJBQzlDLE1BQU0sRUFBRSxXQUFXOzRCQUNuQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07NEJBQ3BCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUzt5QkFDM0IsQ0FBQyxDQUFBO3dCQUVDLHFCQUFNLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLEVBQUE7O3dCQUQ5QyxJQUNFLENBQUEsTUFBQSxNQUFBLENBQUMsU0FBMkMsQ0FBQyxDQUFDLGtCQUFrQiwwQ0FDNUQsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFNBQVMsTUFBSyxLQUFLLENBQUMsU0FBUzs0QkFFdkQsU0FBUyxHQUFHLElBQUksQ0FBQTs7OzZCQUloQixTQUFTLEVBQVQseUJBQVM7NkJBQ1AsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFwQix3QkFBb0I7NkJBQ2xCLENBQUEsS0FBSyxDQUFDLFNBQVMsS0FBSyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUEsRUFBeEMsd0JBQXdDO3dCQUMxQyxxQkFBTSxlQUFlLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUE5QixTQUE4QixDQUFBO3dCQUM5QixzQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFBOzRCQUVqQixxQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFBOzRCQUFoQyxzQkFBTyxTQUF5QixFQUFBOzs2QkFDdkIsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFyQix5QkFBcUI7NkJBQzFCLENBQUEsS0FBSyxDQUFDLFNBQVMsS0FBSyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUEsRUFBeEMsd0JBQXdDO3dCQUMxQyxxQkFBTSxlQUFlLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUE5QixTQUE4QixDQUFBO3dCQUM5QixzQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFBOzRCQUVqQixxQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFBOzZCQUFoQyxzQkFBTyxTQUF5QixFQUFBOzt3QkFHbEMsZUFBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO3dCQUdqQyxxQkFBTSxlQUFRLENBQUMsTUFBTSxDQUFDO2dDQUN4QjtvQ0FDSSxJQUFJLEVBQUUsTUFBTTtvQ0FDWixJQUFJLEVBQUUsUUFBUTtvQ0FDZCxPQUFPLEVBQUUsdUVBQXVFO29DQUNoRixPQUFPLEVBQUU7d0NBQ1AsRUFBQyxJQUFJLEVBQUMsMkJBQTJCLEVBQUM7d0NBQ2xDLEVBQUMsSUFBSSxFQUFDLDRCQUE0QixFQUFDO3FDQUNwQztpQ0FDSjs2QkFDRixDQUFDLEVBQUE7O3dCQVpJLEdBQUcsR0FFTCxTQVVGO3dCQUNNLEtBQUEsR0FBRyxDQUFDLE1BQU0sQ0FBQTs7aUNBQ1gsMkJBQTJCLENBQUMsQ0FBNUIseUJBQTJCO2lDQUUzQiw0QkFBNEIsQ0FBQyxDQUE3Qix5QkFBNEI7Ozs2QkFEeEIscUJBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQTs2QkFBaEMsc0JBQU8sU0FBeUIsRUFBQTs7d0JBRWhDLGVBQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7d0JBQ3ZCLHlCQUFLOzZCQUVMLHlCQUFLOzZCQUVULHNCQUFNOzZCQUdSLHFCQUFNLGVBQWUsQ0FBQyxNQUFNLEVBQUUsRUFBQTs7d0JBQTlCLFNBQThCLENBQUM7d0JBQy9CLHNCQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUE7Ozs7S0FDdkI7SUFDWSw4QkFBTSxHQUFuQixVQUFvQixNQUFrQjs7Ozs7NEJBQ0wscUJBQU0sSUFBQSxrQkFBVSxFQUFDLE1BQU0sQ0FBQyxFQUFBOzt3QkFBakQsS0FBeUIsU0FBd0IsRUFBL0MsV0FBVyxpQkFBQSxFQUFFLEtBQUssV0FBQTt3QkFDcEIsZUFBZSxHQUFHLElBQUksaUNBQWUsQ0FDekMsV0FBVyxDQUFDLFdBQVcsRUFDdkIsV0FBVyxDQUFDLGVBQWUsRUFDM0IsS0FBSyxDQUNOLENBQUE7d0JBQ1cscUJBQU0sZUFBZSxDQUFDLGNBQWMsRUFBRSxFQUFBOzt3QkFBNUMsR0FBRyxHQUFHLFNBQXNDO3dCQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRTs0QkFDdkIsZUFBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO3lCQUNyQzs2QkFBTTs0QkFDTCxlQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO3lCQUN6Qjs7Ozs7S0FDRjtJQUNZLDhCQUFNLEdBQW5CLFVBQW9CLE1BQWtCOzs7Ozs0QkFDTCxxQkFBTSxJQUFBLGtCQUFVLEVBQUMsTUFBTSxDQUFDLEVBQUE7O3dCQUFqRCxLQUF5QixTQUF3QixFQUEvQyxXQUFXLGlCQUFBLEVBQUUsS0FBSyxXQUFBO3dCQUNwQixlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUN6QyxXQUFXLENBQUMsV0FBVyxFQUN2QixXQUFXLENBQUMsZUFBZSxFQUMzQixLQUFLLENBQ04sQ0FBQTt3QkFDSyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDOzRCQUNuQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87NEJBQ3JCLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVc7NEJBQzNDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVc7eUJBQzVDLENBQUMsRUFKa0MsQ0FJbEMsQ0FBQyxDQUFBO3dCQUNHLEVBQUUsR0FBRzs0QkFDVCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07NEJBQ3BCLFFBQVEsRUFBRSxLQUFLLENBQUMsU0FBUzs0QkFDekIsSUFBSSxNQUFBO3lCQUNMLENBQUE7d0JBQ1cscUJBQU0sZUFBZSxDQUFDLHFCQUFxQixFQUFFLEVBQUE7O3dCQUFuRCxHQUFHLEdBQUcsU0FBNkM7d0JBQ3pELElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFOzRCQUN2QixlQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUE7eUJBQ3JDOzZCQUFNOzRCQUNMLElBQUksR0FBRyxDQUFDLEtBQUssRUFBRTtnQ0FDYixlQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTs2QkFDeEI7aUNBQU07Z0NBQ0wsc0JBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBQTs2QkFDdkI7eUJBQ0Y7Ozs7O0tBQ0Y7SUFDWSw4QkFBTSxHQUFuQixVQUFvQixNQUFrQjs7Ozs7OzRCQUNJLHFCQUFNLElBQUEsa0JBQVUsRUFBQyxNQUFNLENBQUM7d0JBQ2hFLHVCQUF1QjtzQkFEeUM7O3dCQUExRCxLQUFrQyxTQUF3QixFQUF4RCxXQUFXLGlCQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsT0FBTyxhQUFBO3dCQUU3QixnQkFBZ0IsR0FBRyxJQUFJLHFDQUFpQixDQUFDOzRCQUM3QyxNQUFNLEVBQUUsV0FBVzs0QkFDbkIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNOzRCQUNwQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7eUJBQzNCLENBQUMsQ0FBQTt3QkFDMEIscUJBQU0sZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUUsRUFBQTs7d0JBQWhFLG1CQUFtQixHQUFHLFNBQTBDO3dCQUN0RSxJQUFHLENBQUMsbUJBQW1CLENBQUMsY0FBYyxFQUFFOzRCQUN0QyxlQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTt5QkFDckQ7d0JBQ0QsSUFBRyxDQUFBLE1BQUEsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFNBQVM7NEJBQ3ZFLEtBQUssQ0FBQyxTQUFTLEVBQUU7NEJBQ2YsZUFBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTs0QkFDNUIsc0JBQU07eUJBQ1A7d0JBQ0csT0FBTyxHQUFHLE1BQUEsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLDBDQUFFLE9BQU8sQ0FBQTt3QkFDOUUsU0FBUyxHQUFHLElBQUksdUJBQVUsQ0FBQzs0QkFDL0IsTUFBTSxFQUFFLFdBQVc7NEJBQ25CLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTs0QkFDcEIsVUFBVSxFQUFFLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRyxhQUFhLENBQUM7NEJBQ3BDLE9BQU8sU0FBQTt5QkFDUixDQUFDLENBQUE7d0JBQ21CLHFCQUFNLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQTFDLFlBQVksR0FBRyxTQUEyQjt3QkFDaEQsSUFBRyxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUU7NEJBQy9CLGVBQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTt5QkFDNUM7OzRCQUNJLGVBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7Ozs7O0tBQzFCO0lBQ08sNEJBQUksR0FBWixVQUFhLFVBQWtCO1FBQzdCLElBQUEsa0JBQVcsRUFBQyxVQUFVLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBQ08sOEJBQU0sR0FBZCxVQUFlLEVBQUU7UUFDZixFQUFFLENBQUMsTUFBTSxHQUFHLGVBQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUM5QixJQUFNLE1BQU0sR0FBRSxlQUFNLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDaEMsSUFBTSxhQUFhLEdBQUcsZUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ3hDLGFBQWEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLENBQUE7UUFDbkQsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQTtRQUM5QixPQUFPLEVBQUUsQ0FBQTtJQUNYLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFqS0QsSUFpS0MifQ==