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
exports.SDescribeApiGroup = void 0;
var $CloudAPI20160714 = __importStar(require("@alicloud/cloudapi20160714"));
var $Util = __importStar(require("@alicloud/tea-util"));
var ClientInit_1 = require("../ClientInit");
var tools_1 = require("../../tools/tools");
/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-11 22:51:33
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-23 19:55:46
 */
var SDescribeApiGroup = /** @class */ (function () {
    function SDescribeApiGroup(config) {
        this.config = config;
    }
    SDescribeApiGroup.prototype.describeApiGroups = function () {
        return __awaiter(this, void 0, void 0, function () {
            var client, describeApiGroupsRequest, runtime;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = ClientInit_1.ClientInit.createClient(this.config.access.AccessKeyID, this.config.access.AccessKeySecret, this.config.region);
                        describeApiGroupsRequest = new $CloudAPI20160714.DescribeApiGroupsRequest({
                            groupName: this.config.groupName,
                        });
                        runtime = new $Util.RuntimeOptions({});
                        return [4 /*yield*/, (0, tools_1.handleClientRequst)(client, 'describeApiGroupsWithOptions', describeApiGroupsRequest, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SDescribeApiGroup.prototype.describeApiGroup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var client, describeApiGroupRequest, runtime;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.config.groupId)
                            return [2 /*return*/, {
                                    responseStatus: false,
                                    error: new Error('lack groupId')
                                }];
                        client = ClientInit_1.ClientInit.createClient(this.config.access.AccessKeyID, this.config.access.AccessKeySecret, this.config.region);
                        describeApiGroupRequest = new $CloudAPI20160714.DescribeApiGroupRequest({
                            groupId: this.config.groupId
                        });
                        runtime = new $Util.RuntimeOptions({});
                        return [4 /*yield*/, (0, tools_1.handleClientRequst)(client, 'describeApiGroupWithOptions', describeApiGroupRequest, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SDescribeApiGroup.prototype.setGroupId = function (str) {
        this.config.groupId = str;
    };
    return SDescribeApiGroup;
}());
exports.SDescribeApiGroup = SDescribeApiGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU0Rlc2NyaWJlQXBpR3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudC9hcGlHcm91cHMvU0Rlc2NyaWJlQXBpR3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSw0RUFBK0Q7QUFDL0Qsd0RBQTJDO0FBQzNDLDRDQUEwQztBQUMxQywyQ0FBc0Q7QUFFdEQ7Ozs7OztHQU1HO0FBQ0g7SUFFRSwyQkFBWSxNQUE0QjtRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUN0QixDQUFDO0lBQ0ssNkNBQWlCLEdBQXZCOzs7Ozs7d0JBQ00sTUFBTSxHQUFHLHVCQUFVLENBQUMsWUFBWSxDQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ25CLENBQUE7d0JBQ0csd0JBQXdCLEdBQzFCLElBQUksaUJBQWlCLENBQUMsd0JBQXdCLENBQUM7NEJBQzdDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7eUJBQ2pDLENBQUMsQ0FBQTt3QkFDQSxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFBO3dCQUNuQyxxQkFBTSxJQUFBLDBCQUFrQixFQUM3QixNQUFNLEVBQ04sOEJBQThCLEVBQzlCLHdCQUF3QixFQUN4QixPQUFPLENBQ1IsRUFBQTs0QkFMRCxzQkFBTyxTQUtOLEVBQUE7Ozs7S0FDRjtJQUNLLDRDQUFnQixHQUF0Qjs7Ozs7O3dCQUNFLElBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87NEJBQUUsc0JBQU87b0NBQzlCLGNBQWMsRUFBRSxLQUFLO29DQUNyQixLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDO2lDQUNqQyxFQUFBO3dCQUNHLE1BQU0sR0FBRyx1QkFBVSxDQUFDLFlBQVksQ0FDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUNuQixDQUFBO3dCQUNHLHVCQUF1QixHQUN6QixJQUFJLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDOzRCQUM1QyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO3lCQUM3QixDQUFDLENBQUE7d0JBQ0EsT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQTt3QkFDbkMscUJBQU0sSUFBQSwwQkFBa0IsRUFDN0IsTUFBTSxFQUNOLDZCQUE2QixFQUM3Qix1QkFBdUIsRUFDdkIsT0FBTyxDQUNSLEVBQUE7NEJBTEQsc0JBQU8sU0FLTixFQUFBOzs7O0tBQ0Y7SUFDRCxzQ0FBVSxHQUFWLFVBQVcsR0FBRztRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQTtJQUMzQixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBaERELElBZ0RDO0FBaERZLDhDQUFpQiJ9