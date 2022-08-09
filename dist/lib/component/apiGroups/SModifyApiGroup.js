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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
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
var store_1 = __importDefault(require("../store"));
var SSetDomain_1 = require("./SSetDomain");
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
            var modifyApiGroupRes, sSetDomain, sSetDomainRes, sdescribeApiGroups, moreApiGroupsDescrib, stages, sDescribeApis, apis, pageIndex, totalCount, apisDescrib, sabolishApi, batchAbolishApisRes, smodifyApi, newApis, _loop_1, this_1, i, state_1, deployApisRes;
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
                                }];
                        if (!this.props.custom_domain) return [3 /*break*/, 3];
                        sSetDomain = new SSetDomain_1.SSetDomain({
                            access: this.access,
                            region: this.props.region,
                            groupId: this.groupId,
                            DomainName: this.props.custom_domain
                        });
                        return [4 /*yield*/, sSetDomain.setDomain()];
                    case 2:
                        sSetDomainRes = _a.sent();
                        if (!sSetDomainRes.responseStatus) {
                            tools_1.Slogger.info('绑定域名失败:', sSetDomainRes.error);
                            return [2 /*return*/];
                        }
                        store_1.default.setCustom("http://".concat(this.props.custom_domain));
                        _a.label = 3;
                    case 3:
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
                    case 4:
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
                        _a.label = 5;
                    case 5:
                        if (!(pageIndex * 10 < totalCount)) return [3 /*break*/, 7];
                        return [4 /*yield*/, sDescribeApis.describeApis(pageIndex)];
                    case 6:
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
                        return [3 /*break*/, 5];
                    case 7:
                        //批量下线api
                        tools_1.Slogger.info('批量下线api...');
                        sabolishApi = new SAbolishApi_1.SAbolishApi({
                            access: this.access,
                            region: this.props.region,
                            apis: apis,
                        });
                        return [4 /*yield*/, sabolishApi.batchAbolishApis()];
                    case 8:
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
                        return [4 /*yield*/, (0, tools_1.blockProcess)()];
                    case 9:
                        //如果远程中能匹配到，执行修改，否则执行新建发布
                        _a.sent();
                        tools_1.Slogger.info('修改api...');
                        newApis = [];
                        _loop_1 = function (i) {
                            var j, smodifyApiRs, screateApi, createsApiRes;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        j = apis.findIndex(function (item) { return item.apiName === _this.props.apis[i].apiName; });
                                        if (!(j !== -1)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, smodifyApi.modifyApi(apis[j].apiUid, this_1.props.apis[i])];
                                    case 1:
                                        smodifyApiRs = _b.sent();
                                        if (!smodifyApiRs.responseStatus)
                                            return [2 /*return*/, { value: {
                                                        responseStatus: false,
                                                        error: smodifyApiRs.error
                                                    } }];
                                        newApis = newApis.concat({
                                            groupId: this_1.groupId,
                                            apiUid: apis[j].apiUid
                                        });
                                        return [3 /*break*/, 4];
                                    case 2:
                                        tools_1.Slogger.info('创建新API');
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
                        _a.label = 10;
                    case 10:
                        if (!(i < this.props.apis.length)) return [3 /*break*/, 13];
                        return [5 /*yield**/, _loop_1(i)];
                    case 11:
                        state_1 = _a.sent();
                        if (typeof state_1 === "object")
                            return [2 /*return*/, state_1.value];
                        _a.label = 12;
                    case 12:
                        i++;
                        return [3 /*break*/, 10];
                    case 13:
                        //发布apis
                        tools_1.Slogger.info('批量发布api...');
                        return [4 /*yield*/, new SDeployApi_1.SDeployApi({
                                stageName: declaration_1.ApiStageName.RELEASE,
                                apis: newApis,
                                access: this.access,
                                region: this.props.region
                            }).batchDeployApis()];
                    case 14:
                        deployApisRes = _a.sent();
                        if (deployApisRes.responseStatus) {
                            tools_1.Slogger.info('发布成功。');
                            // Slogger.info('发布成功。', `使用 http://${this.subDomain+(this.props.basePath || '')} 拼接api请求path作为api网关访问地址`)
                            store_1.default.setDomain("http://".concat(this.subDomain + (this.props.basePath || '')));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU01vZGlmeUFwaUdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnQvYXBpR3JvdXBzL1NNb2RpZnlBcGlHcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE4RTtBQUM5RSw0RUFBK0Q7QUFDL0Qsd0RBQTJDO0FBQzNDLDRDQUEwQztBQUMxQywyQ0FBNkU7QUFDN0UseURBQXVEO0FBQ3ZELDZEQUEyRDtBQUMzRCx5REFBdUQ7QUFDdkQsdURBQXFEO0FBQ3JELHVEQUFxRDtBQUNyRCx1REFBcUQ7QUFDckQsbURBQTZCO0FBQzdCLDJDQUF5QztBQUN6QztJQUtFLHlCQUFZLFdBQW1CLEVBQUUsZUFBdUIsRUFBRSxLQUFLO1FBQzdELElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDWixXQUFXLGFBQUE7WUFDWCxlQUFlLGlCQUFBO1NBQ2hCLENBQUE7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtJQUNwQixDQUFDO0lBQ0ssK0NBQXFCLEdBQTNCOzs7Ozs7O3dCQUNFLFFBQVE7d0JBQ1IsZUFBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTt3QkFDQSxxQkFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUE7O3dCQUEvQyxpQkFBaUIsR0FBRyxTQUEyQjt3QkFDckQsSUFBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWM7NEJBQUUsc0JBQU87b0NBQ3pDLGNBQWMsRUFBRSxLQUFLO29DQUNyQixLQUFLLEVBQUUsaUJBQWlCLENBQUMsS0FBSztpQ0FDakMsRUFBQTs2QkFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBeEIsd0JBQXdCO3dCQUNuQixVQUFVLEdBQUcsSUFBSSx1QkFBVSxDQUFDOzRCQUM5QixNQUFNLEVBQUUsSUFBSSxDQUFD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