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
var help_1 = require("./lib/help");
var utils_1 = require("./lib/utils");
var ComponentDemo = /** @class */ (function () {
    function ComponentDemo() {
    }
    // TODO 尝试使用装饰器来增加参数功能 例如 --help 跳转对应的说明文档
    ComponentDemo.prototype.deploy = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, AccessKeyID, AccessKeySecret, props, argsObj, createApiGroup_1, createApiGroup;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = (0, utils_1.parseInput)(inputs), AccessKeyID = _a.AccessKeyID, AccessKeySecret = _a.AccessKeySecret, props = _a.props, argsObj = _a.argsObj;
                        if (!argsObj.length) return [3 /*break*/, 4];
                        if (!(argsObj.includes('--help') || argsObj.includes('-h'))) return [3 /*break*/, 1];
                        this.help('deploy');
                        return [3 /*break*/, 3];
                    case 1:
                        createApiGroup_1 = new SApiGroup_1.SApiGroup(AccessKeyID, AccessKeySecret, props);
                        return [4 /*yield*/, createApiGroup_1.deploy(argsObj)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                    case 4:
                        createApiGroup = new SApiGroup_1.SApiGroup(AccessKeyID, AccessKeySecret, props);
                        return [4 /*yield*/, createApiGroup.deploy()];
                    case 5:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ComponentDemo.prototype.help = function (methodName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                (0, help_1.showHelpDoc)(methodName);
                return [2 /*return*/];
            });
        });
    };
    return ComponentDemo;
}());
exports.default = ComponentDemo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxpRUFBK0Q7QUFDL0QsbUNBQXdDO0FBQ3hDLHFDQUF3QztBQUV4QztJQUFBO0lBcUNBLENBQUM7SUFwQ0MsMENBQTBDO0lBQzdCLDhCQUFNLEdBQW5CLFVBQW9CLE1BQWtCOzs7Ozs7d0JBQzlCLEtBQW1ELElBQUEsa0JBQVUsRUFBQyxNQUFNLENBQUMsRUFBbkUsV0FBVyxpQkFBQSxFQUFFLGVBQWUscUJBQUEsRUFBRSxLQUFLLFdBQUEsRUFBRSxPQUFPLGFBQUEsQ0FBdUI7NkJBQ3hFLE9BQU8sQ0FBQyxNQUFNLEVBQWQsd0JBQWM7NkJBQ1osQ0FBQSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUEsRUFBcEQsd0JBQW9EO3dCQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBOzs7d0JBR2YsbUJBQWlCLElBQUkscUJBQVMsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFBO3dCQUN6RSxxQkFBTSxnQkFBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBQTs7d0JBQXBDLFNBQW9DLENBQUE7OzRCQUV0QyxzQkFBTTs7d0JBRUYsY0FBYyxHQUFHLElBQUkscUJBQVMsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFBO3dCQUN6RSxxQkFBTSxjQUFjLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUE3QixTQUE2QixDQUFBOzs7OztLQUM5QjtJQUNZLDRCQUFJLEdBQWpCLFVBQWtCLFVBQWtCOzs7Z0JBQ2xDLElBQUEsa0JBQVcsRUFBQyxVQUFVLENBQUMsQ0FBQTs7OztLQUN4QjtJQWtCSCxvQkFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0MifQ==