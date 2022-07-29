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
var declaration_1 = require("../../declaration");
var $CloudAPI20160714 = __importStar(require("@alicloud/cloudapi20160714"));
var $Util = __importStar(require("@alicloud/tea-util"));
var ClientInit_1 = require("../ClientInit");
var tools_1 = require("../../tools/tools");
var SDescribeApiGroup_1 = require("./SDescribeApiGroup");
var SDescribeApis_1 = require("../apiGateway/SDescribeApis");
var SAbolishApi_1 = require("../apiGateway/SAbolishApi");
var SDeployApi_1 = require("../apiGateway/SDeployApi");
var SModifyApi_1 = require("../apiGateway/SModifyApi");
var SCreateApi_1 = require("../apiGateway/SCreateApi");
/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-24 13:39:48
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-27 00:17:01
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
            var modifyApiGroupRes, sdescribeApiGroups, moreApiGroupsDescrib, stages, sDescribeApis, apis, pageIndex, totalCount, apisDescrib, sabolishApi, batchAbolishApisRes, smodifyApi, newApis, _loop_1, this_1, i, state_1, deployApisRes;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //更新api组
                        tools_1.Slogger.info('修改api组中...');
                        return [4 /*yield*/, this.modifyApiGroup()];
                    case 1:
                        modifyApiGroupRes = _a.sent();
                        if (!modifyApiGroupRes.responseStatus)
                            return [2 /*return*/, {
                                    responseStatus: false,
                                    error: modifyApiGroupRes.error
                                }
                                //查询api组id
                            ];
                        //查询api组id
                        tools_1.Slogger.info('查询线上api组中...');
                        sdescribeApiGroups = new SDescribeApiGroup_1.SDescribeApiGroup({
                            access: this.access,
                            region: this.props.region,
                            groupName: this.props.groupName,
                        });
                        tools_1.Slogger.info('查询线上环境中...');
                        //查询api组详情从而获得StageId 运行环境id
                        sdescribeApiGroups.setGroupId(this.groupId);
                        return [4 /*yield*/, sdescribeApiGroups.describeApiGroup()];
                    case 2:
                        moreApiGroupsDescrib = _a.sent();
                        if (!moreApiGroupsDescrib.responseStatus)
                            return [2 /*return*/, {
                                    responseStatus: false,
                                    error: moreApiGroupsDescrib.error
                                }];
                        stages = moreApiGroupsDescrib.stageItems.stageInfo;
                        this.subDomain = moreApiGroupsDescrib.subDomain;
                        //查询api列表id
                        tools_1.Slogger.info('查询Api列表...');
                        sDescribeApis = new SDescribeApis_1.SDescribeApis({
                            access: this.access,
                            region: this.props.region,
                            groupId: this.groupId,
                        });
                        apis = [];
                        pageIndex = 0, totalCount = 1;
                        _a.label = 3;
                    case 3:
                        if (!(pageIndex * 10 < totalCount)) return [3 /*break*/, 5];
                        return [4 /*yield*/, sDescribeApis.describeApis(pageIndex)];
                    case 4:
                        apisDescrib = _a.sent();
                        totalCount = apisDescrib.totalCount;
                        if (!apisDescrib.responseStatus)
                            return [2 /*return*/, {
                                    responseStatus: false,
                                    error: apisDescrib.error
                                }];
                        apis = apis.concat(apisDescrib.apiSummarys.apiSummary.map(function (item) { return ({
                            apiUid: item.apiId,
                            apiName: item.apiName,
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
                        batchAbolishApisRes = _a.sent();
                        if (!batchAbolishApisRes.responseStatus)
                            return [2 /*return*/, {
                                    responseStatus: false,
                                    error: batchAbolishApisRes.error
                                }
                                //更新apis
                            ];
                        smodifyApi = new SModifyApi_1.SModifyApi({
                            access: this.access,
                            region: this.props.region,
                            groupId: this.groupId,
                        });
                        //如果远程中能匹配到，执行修改，否则执行新建发布
                        tools_1.Slogger.info('修改api...');
                        newApis = [];
                        _loop_1 = function (i) {
                            var smodifyApiRs, screateApi, createsApiRes;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (!apis.some(function (item) { return item.apiName === _this.props.apis[i].apiName; })) return [3 /*break*/, 2];
                                        return [4 /*yield*/, smodifyApi.modifyApi(apis[i].apiUid, this_1.props.apis[i])];
                                    case 1:
                                        smodifyApiRs = _b.sent();
                                        if (!smodifyApiRs.responseStatus)
                                            return [2 /*return*/, { value: {
                                                        responseStatus: false,
                                                        error: smodifyApiRs.error
                                                    } }];
                                        newApis = newApis.concat({
                                            groupId: this_1.groupId,
                                            apiUid: apis[i].apiUid
                                        });
                                        return [3 /*break*/, 4];
                                    case 2:
                                        screateApi = new SCreateApi_1.SCreateApi({
                                            access: this_1.access,
                                            region: this_1.props.region,
                                            groupId: this_1.groupId,
                                            api: this_1.props.apis[i]
                                        });
                                        return [4 /*yield*/, screateApi.createApiByConfig()];
                                    case 3:
                                        createsApiRes = _b.sent();
                                        if (!createsApiRes.responseStatus)
                                            return [2 /*return*/, { value: {
                                                        responseStatus: false,
                                                        error: createsApiRes.error
                                                    } }];
                                        newApis = newApis.concat({
                                            groupId: this_1.groupId,
                                            apiUid: createsApiRes.apiId
                                        });
                                        _b.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0;
                        _a.label = 7;
                    case 7:
                        if (!(i < this.props.apis.length)) return [3 /*break*/, 10];
                        return [5 /*yield**/, _loop_1(i)];
                    case 8:
                        state_1 = _a.sent();
                        if (typeof state_1 === "object")
                            return [2 /*return*/, state_1.value];
                        _a.label = 9;
                    case 9:
                        i++;
                        return [3 /*break*/, 7];
                    case 10:
                        //发布apis
                        tools_1.Slogger.info('批量发布api...');
                        return [4 /*yield*/, new SDeployApi_1.SDeployApi({
                                stageName: declaration_1.ApiStageName.RELEASE,
                                apis: newApis,
                                access: this.access,
                                region: this.props.region
                            }).batchDeployApis()];
                    case 11:
                        deployApisRes = _a.sent();
                        if (deployApisRes.responseStatus) {
                            tools_1.Slogger.info('发布成功。', "\u4F7F\u7528 http(s)://".concat(this.subDomain + (this.props.basePath || ''), " \u62FC\u63A5api\u8BF7\u6C42path\u4F5C\u4E3Aapi\u7F51\u5173\u8BBF\u95EE\u5730\u5740"));
                        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU01vZGlmeUFwaUdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnQvYXBpR3JvdXBzL1NNb2RpZnlBcGlHcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE4RTtBQUM5RSw0RUFBK0Q7QUFDL0Qsd0RBQTJDO0FBQzNDLDRDQUEwQztBQUMxQywyQ0FBK0Q7QUFDL0QseURBQXVEO0FBQ3ZELDZEQUEyRDtBQUMzRCx5REFBdUQ7QUFDdkQsdURBQXFEO0FBQ3JELHVEQUFxRDtBQUNyRCx1REFBcUQ7QUFFckQ7Ozs7OztHQU1HO0FBQ0g7SUFLRSx5QkFBWSxXQUFtQixFQUFFLGVBQXVCLEVBQUUsS0FBSztRQUM3RCxJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osV0FBVyxhQUFBO1lBQ1gsZUFBZSxpQkFBQTtTQUNoQixDQUFBO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDcEIsQ0FBQztJQUNLLCtDQUFxQixHQUEzQjs7Ozs7Ozt3QkFDRSxRQUFRO3dCQUNSLGVBQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7d0JBQ0EscUJBQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFBOzt3QkFBL0MsaUJBQWlCLEdBQUcsU0FBMkI7d0JBQ3JELElBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjOzRCQUFFLHNCQUFPO29DQUN6QyxjQUFjLEVBQUUsS0FBSztvQ0FDckIsS0FBSyxFQUFFLGlCQUFpQixDQUFDLEtBQUs7aUNBQ2pDO2dDQUNELFVBQVU7OEJBRFQ7d0JBQ0QsVUFBVTt3QkFDVixlQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO3dCQUN0QixrQkFBa0IsR0FBRyxJQUFJLHFDQUFpQixDQUFDOzRCQUMvQyxNQUFNLEVBQUUs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