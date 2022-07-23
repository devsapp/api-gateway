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
exports.SDeleteApiGroup = void 0;
var SAbolishApi_1 = require("../apiGateway/SAbolishApi");
var SDeleteApi_1 = require("../apiGateway/SDeleteApi");
var SDescribeApis_1 = require("../apiGateway/SDescribeApis");
var SDescribeApiGroup_1 = require("./SDescribeApiGroup");
var $CloudAPI20160714 = __importStar(require("@alicloud/cloudapi20160714"));
var $Util = __importStar(require("@alicloud/tea-util"));
var ClientInit_1 = require("../ClientInit");
var tools_1 = require("../../tools/tools");
/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-20 00:15:11
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-21 23:49:37
 */
var SDeleteApiGroup = /** @class */ (function () {
    function SDeleteApiGroup(AccessKeyID, AccessKeySecret, props) {
        this.access = {
            AccessKeyID: AccessKeyID,
            AccessKeySecret: AccessKeySecret,
        };
        this.props = props;
    }
    /**
     * @description 删除api组
     */
    SDeleteApiGroup.prototype.deleteApiGroup = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var sdescribeApiGroups, apiGroupsDescrib, groupId, moreApiGroupsDescrib, stages, sDescribeApis, apis, pageIndex, totalCount, apisDescrib, sabolishApi, batchAbolishApisRes, sDeleteApis, deleteApisRes, client, deleteApiGroupRequest, runtime;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        //查询api组id
                        tools_1.Slogger.info('查询线上api组中...');
                        sdescribeApiGroups = new SDescribeApiGroup_1.SDescribeApiGroup({
                            access: this.access,
                            region: this.props.region,
                            groupName: this.props.groupName,
                        });
                        return [4 /*yield*/, sdescribeApiGroups.describeApiGroups()];
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
                                    responseStatus: true,
                                    error: 'no this apiGroup 无该api组',
                                }];
                        groupId = (_b = apiGroupsDescrib.apiGroupAttributes.apiGroupAttribute[0]) === null || _b === void 0 ? void 0 : _b.groupId;
                        tools_1.Slogger.info('查询线上环境中...');
                        //查询api组详情从而获得StageId 运行环境id
                        sdescribeApiGroups.setGroupId(groupId);
                        return [4 /*yield*/, sdescribeApiGroups.describeApiGroup()];
                    case 2:
                        moreApiGroupsDescrib = _c.sent();
                        if (!moreApiGroupsDescrib.responseStatus)
                            return [2 /*return*/, {
                                    responseStatus: false,
                                    error: moreApiGroupsDescrib.error
                                }];
                        stages = moreApiGroupsDescrib.stageItems.stageInfo;
                        //查询api列表id
                        tools_1.Slogger.info('查询Api列表...');
                        sDescribeApis = new SDescribeApis_1.SDescribeApis({
                            access: this.access,
                            region: this.props.region,
                            groupId: groupId,
                        });
                        apis = [];
                        pageIndex = 0, totalCount = 1;
                        _c.label = 3;
                    case 3:
                        if (!(pageIndex * 10 < totalCount)) return [3 /*break*/, 5];
                        return [4 /*yield*/, sDescribeApis.describeApis(pageIndex)];
                    case 4:
                        apisDescrib = _c.sent();
                        totalCount = apisDescrib.totalCount;
                        if (!apisDescrib.responseStatus)
                            return [2 /*return*/, {
                                    responseStatus: false,
                                    error: apisDescrib.error
                                }];
                        apis = apis.concat(apisDescrib.apiSummarys.apiSummary.map(function (item) { return ({
                            apiUid: item.apiId,
                            groupId: item.groupId,
                            stages: stages,
                        }); }));
                        pageIndex++;
                        return [3 /*break*/, 3];
                    case 5:
                        //批量下线api
                        tools_1.Slogger.info('批量下线api...');
                        sabolishApi = new SAbolishApi_1.SAbolishApi({
                            access: this.access,
                            region: this.props.region,
                            apis: apis,
                        });
                        return [4 /*yield*/, sabolishApi.batchAbolishApis()];
                    case 6:
                        batchAbolishApisRes = _c.sent();
                        if (!batchAbolishApisRes.responseStatus)
                            return [2 /*return*/, {
                                    responseStatus: false,
                                    error: batchAbolishApisRes.error
                                }
                                //批量删除api
                            ];
                        //批量删除api
                        tools_1.Slogger.info('批量删除api...');
                        apis = apis.map(function (item) { return ({
                            apiId: item.apiUid,
                            groupId: item.groupId,
                        }); });
                        sDeleteApis = new SDeleteApi_1.SDeleteApi({
                            access: this.access,
                            region: this.props.region,
                            apis: apis,
                        });
                        return [4 /*yield*/, sDeleteApis.deleteApis()];
                    case 7:
                        deleteApisRes = _c.sent();
                        if (!deleteApisRes.responseStatus)
                            return [2 /*return*/, {
                                    responseStatus: false,
                                    error: deleteApisRes.error
                                }
                                //删除api组
                            ];
                        //删除api组
                        tools_1.Slogger.info('删除api组...');
                        client = ClientInit_1.ClientInit.createClient(this.access.AccessKeyID, this.access.AccessKeySecret, this.props.region);
                        deleteApiGroupRequest = new $CloudAPI20160714.DeleteApiGroupRequest({
                            groupId: groupId,
                        });
                        runtime = new $Util.RuntimeOptions({});
                        return [4 /*yield*/, (0, tools_1.handleClientRequst)(client, 'deleteApiGroupWithOptions', deleteApiGroupRequest, runtime)];
                    case 8: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    return SDeleteApiGroup;
}());
exports.SDeleteApiGroup = SDeleteApiGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU0RlbGV0ZUFwaUdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnQvYXBpR3JvdXBzL1NEZWxldGVBcGlHcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLHlEQUF1RDtBQUN2RCx1REFBcUQ7QUFDckQsNkRBQTJEO0FBQzNELHlEQUF1RDtBQUN2RCw0RUFBK0Q7QUFDL0Qsd0RBQTJDO0FBQzNDLDRDQUEwQztBQUMxQywyQ0FBK0Q7QUFFL0Q7Ozs7OztHQU1HO0FBQ0g7SUFHRSx5QkFBWSxXQUFtQixFQUFFLGVBQXVCLEVBQUUsS0FBSztRQUM3RCxJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osV0FBVyxhQUFBO1lBQ1gsZUFBZSxpQkFBQTtTQUNoQixDQUFBO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDcEIsQ0FBQztJQUNEOztPQUVHO0lBQ0csd0NBQWMsR0FBcEI7Ozs7Ozs7d0JBQ0UsVUFBVTt3QkFDVixlQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO3dCQUN0QixrQkFBa0IsR0FBRyxJQUFJLHFDQUFpQixDQUFDOzRCQUMvQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07NEJBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07NEJBQ3pCLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7eUJBQ2hDLENBQUMsQ0FBQTt3QkFDdUIscUJBQU0sa0JBQWtCLENBQUMsaUJBQWlCLEVBQUUsRUFBQTs7d0JBQS9ELGdCQUFnQixHQUFHLFNBQTRDO3dCQUNyRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYzs0QkFBRSxzQkFBTztvQ0FDekMsY0FBYyxFQUFFLEtBQUs7b0NBQ3JCLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLO2lDQUNoQyxFQUFBO3dCQUNELElBQ0UsQ0FBQSxNQUFBLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQywwQ0FBRSxTQUFTOzRCQUNuRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7NEJBRXRCLHNCQUFPO29DQUNQLGNBQWMsRUFBRSxJQUFJO29DQUNwQixLQUFLLEVBQUUseUJBQXlCO2lDQUMvQixFQUFBO3dCQUNLLE9BQU8sR0FDWCxNQUFBLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQywwQ0FBRSxPQUFPLENBQUE7d0JBQ25FLGVBQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7d0JBQzFCLDRCQUE0Qjt3QkFDNUIsa0JBQWtCLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFBO3dCQUNULHFCQUFNLGtCQUFrQixDQUFDLGdCQUFnQixFQUFFLEVBQUE7O3dCQUFsRSxvQkFBb0IsR0FBRyxTQUEyQzt3QkFDeEUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWM7NEJBQUUsc0JBQU87b0NBQzdDLGNBQWMsRUFBRSxLQUFLO29DQUNyQixLQUFLLEVBQUUsb0JBQW9CLENBQUMsS0FBSztpQ0FDcEMsRUFBQTt3QkFDSyxNQUFNLEdBQUcsb0JBQW9CLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQTt3QkFDeEQsV0FBVzt3QkFDWCxlQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO3dCQUNwQixhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDOzRCQUN0QyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07NEJBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07NEJBQ3pCLE9BQU8sU0FBQTt5QkFDUixDQUFDLENBQUE7d0JBQ0UsSUFBSSxHQUFHLEVBQUUsQ0FBQTt3QkFDVCxTQUFTLEdBQUcsQ0FBQyxFQUNmLFVBQVUsR0FBRyxDQUFDLENBQUE7Ozs2QkFDVCxDQUFBLFNBQVMsR0FBRyxFQUFFLEdBQUcsVUFBVSxDQUFBO3dCQUNaLHFCQUFNLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUE7O3dCQUF6RCxXQUFXLEdBQUcsU0FBMkM7d0JBQy9ELFVBQVUsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFBO3dCQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWM7NEJBQUUsc0JBQU87b0NBQ3RDLGNBQWMsRUFBRSxLQUFLO29DQUNyQixLQUFLLEVBQUUsV0FBVyxDQUFDLEtBQUs7aUNBQ3pCLEVBQUE7d0JBQ0QsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQ2hCLFdBQVcsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUM7NEJBQzlDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSzs0QkFDbEIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPOzRCQUNyQixNQUFNLFFBQUE7eUJBQ1AsQ0FBQyxFQUo2QyxDQUk3QyxDQUFDLENBQ0osQ0FBQTt3QkFDRCxTQUFTLEVBQUUsQ0FBQTs7O3dCQUViLFNBQVM7d0JBQ1QsZUFBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTt3QkFDcEIsV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBQzs0QkFDbEMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNOzRCQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzRCQUN6QixJQUFJLE1BQUE7eUJBQ0wsQ0FBQyxDQUFBO3dCQUMwQixxQkFBTSxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsRUFBQTs7d0JBQTFELG1CQUFtQixHQUFHLFNBQW9DO3dCQUNoRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYzs0QkFBRSxzQkFBTztvQ0FDNUMsY0FBYyxFQUFFLEtBQUs7b0NBQ3JCLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxLQUFLO2lDQUNuQztnQ0FDRCxTQUFTOzhCQURSO3dCQUNELFNBQVM7d0JBQ1QsZUFBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTt3QkFDMUIsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDOzRCQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07NEJBQ2xCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTzt5QkFDdEIsQ0FBQyxFQUhzQixDQUd0QixDQUFDLENBQUE7d0JBQ0csV0FBVyxHQUFHLElBQUksdUJBQVUsQ0FBQzs0QkFDakMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNOzRCQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzRCQUN6QixJQUFJLE1BQUE7eUJBQ0wsQ0FBQyxDQUFBO3dCQUNvQixxQkFBTSxXQUFXLENBQUMsVUFBVSxFQUFFLEVBQUE7O3dCQUE5QyxhQUFhLEdBQUcsU0FBOEI7d0JBQ3BELElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYzs0QkFBRSxzQkFBTztvQ0FDdEMsY0FBYyxFQUFFLEtBQUs7b0NBQ3JCLEtBQUssRUFBRSxhQUFhLENBQUMsS0FBSztpQ0FDN0I7Z0NBQ0QsUUFBUTs4QkFEUDt3QkFDRCxRQUFRO3dCQUNSLGVBQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7d0JBQ3JCLE1BQU0sR0FBRyx1QkFBVSxDQUFDLFlBQVksQ0FDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FDbEIsQ0FBQTt3QkFDRyxxQkFBcUIsR0FBRyxJQUFJLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDOzRCQUN0RSxPQUFPLFNBQUE7eUJBQ1IsQ0FBQyxDQUFBO3dCQUNFLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUE7d0JBQ25DLHFCQUFNLElBQUEsMEJBQWtCLEVBQzdCLE1BQU0sRUFDTiwyQkFBMkIsRUFDM0IscUJBQXFCLEVBQ3JCLE9BQU8sQ0FDUixFQUFBOzRCQUxELHNCQUFPLFNBS04sRUFBQTs7OztLQUNGO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBckhELElBcUhDO0FBckhZLDBDQUFlIn0=