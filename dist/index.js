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
var ComponentDemo = /** @class */ (function () {
    function ComponentDemo() {
    }
    ComponentDemo.prototype.deploy = function (inputs) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var _c, AccessKeyID, AccessKeySecret, props, argsObj, screateApiGroup, hasRemote, apis, re, sDescribeApiGroup, op, _d, ans, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _c = (0, utils_1.parseInput)(inputs), AccessKeyID = _c.AccessKeyID, AccessKeySecret = _c.AccessKeySecret, props = _c.props, argsObj = _c.argsObj;
                        screateApiGroup = new SApiGroup_1.SApiGroup(AccessKeyID, AccessKeySecret, props);
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
                        if (!(props.groupName !== 'auto')) return [3 /*break*/, 2];
                        sDescribeApiGroup = new SDescribeApiGroup_1.SDescribeApiGroup({
                            access: {
                                AccessKeyID: AccessKeyID,
                                AccessKeySecret: AccessKeySecret,
                            },
                            region: props.region,
                            groupName: props.groupName,
                        });
                        return [4 /*yield*/, sDescribeApiGroup.describeApiGroups()];
                    case 1:
                        if (((_b = (_a = (_f.sent()).apiGroupAttributes) === null || _a === void 0 ? void 0 : _a.apiGroupAttribute[0]) === null || _b === void 0 ? void 0 : _b.groupName) === props.groupName)
                            hasRemote = true;
                        _f.label = 2;
                    case 2:
                        if (!argsObj.length) return [3 /*break*/, 14];
                        op = argsObj[0];
                        console.log(op);
                        _d = op;
                        switch (_d) {
                            case '--help': return [3 /*break*/, 3];
                            case '-h': return [3 /*break*/, 3];
                            case '--use-local': return [3 /*break*/, 4];
                            case '--use-remote': return [3 /*break*/, 8];
                        }
                        return [3 /*break*/, 12];
                    case 3:
                        this.help('deploy');
                        return [3 /*break*/, 13];
                    case 4:
                        if (!(props.groupName === 'auto' || !hasRemote)) return [3 /*break*/, 6];
                        return [4 /*yield*/, screateApiGroup.deploy()];
                    case 5:
                        _f.sent();
                        return [2 /*return*/, this.enrich(re)];
                    case 6: return [4 /*yield*/, this.modify(inputs)];
                    case 7: return [2 /*return*/, _f.sent()];
                    case 8:
                        if (!(props.groupName === 'auto' || !hasRemote)) return [3 /*break*/, 10];
                        return [4 /*yield*/, screateApiGroup.deploy()];
                    case 9:
                        _f.sent();
                        return [3 /*break*/, 11];
                    case 10:
                        tools_1.Slogger.info('已选择使用远程配置');
                        _f.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        tools_1.Slogger.warn('There is no such command');
                        _f.label = 13;
                    case 13: return [2 /*return*/];
                    case 14:
                        if (!hasRemote) return [3 /*break*/, 21];
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
                    case 15:
                        ans = _f.sent();
                        _e = ans.option;
                        switch (_e) {
                            case 'use a local configuration': return [3 /*break*/, 16];
                            case 'use a remote configuration': return [3 /*break*/, 18];
                        }
                        return [3 /*break*/, 19];
                    case 16: return [4 /*yield*/, this.modify(inputs)];
                    case 17: return [2 /*return*/, _f.sent()];
                    case 18:
                        tools_1.Slogger.info('已使用远程配置');
                        return [3 /*break*/, 20];
                    case 19: return [3 /*break*/, 20];
                    case 20: return [2 /*return*/];
                    case 21: return [4 /*yield*/, screateApiGroup.deploy()];
                    case 22:
                        _f.sent();
                        _f.label = 23;
                    case 23: return [2 /*return*/, this.enrich(re)];
                }
            });
        });
    };
    ComponentDemo.prototype.remove = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, AccessKeyID, AccessKeySecret, props, sdeleteApiGroup, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = (0, utils_1.parseInput)(inputs), AccessKeyID = _a.AccessKeyID, AccessKeySecret = _a.AccessKeySecret, props = _a.props;
                        sdeleteApiGroup = new SDeleteApiGroup_1.SDeleteApiGroup(AccessKeyID, AccessKeySecret, props);
                        return [4 /*yield*/, sdeleteApiGroup.deleteApiGroup()];
                    case 1:
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
            var _a, AccessKeyID, AccessKeySecret, props, smodifyApiGroup, apis, re, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = (0, utils_1.parseInput)(inputs), AccessKeyID = _a.AccessKeyID, AccessKeySecret = _a.AccessKeySecret, props = _a.props;
                        smodifyApiGroup = new SModifyApiGroup_1.SModifyApiGroup(AccessKeyID, AccessKeySecret, props);
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
                    case 1:
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxpRUFBK0Q7QUFDL0QsNkVBQTJFO0FBQzNFLGlGQUErRTtBQUMvRSxtQ0FBd0M7QUFDeEMsMkNBQTJDO0FBQzNDLHFDQUF3QztBQUN4Qyw2RUFBMkU7QUFDM0UsOENBQWdEO0FBQ2hELGdFQUEwQztBQUUxQztJQUFBO0lBd0lBLENBQUM7SUF2SWMsOEJBQU0sR0FBbkIsVUFBb0IsTUFBa0I7Ozs7Ozs7d0JBQzlCLEtBQW1ELElBQUEsa0JBQVUsRUFBQyxNQUFNLENBQUMsRUFBbkUsV0FBVyxpQkFBQSxFQUFFLGVBQWUscUJBQUEsRUFBRSxLQUFLLFdBQUEsRUFBRSxPQUFPLGFBQUEsQ0FBdUI7d0JBQ3JFLGVBQWUsR0FBRyxJQUFJLHFCQUFTLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQTt3QkFDdEUsU0FBUyxHQUFZLEtBQUssQ0FBQTt3QkFDeEIsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQzs0QkFDbkMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPOzRCQUNyQixXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXOzRCQUMzQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXO3lCQUM1QyxDQUFDLEVBSmtDLENBSWxDLENBQUMsQ0FBQTt3QkFDRyxFQUFFLEdBQUc7NEJBQ1QsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNOzRCQUNwQixRQUFRLEVBQUUsS0FBSyxDQUFDLFNBQVM7NEJBQ3pCLElBQUksTUFBQTt5QkFDTCxDQUFBOzZCQUNHLENBQUEsS0FBSyxDQUFDLFNBQVMsS0FBSyxNQUFNLENBQUEsRUFBMUIsd0JBQTBC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