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
/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-11 22:51:19
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-14 00:18:09
 */
var $CloudAPI20160714 = __importStar(require("@alicloud/cloudapi20160714"));
// import * as $OpenApi from '@alicloud/openapi-client';
var $Util = __importStar(require("@alicloud/tea-util"));
var ClientInit_1 = require("../ClientInit");
var SCreateApiGroup = /** @class */ (function () {
    function SCreateApiGroup(AccessKeyID, AccessKeySecret, props) {
        this.AccessKeyID = AccessKeyID;
        this.AccessKeySecret = AccessKeySecret;
        this.props = props;
    }
    /**
     * @description 创建api网关组
     */
    SCreateApiGroup.prototype.createApiGroup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var client, createApiGroupRequest, runtime, res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = ClientInit_1.ClientInit.createClient(this.AccessKeyID, this.AccessKeySecret, this.props.region);
                        createApiGroupRequest = new $CloudAPI20160714.CreateApiGroupRequest({
                            groupName: this.props.groupName,
                            basePath: this.props.basePath,
                            description: this.props.description || "",
                            instanceId: this.props.instanceId
                        });
                        runtime = new $Util.RuntimeOptions({});
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, client.createApiGroupWithOptions(createApiGroupRequest, runtime)];
                    case 2: return [4 /*yield*/, (_a.sent()).body];
                    case 3:
                        res = _a.sent();
                        if (!res.tagStatus) {
                            return [2 /*return*/, Promise.resolve({
                                    error: 'cant create apiGroup'
                                })];
                        }
                        return [2 /*return*/, res];
                    case 4:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [2 /*return*/, Promise.resolve({
                                error: error_1
                            })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return SCreateApiGroup;
}());
exports.default = SCreateApiGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU0NyZWF0ZUFwaUdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnQvYXBpR3JvdXBzL1NDcmVhdGVBcGlHcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztHQU1HO0FBQ0gsNEVBQWdFO0FBQ2hFLHdEQUF3RDtBQUN4RCx3REFBNEM7QUFDNUMsNENBQTJDO0FBQzNDO0lBSUkseUJBQVksV0FBbUIsRUFBRSxlQUFzQixFQUFFLEtBQUs7UUFDMUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7UUFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUE7UUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDdEIsQ0FBQztJQUNEOztPQUVHO0lBQ0csd0NBQWMsR0FBcEI7Ozs7Ozt3QkFDUSxNQUFNLEdBQUcsdUJBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQzVGLHFCQUFxQixHQUFHLElBQUksaUJBQWlCLENBQUMscUJBQXFCLENBQUM7NEJBQ3BFLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7NEJBQy9CLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7NEJBQzdCLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsSUFBSSxFQUFFOzRCQUN6QyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVO3lCQUNwQyxDQUFDLENBQUM7d0JBQ0MsT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFHLENBQUMsQ0FBQzs7Ozt3QkFFckIscUJBQU0sTUFBTSxDQUFDLHlCQUF5QixDQUFDLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxFQUFBOzRCQUE3RSxxQkFBTSxDQUFDLFNBQXNFLENBQUMsQ0FBQyxJQUFJLEVBQUE7O3dCQUF6RixHQUFHLEdBQUcsU0FBbUY7d0JBQy9GLElBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFOzRCQUNmLHNCQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUM7b0NBQ25CLEtBQUssRUFBRSxzQkFBc0I7aUNBQ2hDLENBQUMsRUFBQTt5QkFDTDt3QkFDRCxzQkFBTyxHQUFHLEVBQUE7Ozt3QkFFVixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQUssQ0FBQyxDQUFBO3dCQUNwQixzQkFBTyxPQUFPLENBQUMsT0FBTyxDQUFDO2dDQUNuQixLQUFLLFNBQUE7NkJBQ1IsQ0FBQyxFQUFBOzs7OztLQUVUO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDIn0=