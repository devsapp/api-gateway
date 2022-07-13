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
/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-05 22:22:42
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-13 22:34:41
 */
var logger_1 = __importDefault(require("./common/logger"));
var SApiGroup_1 = require("./lib/component/apiGroups/SApiGroup");
var utils_1 = require("./lib/utils");
var ComponentDemo = /** @class */ (function () {
    function ComponentDemo() {
    }
    /**
     * demo 实例
     * @param inputs
     * @returns
     */
    ComponentDemo.prototype.test = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                logger_1.default.debug("input: ".concat(JSON.stringify(inputs.props)));
                logger_1.default.info('command test');
                return [2 /*return*/, { hello: 'world' }];
            });
        });
    };
    ComponentDemo.prototype.deploy = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, AccessKeyID, AccessKeySecret, props, createApiGroup, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = (0, utils_1.parseInput)(inputs), AccessKeyID = _a.AccessKeyID, AccessKeySecret = _a.AccessKeySecret, props = _a.props;
                        createApiGroup = new SApiGroup_1.SApiGroup(AccessKeyID, AccessKeySecret, props);
                        return [4 /*yield*/, createApiGroup.deploy()];
                    case 1:
                        res = _b.sent();
                        console.log('创建成功', res);
                        return [2 /*return*/];
                }
            });
        });
    };
    return ComponentDemo;
}());
exports.default = ComponentDemo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0dBTUc7QUFDSCwyREFBb0M7QUFFcEMsaUVBQStEO0FBQy9ELHFDQUF3QztBQUV4QztJQUFBO0lBaUJBLENBQUM7SUFoQkM7Ozs7T0FJRztJQUNVLDRCQUFJLEdBQWpCLFVBQWtCLE1BQWtCOzs7Z0JBQ2xDLGdCQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFVLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFFLENBQUMsQ0FBQTtnQkFDdEQsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7Z0JBQzNCLHNCQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFBOzs7S0FDMUI7SUFDWSw4QkFBTSxHQUFuQixVQUFvQixNQUFrQjs7Ozs7O3dCQUM5QixLQUEwQyxJQUFBLGtCQUFVLEVBQUMsTUFBTSxDQUFDLEVBQTFELFdBQVcsaUJBQUEsRUFBRSxlQUFlLHFCQUFBLEVBQUUsS0FBSyxXQUFBLENBQXVCO3dCQUM1RCxjQUFjLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUE7d0JBQzdELHFCQUFNLGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBQTs7d0JBQW5DLEdBQUcsR0FBRyxTQUE2Qjt3QkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUE7Ozs7O0tBQ3pCO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDIn0=