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
var SApiGroup_1 = require("./lib/component/apiGroups/SApiGroup");
var SDeleteApiGroup_1 = require("./lib/component/apiGroups/SDeleteApiGroup");
var SDescribeApiGroup_1 = require("./lib/component/apiGroups/SDescribeApiGroup");
var help_1 = require("./lib/help");
var tools_1 = require("./lib/tools/tools");
var utils_1 = require("./lib/utils");
var SModifyApiGroup_1 = require("./lib/component/apiGroups/SModifyApiGroup");
var core_1 = require("@serverless-devs/core");
var ComponentDemo = /** @class */ (function () {
    function ComponentDemo() {
    }
    ComponentDemo.prototype.deploy = function (inputs) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var _c, AccessKeyID, AccessKeySecret, props, argsObj, screateApiGroup, hasRemote, sDescribeApiGroup, op, _d, ans;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _c = (0, utils_1.parseInput)(inputs), AccessKeyID = _c.AccessKeyID, AccessKeySecret = _c.AccessKeySecret, props = _c.props, argsObj = _c.argsObj;
                        screateApiGroup = new SApiGroup_1.SApiGroup(AccessKeyID, AccessKeySecret, props);
                        hasRemote = false;
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
                        if (((_b = (_a = (_e.sent()).apiGroupAttributes) === null || _a === void 0 ? void 0 : _a.apiGroupAttribute[0]) === null || _b === void 0 ? void 0 : _b.groupName) === props.groupName)
                            hasRemote = true;
                        _e.label = 2;
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
                        _e.sent();
                        return [2 /*return*/];
                    case 6: return [4 /*yield*/, this.modify(inputs)];
                    case 7:
                        _e.sent();
                        return [3 /*break*/, 13];
                    case 8:
                        if (!(props.groupName === 'auto' || !hasRemote)) return [3 /*break*/, 10];
                        return [4 /*yield*/, screateApiGroup.deploy()];
                    case 9:
                        _e.sent();
                        return [3 /*break*/, 11];
                    case 10:
                        tools_1.Slogger.info('已选择使用远程配置');
                        _e.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        tools_1.Slogger.warn('There is no such command');
                        _e.label = 13;
                    case 13: return [2 /*return*/];
                    case 14:
                        if (!hasRemote) return [3 /*break*/, 16];
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
                        ans = _e.sent();
                        switch (ans.option) {
                            case 'use a local configuration':
                                this.modify(inputs);
                                break;
                            case 'use a remote configuration':
                                tools_1.Slogger.info('已使用远程配置');
                                break;
                            default:
                                break;
                        }
                        return [2 /*return*/];
                    case 16: return [4 /*yield*/, screateApiGroup.deploy()];
                    case 17:
                        _e.sent();
                        _e.label = 18;
                    case 18: return [2 /*return*/];
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
            var _a, AccessKeyID, AccessKeySecret, props, smodifyApiGroup, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = (0, utils_1.parseInput)(inputs), AccessKeyID = _a.AccessKeyID, AccessKeySecret = _a.AccessKeySecret, props = _a.props;
                        smodifyApiGroup = new SModifyApiGroup_1.SModifyApiGroup(AccessKeyID, AccessKeySecret, props);
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
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ComponentDemo.prototype.help = function (methodName) {
        (0, help_1.showHelpDoc)(methodName);
    };
    return ComponentDemo;
}());
exports.default = ComponentDemo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxpRUFBK0Q7QUFDL0QsNkVBQTJFO0FBQzNFLGlGQUErRTtBQUMvRSxtQ0FBd0M7QUFDeEMsMkNBQTJDO0FBQzNDLHFDQUF3QztBQUN4Qyw2RUFBMkU7QUFDM0UsOENBQWdEO0FBRWhEO0lBQUE7SUEwR0EsQ0FBQztJQXpHYyw4QkFBTSxHQUFuQixVQUFvQixNQUFrQjs7Ozs7Ozt3QkFDOUIsS0FBbUQsSUFBQSxrQkFBVSxFQUFDLE1BQU0sQ0FBQyxFQUFuRSxXQUFXLGlCQUFBLEVBQUUsZUFBZSxxQkFBQSxFQUFFLEtBQUssV0FBQSxFQUFFLE9BQU8sYUFBQSxDQUF1Qjt3QkFDckUsZUFBZSxHQUFHLElBQUkscUJBQVMsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFBO3dCQUN0RSxTQUFTLEdBQVksS0FBSyxDQUFBOzZCQUMxQixDQUFBLEtBQUssQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFBLEVBQTFCLHdCQUEwQjt3QkFDdEIsaUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQzs0QkFDOUMsTUFBTSxFQUFFO2dDQUNOLFdBQVcsYUFBQTtnQ0FDWCxlQUFlLGlCQUFBOzZCQUNoQjs0QkFDRCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07NEJBQ3BCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUzt5QkFDM0IsQ0FBQyxDQUFBO3dCQUVDLHFCQUFNLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLEVBQUE7O3dCQUQ5QyxJQUNFLENBQUEsTUFBQSxNQUFBLENBQUMsU0FBMkMsQ0FBQyxDQUFDLGtCQUFrQiwwQ0FDNUQsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFNBQVMsTUFBSyxLQUFLLENBQUMsU0FBUzs0QkFFdkQsU0FBUyxH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