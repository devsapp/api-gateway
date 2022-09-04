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
var SDeployApi_1 = require("../apiGateway/SDeployApi");
var SModifyApi_1 = require("../apiGateway/SModifyApi");
var SCreateApi_1 = require("../apiGateway/SCreateApi");
var store_1 = __importDefault(require("../store"));
var SSetDomain_1 = require("../domain/SSetDomain");
var core_1 = require("@serverless-devs/core");
var utils_1 = require("../../utils");
var SDescribeDomain_1 = require("../domain/SDescribeDomain");
var SModifyApiGroup = /** @class */ (function () {
    function SModifyApiGroup(AccessKeyID, AccessKeySecret, props) {
        this.access = {
            AccessKeyID: AccessKeyID,
            AccessKeySecret: AccessKeySecret,
        };
        this.props = props;
    }
    SModifyApiGroup.prototype.modifyApiGroupAndApis = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var modifyApiGroupRes, custom_domain, sDescribeDomain, sDescribeDomainRes, sSetDomain, sSetDomainRes, sdescribeApiGroups, moreApiGroupsDescrib, stages, sDescribeApis, apis, pageIndex, totalCount, apisDescrib, apiSummary, smodifyApi, newApis, _loop_1, this_1, i, state_1, deployApisRes;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.modifyApiGroup()];
                    case 1:
                        modifyApiGroupRes = _b.sent();
                        if (!modifyApiGroupRes.responseStatus)
                            return [2 /*return*/, {
                                    responseStatus: false,
                                    error: modifyApiGroupRes.error
                                }];
                        custom_domain = (_a = this.props.custom_domain) === null || _a === void 0 ? void 0 : _a.trim();
                        if (store_1.default.isRomote())
                            return [2 /*return*/, {
                                    responseStatus: true,
                                    remote: true
                                }];
                        if (!custom_domain) return [3 /*break*/, 6];
                        core_1.Logger.debug('修改分组', '绑定域名');
                        sDescribeDomain = new SDescribeDomain_1.SDescribeDomain({
                            access: this.access,
                            region: this.props.region,
                            groupId: this.groupId,
                            domainName: custom_domain
                        });
                        return [4 /*yield*/, sDescribeDomain.describeDomain()];
                    case 2:
                        sDescribeDomainRes = _b.sent();
                        if (!sDescribeDomainRes.responseStatus) {
                            tools_1.Slogger.error('绑定域名失败:', sDescribeDomainRes.error);
                            return [2 /*return*/, {
                                    responseStatus: false,
                                    error: '发生错误提前结束'
                                }];
                        }
                        if (!!(sDescribeDomainRes.DomainBindingStatus === 'BINDING')) return [3 /*break*/, 4];
                        return [4 /*yield*/, (0, utils_1.inquirerRemote)()];
                    case 3:
                        _b.sent();
                        if (store_1.default.isRomote())
                            return [2 /*return*/, {
                                    responseStatus: true,
                                    remote: true
                                }];
                        _b.label = 4;
                    case 4:
                        sSetDomain = new SSetDomain_1.SSetDomain({
                            access: this.access,
                            region: this.props.region,
                            groupId: this.groupId,
                            domainName: custom_domain
                        });
                        return [4 /*yield*/, sSetDomain.setDomain()];
                    case 5:
                        sSetDomainRes = _b.sent();
                        if (!sSetDomainRes.responseStatus) {
                            tools_1.Slogger.error('绑定域名失败:', sSetDomainRes.error);
                            return [2 /*return*/, {
                                    responseStatus: false,
                                    error: '发生错误提前结束'
                                }];
                        }
                        store_1.default.setCustom("http://".concat(custom_domain));
                        core_1.Logger.debug('修改分组', '绑定域名完成');
                        _b.label = 6;
                    case 6:
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
                    case 7:
                        moreApiGroupsDescrib = _b.sent();
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
                        _b.label = 8;
                    case 8:
                        if (!(pageIndex * 10 < totalCount)) return [3 /*break*/, 10];
                        return [4 /*yield*/, sDescribeApis.describeApis(pageIndex)];
                    case 9:
                        apisDescrib = _b.sent();
                        totalCount = apisDescrib.totalCount;
                        if (!apisDescrib.responseStatus)
                            return [2 /*return*/, {
                                    responseStatus: false,
                                    error: apisDescrib.error
                                }];
                        apiSummary = apisDescrib.apiSummarys ? apisDescrib.apiSummarys.apiSummary : [];
                        apis = apis.concat(apiSummary.map(function (item) { return ({
                            apiUid: item.apiId,
                            apiName: item.apiName,
                            groupId: item.groupId,
                            stages: stages,
                        }); }));
                        pageIndex++;
                        return [3 /*break*/, 8];
                    case 10:
                        smodifyApi = new SModifyApi_1.SModifyApi({
                            access: this.access,
                            region: this.props.region,
                            groupId: this.groupId,
                        });
                        //如果远程中能匹配到，执行修改，否则执行新建发布
                        return [4 /*yield*/, (0, tools_1.blockProcess)()];
                    case 11:
                        //如果远程中能匹配到，执行修改，否则执行新建发布
                        _b.sent();
                        newApis = [];
                        _loop_1 = function (i) {
                            var j, smodifyApiRs, screateApi, createsApiRes;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        if (store_1.default.isRomote())
                                            return [2 /*return*/, { value: {
                                                        responseStatus: true,
                                                        remote: true
                                                    } }];
                                        j = apis.findIndex(function (item) { return item.apiName === _this.props.apis[i].apiName; });
                                        if (!(j !== -1)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, smodifyApi.modifyApi(apis[j].apiUid, this_1.props.apis[i], apis[j].stages)];
                                    case 1:
                                        smodifyApiRs = _c.sent();
                                        if (!smodifyApiRs.responseStatus)
                                            return [2 /*return*/, { value: {
                                                        responseStatus: false,
                                                        error: smodifyApiRs.error
                                                    } }];
                                        if (smodifyApiRs.remote)
                                            return [2 /*return*/, "continue"];
                                        newApis = newApis.concat({
                                            groupId: this_1.groupId,
                                            apiUid: apis[j].apiUid
                                        });
                                        return [3 /*break*/, 5];
                                    case 2: return [4 /*yield*/, (0, utils_1.inquirerRemote)()];
                                    case 3:
                                        _c.sent();
                                        if (store_1.default.isRomote())
                                            return [2 /*return*/, { value: {
                                                        responseStatus: true,
                                                        remote: true
                                                    } }];
                                        tools_1.Slogger.info('创建新API');
                                        screateApi = new SCreateApi_1.SCreateApi({
                                            access: this_1.access,
                                            region: this_1.props.region,
                                            groupId: this_1.groupId,
                                            api: this_1.props.apis[i]
                                        });
                                        return [4 /*yield*/, screateApi.createApiByConfig()];
                                    case 4:
                                        createsApiRes = _c.sent();
                                        if (!createsApiRes.responseStatus)
                                            return [2 /*return*/, { value: {
                                                        responseStatus: false,
                                                        error: createsApiRes.error
                                                    } }];
                                        newApis = newApis.concat({
                                            groupId: this_1.groupId,
                                            apiUid: createsApiRes.apiId
                                        });
                                        _c.label = 5;
                                    case 5: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0;
                        _b.label = 12;
                    case 12:
                        if (!(i < this.props.apis.length)) return [3 /*break*/, 15];
                        return [5 /*yield**/, _loop_1(i)];
                    case 13:
                        state_1 = _b.sent();
                        if (typeof state_1 === "object")
                            return [2 /*return*/, state_1.value];
                        _b.label = 14;
                    case 14:
                        i++;
                        return [3 /*break*/, 12];
                    case 15:
                        newApis.forEach(function (item) {
                            tools_1.Slogger.debug('需要发布的api', item);
                        });
                        // 无需发布api
                        if (newApis.length === 0) {
                            tools_1.Slogger.info('无需修改远程分组');
                            store_1.default.setDomain("http://".concat(this.subDomain + (this.props.basePath || '')));
                            return [2 /*return*/, {
                                    responseStatus: true
                                }];
                        }
                        //发布apis
                        tools_1.Slogger.info('批量发布api...');
                        return [4 /*yield*/, new SDeployApi_1.SDeployApi({
                                stageName: declaration_1.ApiStageName.RELEASE,
                                apis: newApis,
                                access: this.access,
                                region: this.props.region
                            }).batchDeployApis()];
                    case 16:
                        deployApisRes = _b.sent();
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
            var sdescribeApiGroup, apiGroupsDescrib, haveDiff, remoteConifg, key, groupId, client, modifyApiGroupRequest, runtime;
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
                            this.props.groupName) {
                            throw new core_1.CatchableError('不存在该分组');
                        }
                        haveDiff = false, remoteConifg = apiGroupsDescrib.apiGroupAttributes.apiGroupAttribute[0];
                        for (key in remoteConifg) {
                            if (remoteConifg[key] === '')
                                remoteConifg[key] = null;
                            if (this.props[key] && remoteConifg[key] !== this.props[key]) {
                                haveDiff = true;
                                break;
                            }
                        }
                        groupId = (_b = apiGroupsDescrib.apiGroupAttributes.apiGroupAttribute[0]) === null || _b === void 0 ? void 0 : _b.groupId;
                        this.setGroupId(groupId);
                        if (!haveDiff)
                            return [2 /*return*/, {
                                    responseStatus: true,
                                    remote: true
                                }];
                        return [4 /*yield*/, (0, utils_1.inquirerRemote)()];
                    case 2:
                        _c.sent();
                        if (store_1.default.isRomote())
                            return [2 /*return*/, {
                                    responseStatus: true,
                                    remote: true
                                }];
                        tools_1.Slogger.info('修改api组中...');
                        client = ClientInit_1.ClientInit.createClient(this.access.AccessKeyID, this.access.AccessKeySecret, this.props.region);
                        modifyApiGroupRequest = new $CloudAPI20160714.ModifyApiGroupRequest({
                            groupId: groupId,
                            basePath: this.props.basePath,
                            description: this.props.description || "",
                            instanceId: this.props.instanceId,
                            custom_domain: this.props.custom_domain
                        });
                        runtime = new $Util.RuntimeOptions({});
                        return [4 /*yield*/, (0, tools_1.handleClientRequst)(client, 'modifyApiGroupWithOptions', modifyApiGroupRequest, runtime)];
                    case 3: return [2 /*return*/, _c.sent()];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU01vZGlmeUFwaUdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnQvYXBpR3JvdXBzL1NNb2RpZnlBcGlHcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE4RTtBQUM5RSw0RUFBK0Q7QUFDL0Qsd0RBQTJDO0FBQzNDLDRDQUEwQztBQUMxQywyQ0FBNkU7QUFDN0UseURBQXVEO0FBQ3ZELDZEQUEyRDtBQUMzRCx1REFBcUQ7QUFDckQsdURBQXFEO0FBQ3JELHVEQUFxRDtBQUNyRCxtREFBNkI7QUFDN0IsbURBQWlEO0FBQ2pELDhDQUE4RDtBQUM5RCxxQ0FBNEM7QUFDNUMsNkRBQTJEO0FBQzNEO0lBS0UseUJBQVksV0FBbUIsRUFBRSxlQUF1QixFQUFFLEtBQUs7UUFDN0QsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLFdBQVcsYUFBQTtZQUNYLGVBQWUsaUJBQUE7U0FDaEIsQ0FBQTtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0lBQ3BCLENBQUM7SUFDSywrQ0FBcUIsR0FBM0I7Ozs7Ozs7NEJBRTRCLHFCQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBQTs7d0JBQS9DLGlCQUFpQixHQUFHLFNBQTJCO3dCQUNyRCxJQUFHLENBQUMsaUJBQWlCLENBQUMsY0FBYzs0QkFBRSxzQkFBTztvQ0FDekMsY0FBYyxFQUFFLEtBQUs7b0NBQ3JCLEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxLQUFLO2lDQUNqQyxFQUFBO3dCQUNLLGFBQWEsR0FBSSxNQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSwwQ0FBRSxJQUFJLEVBQUUsQ0FBQTt3QkFDdkQsSUFBRyxlQUFNLENBQUMsUUFBUSxFQUFFOzRCQUFFLHNCQUFPO29DQUMzQixjQUFjLEVBQUUs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