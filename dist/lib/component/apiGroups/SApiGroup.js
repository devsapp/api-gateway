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
var SapiGateway_1 = require("../apiGateway/SapiGateway");
var SDeployApi_1 = require("../apiGateway/SDeployApi");
var interface_1 = require("../../declaration/interface");
var SApiGroup = /** @class */ (function () {
    function SApiGroup(AccessKeyID, AccessKeySecret, props) {
        this.AccessKeyID = AccessKeyID;
        this.AccessKeySecret = AccessKeySecret;
        this.props = props;
    }
    /**
     * @description 一键部署
    */
    SApiGroup.prototype.deploy = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sCreateApiGroup, res, groupId, subDomain, sApiGateway, apis, deployApis, deployApisRes;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sCreateApiGroup = new SCreateApiGroup_1.default(this.AccessKeyID, this.AccessKeySecret, this.props);
                        return [4 /*yield*/, sCreateApiGroup.createApiGroup()];
                    case 1:
                        res = _a.sent();
                        if (!res.responseStatus) {
                            console.log('创建api组失败:', res.error);
                            return [2 /*return*/];
                        }
                        groupId = res.groupId, subDomain = res.subDomain;
                        this.groupId = groupId;
                        this.subDomain = subDomain;
                        console.log('创建api组成功: ', {
                            groupName: this.props.groupName,
                            groupId: groupId,
                            subDomain: subDomain,
                            basePath: this.props.basePath
                        });
                        sApiGateway = new SapiGateway_1.SApiGateway({
                            access: {
                                AccessKeyID: this.AccessKeyID,
                                AccessKeySecret: this.AccessKeySecret
                            },
                            region: this.props.region,
                            groupId: this.groupId,
                            domain: this.props.domain,
                            apis: this.props.apis
                        });
                        return [4 /*yield*/, sApiGateway.createApis()
                            // console.log('apis', apis)
                        ];
                    case 2:
                        apis = _a.sent();
                        deployApis = apis.map(function (item) {
                            return {
                                groupId: _this.groupId,
                                apiUid: item.apiId
                            };
                        });
                        if (!apis.length) return [3 /*break*/, 4];
                        console.log('正在发布中...');
                        return [4 /*yield*/, new SDeployApi_1.SDeployApi({
                                stageName: interface_1.ApiStageName.RELEASE,
                                apis: deployApis,
                                access: {
                                    AccessKeyID: this.AccessKeyID,
                                    AccessKeySecret: this.AccessKeySecret
                                },
                                region: this.props.region
                            }).batchDeployApis()];
                    case 3:
                        deployApisRes = _a.sent();
                        if (deployApisRes.responseStatus) {
                            console.log("\u53D1\u5E03\u6210\u529F\uFF0C\u4F7F\u7528 ".concat(this.subDomain + this.props.basePath, "/path \u4F5C\u4E3Aapi\u7F51\u5173\u8BBF\u95EE\u5730\u5740"));
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return SApiGroup;
}());
exports.SApiGroup = SApiGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU0FwaUdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnQvYXBpR3JvdXBzL1NBcGlHcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxzRUFBZ0Q7QUFDaEQseURBQXdEO0FBQ3hELHVEQUFzRDtBQUN0RCx5REFBMkQ7QUFDM0Q7SUFNSSxtQkFBWSxXQUFrQixFQUFFLGVBQXNCLEVBQUUsS0FBSztRQUN6RCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQTtRQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQTtRQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtJQUN0QixDQUFDO0lBQ0Q7O01BRUU7SUFDSSwwQkFBTSxHQUFaOzs7Ozs7O3dCQUVVLGVBQWUsR0FBSSxJQUFJLHlCQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTt3QkFDcEYscUJBQU0sZUFBZSxDQUFDLGNBQWMsRUFBRSxFQUFBOzt3QkFBNUMsR0FBRyxHQUFHLFNBQXNDO3dCQUNsRCxJQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRTs0QkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBOzRCQUNuQyxzQkFBTTt5QkFDVDt3QkFDTSxPQUFPLEdBQWUsR0FBRyxRQUFsQixFQUFFLFNBQVMsR0FBSSxHQUFHLFVBQVAsQ0FBTzt3QkFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7d0JBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFBO3dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRTs0QkFDdEIsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUzs0QkFDL0IsT0FBTyxTQUFBOzRCQUNQLFNBQVMsV0FBQTs0QkFDVCxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO3lCQUNoQyxDQUFDLENBQUE7d0JBQ0ksV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBQzs0QkFDaEMsTUFBTSxFQUFFO2dDQUNKLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztnQ0FDN0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlOzZCQUN4Qzs0QkFDRCxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzRCQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87NEJBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07NEJBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7eUJBQ3hCLENBQUMsQ0FBQTt3QkFDVyxxQkFBTSxXQUFXLENBQUMsVUFBVSxFQUFFOzRCQUMzQyw0QkFBNEI7MEJBRGU7O3dCQUFyQyxJQUFJLEdBQUcsU0FBOEI7d0JBRXJDLFVBQVUsR0FHVixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSTs0QkFDaEIsT0FBTztnQ0FDSCxPQUFPLEVBQUUsS0FBSSxDQUFDLE9BQU87Z0NBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSzs2QkFDckIsQ0FBQTt3QkFDTCxDQUFDLENBQUMsQ0FBQTs2QkFDQyxJQUFJLENBQUMsTUFBTSxFQUFYLHdCQUFXO3dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7d0JBQ0QscUJBQU0sSUFBSSx1QkFBVSxDQUFDO2dDQUN2QyxTQUFTLEVBQUUsd0JBQVksQ0FBQyxPQUFPO2dDQUMvQixJQUFJLEVBQUUsVUFBVTtnQ0FDaEIsTUFBTSxFQUFDO29DQUNILFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztvQ0FDN0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO2lDQUN4QztnQ0FDRCxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzZCQUM1QixDQUFDLENBQUMsZUFBZSxFQUFFLEVBQUE7O3dCQVJkLGFBQWEsR0FBRyxTQVFGO3dCQUNwQixJQUFHLGFBQWEsQ0FBQyxjQUFjLEVBQUU7NEJBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMscURBQVcsSUFBSSxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsOERBQW1CLENBQUMsQ0FBQTt5QkFDaEY7Ozs7OztLQUVSO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBcEVELElBb0VDO0FBcEVZLDhCQUFTIn0=