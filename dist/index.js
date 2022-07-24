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
var ComponentDemo = /** @class */ (function () {
    function ComponentDemo() {
    }
    ComponentDemo.prototype.deploy = function (inputs) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var _c, AccessKeyID, AccessKeySecret, props, argsObj, screateApiGroup, sDescribeApiGroup;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _c = (0, utils_1.parseInput)(inputs), AccessKeyID = _c.AccessKeyID, AccessKeySecret = _c.AccessKeySecret, props = _c.props, argsObj = _c.argsObj;
                        screateApiGroup = new SApiGroup_1.SApiGroup(AccessKeyID, AccessKeySecret, props);
                        if (!argsObj.length) return [3 /*break*/, 7];
                        if (!(argsObj.includes('--help') || argsObj.includes('-h'))) return [3 /*break*/, 1];
                        this.help('deploy');
                        return [3 /*break*/, 6];
                    case 1:
                        if (!(argsObj.includes('--force') || argsObj.includes('-f'))) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.delete(inputs)];
                    case 2:
                        _d.sent();
                        return [4 /*yield*/, screateApiGroup.deploy(argsObj)];
                    case 3:
                        _d.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        if (!(argsObj.includes('--edit') || argsObj.includes('-e'))) return [3 /*break*/, 6];
                        if (props.groupName === 'auto') {
                            tools_1.Slogger.error('不允许更新名称auto的api组 Updates to api groups with the name auto are not allowed');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.modify(inputs)];
                    case 5:
                        _d.sent();
                        _d.label = 6;
                    case 6: return [2 /*return*/];
                    case 7:
                        if (!(props.groupName !== 'auto')) return [3 /*break*/, 9];
                        sDescribeApiGroup = new SDescribeApiGroup_1.SDescribeApiGroup({
                            access: {
                                AccessKeyID: AccessKeyID,
                                AccessKeySecret: AccessKeySecret,
                            },
                            region: props.region,
                            groupName: props.groupName,
                        });
                        return [4 /*yield*/, sDescribeApiGroup.describeApiGroups()];
                    case 8:
                        if (((_b = (_a = (_d.sent()).apiGroupAttributes) === null || _a === void 0 ? void 0 : _a.apiGroupAttribute[0]) === null || _b === void 0 ? void 0 : _b.groupName) === props.groupName) {
                            tools_1.Slogger.error('已存在该api组', props.groupName);
                            return [2 /*return*/];
                        }
                        _d.label = 9;
                    case 9: return [4 /*yield*/, screateApiGroup.deploy()];
                    case 10:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ComponentDemo.prototype.delete = function (inputs) {
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
                            tools_1.Slogger.error('api组修改失败', res.error);
                        }
                        else {
                            tools_1.Slogger.info('api组修改成功');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxpRUFBK0Q7QUFDL0QsNkVBQTJFO0FBQzNFLGlGQUErRTtBQUMvRSxtQ0FBd0M7QUFDeEMsMkNBQTJDO0FBQzNDLHFDQUF3QztBQUN4Qyw2RUFBMkU7QUFFM0U7SUFBQTtJQTBFQSxDQUFDO0lBekVjLDhCQUFNLEdBQW5CLFVBQW9CLE1BQWtCOzs7Ozs7O3dCQUM5QixLQUFtRCxJQUFBLGtCQUFVLEVBQUMsTUFBTSxDQUFDLEVBQW5FLFdBQVcsaUJBQUEsRUFBRSxlQUFlLHFCQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsT0FBTyxhQUFBLENBQXVCO3dCQUNyRSxlQUFlLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUE7NkJBQ3RFLE9BQU8sQ0FBQyxNQUFNLEVBQWQsd0JBQWM7NkJBQ1osQ0FBQSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUEsRUFBcEQsd0JBQW9EO3dCQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBOzs7NkJBQ1YsQ0FBQSxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUEsRUFBckQsd0JBQXFEO3dCQUM5RCxxQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFBOzt3QkFBekIsU0FBeUIsQ0FBQTt3QkFDekIscUJBQU0sZUFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBQTs7d0JBQXJDLFNBQXFDLENBQUE7Ozs2QkFDNUIsQ0FBQSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEs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