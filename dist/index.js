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
var store_1 = __importDefault(require("./lib/component/store"));
var SSetDomain_1 = require("./lib/component/domain/SSetDomain");
var ComponentDemo = /** @class */ (function () {
    function ComponentDemo() {
    }
    ComponentDemo.prototype.deploy = function (inputs) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var _c, credentials, props, argsObj, screateApiGroup, hasRemote, apis, re, sDescribeApiGroup;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, (0, utils_1.parseInput)(inputs)];
                    case 1:
                        _c = _d.sent(), credentials = _c.credentials, props = _c.props, argsObj = _c.argsObj;
                        (0, utils_1.preCheck)(props);
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
                        if (((_b = (_a = (_d.sent()).apiGroupAttributes) === null || _a === void 0 ? void 0 : _a.apiGroupAttribute[0]) === null || _b === void 0 ? void 0 : _b.groupName) === props.groupName)
                            hasRemote = true;
                        _d.label = 3;
                    case 3:
                        if (!hasRemote) return [3 /*break*/, 13];
                        if (!argsObj['use-local']) return [3 /*break*/, 7];
                        if (!(props.groupName === 'auto' || !hasRemote)) return [3 /*break*/, 5];
                        return [4 /*yield*/, screateApiGroup.deploy()];
                    case 4:
                        _d.sent();
                        return [2 /*return*/, this.enrich(re)];
                    case 5: return [4 /*yield*/, this.modify(inputs)];
                    case 6: return [2 /*return*/, _d.sent()];
                    case 7:
                        if (!argsObj['use-remote']) return [3 /*break*/, 11];
                        if (!(props.groupName === 'auto' || !hasRemote)) return [3 /*break*/, 9];
                        return [4 /*yield*/, screateApiGroup.deploy()];
                    case 8:
                        _d.sent();
                        return [2 /*return*/, this.enrich(re)];
                    case 9: return [4 /*yield*/, this.modify(inputs)];
                    case 10: return [2 /*return*/, _d.sent()];
                    case 11: return [4 /*yield*/, this.modify(inputs)];
                    case 12: return [2 /*return*/, _d.sent()];
                    case 13: return [4 /*yield*/, screateApiGroup.deploy()];
                    case 14:
                        _d.sent();
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
                                if (res.remote) {
                                    tools_1.Slogger.info('远程配置无需修改');
                                    return [2 /*return*/];
                                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxpRUFBK0Q7QUFDL0QsNkVBQTJFO0FBQzNFLGlGQUErRTtBQUMvRSxtQ0FBd0M7QUFDeEMsMkNBQTJDO0FBQzNDLHFDQUFrRDtBQUNsRCw2RUFBMkU7QUFDM0UsZ0VBQTBDO0FBQzFDLGdFQUE4RDtBQUU5RDtJQUFBO0lBNklBLENBQUM7SUE1SWMsOEJBQU0sR0FBbkIsVUFBb0IsTUFBa0I7Ozs7Ozs0QkFDSSxxQkFBTSxJQUFBLGtCQUFVLEVBQUMsTUFBTSxDQUFDLEVBQUE7O3dCQUExRCxLQUFrQyxTQUF3QixFQUF4RCxXQUFXLGlCQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsT0FBTyxhQUFBO3dCQUNuQyxJQUFBLGdCQUFRLEVBQUMsS0FBSyxDQUFDLENBQUE7d0JBQ2YsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxDQUFDLEVBQUU7NEJBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7NEJBQ3BCLHNCQUFPO3lCQUNSO3dCQUVLLGVBQWUsR0FBRyxJQUFJLHFCQUFTLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFBO3dCQUM5RixTQUFTLEdBQVksS0FBSyxDQUFBO3dCQUN4QixJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDOzRCQUNuQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87NEJBQ3JCLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVc7NEJBQzNDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVc7eUJBQzVDLENBQUMsRUFKa0MsQ0FJbEMs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