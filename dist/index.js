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
                        if (!argsObj.length) return [3 /*break*/, 5];
                        if (!(argsObj.includes('--help') || argsObj.includes('-h'))) return [3 /*break*/, 1];
                        this.help('deploy');
                        return [3 /*break*/, 4];
                    case 1:
                        if (!(argsObj.includes('--force') || argsObj.includes('-f'))) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.delete(inputs)];
                    case 2:
                        _d.sent();
                        return [4 /*yield*/, screateApiGroup.deploy(argsObj)];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2 /*return*/];
                    case 5:
                        if (!(props.groupName !== 'auto')) return [3 /*break*/, 7];
                        sDescribeApiGroup = new SDescribeApiGroup_1.SDescribeApiGroup({
                            access: {
                                AccessKeyID: AccessKeyID,
                                AccessKeySecret: AccessKeySecret
                            },
                            region: props.region,
                            groupName: props.groupName
                        });
                        return [4 /*yield*/, sDescribeApiGroup.describeApiGroups()];
                    case 6:
                        if (((_b = (_a = (_d.sent()).apiGroupAttributes) === null || _a === void 0 ? void 0 : _a.apiGroupAttribute[0]) === null || _b === void 0 ? void 0 : _b.groupName)
                            === props.groupName) {
                            tools_1.Slogger.error('已存在该api组', props.groupName);
                            return [2 /*return*/];
                        }
                        _d.label = 7;
                    case 7: return [4 /*yield*/, screateApiGroup.deploy()];
                    case 8:
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
    ComponentDemo.prototype.help = function (methodName) {
        (0, help_1.showHelpDoc)(methodName);
    };
    return ComponentDemo;
}());
exports.default = ComponentDemo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxpRUFBK0Q7QUFDL0QsNkVBQTJFO0FBQzNFLGlGQUErRTtBQUMvRSxtQ0FBd0M7QUFDeEMsMkNBQTJDO0FBQzNDLHFDQUF3QztBQUV4QztJQUFBO0lBNkNBLENBQUM7SUE1Q2MsOEJBQU0sR0FBbkIsVUFBb0IsTUFBa0I7Ozs7Ozs7d0JBQzlCLEtBQW1ELElBQUEsa0JBQVUsRUFBQyxNQUFNLENBQUMsRUFBbkUsV0FBVyxpQkFBQSxFQUFFLGVBQWUscUJBQUEsRUFBRSxLQUFLLFdBQUEsRUFBRSxPQUFPLGFBQUEsQ0FBdUI7d0JBQ3JFLGVBQWUsR0FBRyxJQUFJLHFCQUFTLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQTs2QkFDdkUsT0FBTyxDQUFDLE1BQU0sRUFBZCx3QkFBYzs2QkFDWixDQUFBLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQSxFQUFwRCx3QkFBb0Q7d0JBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7Ozs2QkFFZixDQUFBLE9BQU8sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQSxFQUFyRCx3QkFBcUQ7d0JBQzNELHFCQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUE7O3dCQUF6QixTQUF5QixDQUFBO3dCQUV6QixxQkFBTSxlQUFlLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFBOzt3QkFBckMsU0FBcUMsQ0FBQTs7NEJBRXZDLHNCQUFNOzs2QkFFTCxDQUFBLEtBQUssQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFBLEVBQTFCLHdCQUEwQjt3QkFDckIsaUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQzs0QkFDOUMsTUFBTSxFQUFFO2dDQUNOLFdBQVcsYUFBQTtnQ0FDWCxlQUFlLGlCQUFBOzZCQUNoQjs0QkFDRCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07NEJBQ3BCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUzt5QkFDM0IsQ0FBQyxDQUFBO3dCQUNFLHFCQUFNLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLEVBQUE7O3dCQUEvQyxJQUFHLENBQUEsTUFBQSxNQUFBLENBQUMsU0FBMkMsQ0FBQyxDQUFDLGtCQUFrQiwwQ0FBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsMENBQUUsU0FBUztnQ0FDaEcsS0FBSyxDQUFDLFNBQVMsRUFBRTs0QkFDbkIsZUFBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFBOzRCQUMxQyxzQkFBTTt5QkFDUDs7NEJBRUgscUJBQU0sZUFBZSxDQUFDLE1BQU0sRUFBRSxFQUFBOzt3QkFBOUIsU0FBOEIsQ0FBQTs7Ozs7S0FDL0I7SUFDWSw4QkFBTSxHQUFuQixVQUFvQixNQUFrQjs7Ozs7O3dCQUM5QixLQUEwQyxJQUFBLGtCQUFVLEVBQUMsTUFBTSxDQUFDLEVBQTFELFdBQVcsaUJBQUEsRUFBRSxlQUFlLHFCQUFBLEVBQUUsS0FBSyxXQUFBLENBQXVCO3dCQUM1RCxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUE7d0JBQ3JFLHFCQUFNLGVBQWUsQ0FBQyxjQUFjLEVBQUUsRUFBQTs7d0JBQTVDLEdBQUcsR0FBRyxTQUFzQzt3QkFDbEQsSUFBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUU7NEJBQ3RCLGVBQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTt5QkFDckM7NkJBQUs7NEJBQ0osZUFBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTt5QkFDekI7Ozs7O0tBQ0Y7SUFDTyw0QkFBSSxHQUFaLFVBQWEsVUFBa0I7UUFDN0IsSUFBQSxrQkFBVyxFQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUE3Q0QsSUE2Q0MifQ==