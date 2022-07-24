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
exports.SModifyApiGroup = void 0;
var $CloudAPI20160714 = __importStar(require("@alicloud/cloudapi20160714"));
var $Util = __importStar(require("@alicloud/tea-util"));
var ClientInit_1 = require("../ClientInit");
var tools_1 = require("../../tools/tools");
var SDescribeApiGroup_1 = require("./SDescribeApiGroup");
/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-24 13:39:48
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-24 14:11:54
 */
var SModifyApiGroup = /** @class */ (function () {
    function SModifyApiGroup(AccessKeyID, AccessKeySecret, props) {
        this.access = {
            AccessKeyID: AccessKeyID,
            AccessKeySecret: AccessKeySecret,
        };
        this.props = props;
    }
    SModifyApiGroup.prototype.modifyApiGroupAndApis = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modifyApiGroupRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modifyApiGroup()];
                    case 1:
                        modifyApiGroupRes = _a.sent();
                        if (!modifyApiGroupRes.responseStatus)
                            return [2 /*return*/, {
                                    responseStatus: false,
                                    error: modifyApiGroupRes.error
                                }
                                //更新apis
                            ];
                        //更新apis
                        return [2 /*return*/, {
                                responseStatus: true
                            }];
                }
            });
        });
    };
    SModifyApiGroup.prototype.modifyApiGroup = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var sdescribeApiGroup, apiGroupsDescrib, groupId, client, modifyApiGroupRequest, runtime;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        sdescribeApiGroup = new SDescribeApiGroup_1.SDescribeApiGroup({
                            access: this.access,
                            groupName: this.props.groupName,
                            region: this.props.region
                        });
                        return [4 /*yield*/, sdescribeApiGroup.describeApiGroups()];
                    case 1:
                        apiGroupsDescrib = _c.sent();
                        if (!apiGroupsDescrib.responseStatus)
                            return [2 /*return*/, {
                                    responseStatus: false,
                                    error: apiGroupsDescrib.error
                                }];
                        if (((_a = apiGroupsDescrib.apiGroupAttributes.apiGroupAttribute[0]) === null || _a === void 0 ? void 0 : _a.groupName) !==
                            this.props.groupName)
                            return [2 /*return*/, {
                                    responseStatus: false,
                                    error: 'no this apiGroup 无该api组',
                                }];
                        groupId = (_b = apiGroupsDescrib.apiGroupAttributes.apiGroupAttribute[0]) === null || _b === void 0 ? void 0 : _b.groupId;
                        this.setGroupId(groupId);
                        client = ClientInit_1.ClientInit.createClient(this.access.AccessKeyID, this.access.AccessKeySecret, this.props.region);
                        modifyApiGroupRequest = new $CloudAPI20160714.ModifyApiGroupRequest({
                            groupId: groupId,
                            basePath: this.props.basePath,
                            description: this.props.description || "",
                            instanceId: this.props.instanceId,
                            defaultDomain: this.props.defaultDomain
                        });
                        runtime = new $Util.RuntimeOptions({});
                        return [4 /*yield*/, (0, tools_1.handleClientRequst)(client, 'modifyApiGroupWithOptions', modifyApiGroupRequest, runtime)];
                    case 2: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    SModifyApiGroup.prototype.setGroupId = function (groupId) {
        this.groupId = groupId;
    };
    return SModifyApiGroup;
}());
exports.SModifyApiGroup = SModifyApiGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU01vZGlmeUFwaUdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnQvYXBpR3JvdXBzL1NNb2RpZnlBcGlHcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDRFQUErRDtBQUMvRCx3REFBMkM7QUFDM0MsNENBQTBDO0FBQzFDLDJDQUFzRDtBQUN0RCx5REFBdUQ7QUFFdkQ7Ozs7OztHQU1HO0FBQ0g7SUFJRSx5QkFBWSxXQUFtQixFQUFFLGVBQXVCLEVBQUUsS0FBSztRQUM3RCxJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osV0FBVyxhQUFBO1lBQ1gsZUFBZSxpQkFBQTtTQUNoQixDQUFBO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDcEIsQ0FBQztJQUNLLCtDQUFxQixHQUEzQjs7Ozs7NEJBRTRCLHFCQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBQTs7d0JBQS9DLGlCQUFpQixHQUFHLFNBQTJCO3dCQUNyRCxJQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYzs0QkFBRSxzQkFBTztvQ0FDekMsY0FBYyxFQUFFLEtBQUs7b0NBQ3JCLEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxLQUFLO2lDQUNqQztnQ0FDRCxRQUFROzhCQURQO3dCQUNELFFBQVE7d0JBQ1Isc0JBQU87Z0NBQ0gsY0FBYyxFQUFFLElBQUk7NkJBQ3ZCLEVBQUE7Ozs7S0FDRjtJQUNLLHdDQUFjLEdBQXBCOzs7Ozs7O3dCQUNRLGlCQUFpQixHQUFHLElBQUkscUNBQWlCLENBQUM7NEJBQzVDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTs0QkFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUzs0QkFDL0IsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTt5QkFDNUIsQ0FBQyxDQUFBO3dCQUN1QixxQkFBTSxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxFQUFBOzt3QkFBOUQsZ0JBQWdCLEdBQUcsU0FBMkM7d0JBQ3BFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjOzRCQUFFLHNCQUFPO29DQUN6QyxjQUFjLEVBQUUsS0FBSztvQ0FDckIsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEtBQUs7aUNBQ2hDLEVBQUE7d0JBQ0QsSUFDRSxDQUFBLE1BQUEsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFNBQVM7NEJBQ25FLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUzs0QkFFdEIsc0JBQU87b0NBQ1AsY0FBYyxFQUFFLEtBQUs7b0NBQ3JCLEtBQUssRUFBRSx5QkFBeUI7aUNBQy9CLEVBQUE7d0JBQ0ssT0FBTyxHQUNYLE1BQUEsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLDBDQUFFLE9BQU8sQ0FBQTt3QkFDbkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQTt3QkFFcEIsTUFBTSxHQUFHLHVCQUFVLENBQUMsWUFBWSxDQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUNsQixDQUFBO3dCQUNHLHFCQUFxQixHQUFHLElBQUksaUJBQWlCLENBQUMscUJBQXFCLENBQUM7NEJBQ3BFLE9BQU8sU0FBQTs0QkFDUCxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFROzRCQUM3QixXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLElBQUksRUFBRTs0QkFDekMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTs0QkFDakMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYTt5QkFDMUMsQ0FBQyxDQUFBO3dCQUNFLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUE7d0JBQ25DLHFCQUFNLElBQUEsMEJBQWtCLEVBQzdCLE1BQU0sRUFDTiwyQkFBMkIsRUFDM0IscUJBQXFCLEVBQ3JCLE9BQU8sQ0FDUixFQUFBOzRCQUxELHNCQUFPLFNBS04sRUFBQTs7OztLQUNGO0lBQ0Qsb0NBQVUsR0FBVixVQUFXLE9BQWM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7SUFDeEIsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQXJFRCxJQXFFQztBQXJFWSwwQ0FBZSJ9