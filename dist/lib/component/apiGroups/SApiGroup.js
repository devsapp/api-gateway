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
exports.SApiGroup = void 0;
var SCreateApiGroup_1 = __importDefault(require("./SCreateApiGroup"));
var SApiGateway_1 = require("../apiGateway/SApiGateway");
var SDeployApi_1 = require("../apiGateway/SDeployApi");
var declaration_1 = require("../../declaration");
var tools_1 = require("../../tools/tools");
var store_1 = __importDefault(require("../store"));
var SSetDomain_1 = require("../domain/SSetDomain");
var SApiGroup = /** @class */ (function () {
    function SApiGroup(AccessKeyID, AccessKeySecret, props) {
        this.AccessKeyID = AccessKeyID;
        this.AccessKeySecret = AccessKeySecret;
        this.props = props;
    }
    /**
     * @description 一键部署
    */
    SApiGroup.prototype.deploy = function (args) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var sCreateApiGroup, res, groupId, subDomain, custom_domain, sSetDomain, sSetDomainRes, sApiGateway, apis, deployApis, deployApisRes;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        sCreateApiGroup = new SCreateApiGroup_1.default(this.AccessKeyID, this.AccessKeySecret, this.props);
                        return [4 /*yield*/, sCreateApiGroup.createApiGroup()];
                    case 1:
                        res = _b.sent();
                        if (!res.responseStatus) {
                            tools_1.Slogger.error('创建api组失败:', res.error);
                            return [2 /*return*/];
                        }
                        groupId = res.groupId, subDomain = res.subDomain;
                        this.groupId = groupId;
                        this.subDomain = subDomain;
                        tools_1.Slogger.info('创建api组成功: ', {
                            groupName: this.props.groupName,
                            description: this.props.description,
                            groupId: groupId,
                            subDomain: subDomain,
                            basePath: this.props.basePath || '/'
                        });
                        custom_domain = (_a = this.props.custom_domain) === null || _a === void 0 ? void 0 : _a.trim();
                        if (!custom_domain) return [3 /*break*/, 3];
                        sSetDomain = new SSetDomain_1.SSetDomain({
                            access: {
                                AccessKeyID: this.AccessKeyID,
                                AccessKeySecret: this.AccessKeySecret
                            },
                            region: this.props.region,
                            groupId: this.groupId,
                            domainName: custom_domain
                        });
                        return [4 /*yield*/, sSetDomain.setDomain()];
                    case 2:
                        sSetDomainRes = _b.sent();
                        if (!sSetDomainRes.responseStatus) {
                            tools_1.Slogger.error('绑定域名失败:', sSetDomainRes.error);
                            return [2 /*return*/];
                        }
                        store_1.default.setCustom("http://".concat(custom_domain));
                        _b.label = 3;
                    case 3:
                        sApiGateway = new SApiGateway_1.SApiGateway({
                            access: {
                                AccessKeyID: this.AccessKeyID,
                                AccessKeySecret: this.AccessKeySecret
                            },
                            region: this.props.region,
                            groupId: this.groupId,
                            apis: this.props.apis
                        });
                        return [4 /*yield*/, sApiGateway.createApis()
                            // Slogger.info('apis', apis)
                        ];
                    case 4:
                        apis = _b.sent();
                        deployApis = apis.map(function (item) {
                            return {
                                groupId: _this.groupId,
                                apiUid: item.apiId
                            };
                        });
                        if (!apis.length) return [3 /*break*/, 6];
                        tools_1.Slogger.info('正在发布中...');
                        return [4 /*yield*/, new SDeployApi_1.SDeployApi({
                                stageName: declaration_1.ApiStageName.RELEASE,
                                apis: deployApis,
                                access: {
                                    AccessKeyID: this.AccessKeyID,
                                    AccessKeySecret: this.AccessKeySecret
                                },
                                region: this.props.region
                            }).batchDeployApis()];
                    case 5:
                        deployApisRes = _b.sent();
                        if (deployApisRes.responseStatus) {
                            tools_1.Slogger.info('发布成功。');
                            store_1.default.setDomain("http://".concat(this.subDomain + (this.props.basePath || '')));
                        }
                        _b.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return SApiGroup;
}());
exports.SApiGroup = SApiGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU0FwaUdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnQvYXBpR3JvdXBzL1NBcGlHcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxzRUFBZ0Q7QUFDaEQseURBQXdEO0FBQ3hELHVEQUFzRDtBQUN0RCxpREFBaUQ7QUFDakQsMkNBQTRDO0FBQzVDLG1EQUE4QjtBQUM5QixtREFBa0Q7QUFDbEQ7SUFNSSxtQkFBWSxXQUFrQixFQUFFLGVBQXNCLEVBQUUsS0FBSztRQUN6RCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQTtRQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQTtRQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtJQUN0QixDQUFDO0lBQ0Q7O01BRUU7SUFDSSwwQkFBTSxHQUFaLFVBQWEsSUFBZTs7Ozs7Ozs7d0JBQ2xCLGVBQWUsR0FBSSxJQUFJLHlCQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTt3QkFDcEYscUJBQU0sZUFBZSxDQUFDLGNBQWMsRUFBRSxFQUFBOzt3QkFBNUMsR0FBRyxHQUFHLFNBQXNDO3dCQUNsRCxJQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRTs0QkFDcEIsZUFBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBOzRCQUNyQyxzQkFBTTt5QkFDVDt3QkFDTSxPQUFPLEdBQWUsR0FBRyxRQUFsQixFQUFFLFNBQVMsR0FBSSxHQUFHLFVBQVAsQ0FBTzt3QkFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7d0JBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFBO3dCQUMxQixlQUFP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