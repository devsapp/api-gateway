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
var declaration_1 = require("../../declaration");
var tools_1 = require("../../tools/tools");
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
                            tools_1.Slogger.info('创建api组失败:', res.error);
                            return [2 /*return*/];
                        }
                        groupId = res.groupId, subDomain = res.subDomain;
                        this.groupId = groupId;
                        this.subDomain = subDomain;
                        tools_1.Slogger.info('创建api组成功: ', {
                            groupName: this.props.groupName,
                            groupId: groupId,
                            subDomain: subDomain,
                            basePath: this.props.basePath || '/'
                        });
                        sApiGateway = new SapiGateway_1.SApiGateway({
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
                    case 2:
                        apis = _a.sent();
                        deployApis = apis.map(function (item) {
                            return {
                                groupId: _this.groupId,
                                apiUid: item.apiId
                            };
                        });
                        if (!apis.length) return [3 /*break*/, 4];
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
                    case 3:
                        deployApisRes = _a.sent();
                        if (deployApisRes.responseStatus) {
                            tools_1.Slogger.info('发布成功。', "\u4F7F\u7528 http://".concat(this.subDomain + (this.props.basePath || ''), " \u62FC\u63A5api\u8BF7\u6C42path\u4F5C\u4E3Aapi\u7F51\u5173\u8BBF\u95EE\u5730\u5740"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU0FwaUdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnQvYXBpR3JvdXBzL1NBcGlHcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxzRUFBZ0Q7QUFDaEQseURBQXdEO0FBQ3hELHVEQUFzRDtBQUN0RCxpREFBaUQ7QUFDakQsMkNBQTRDO0FBQzVDO0lBTUksbUJBQVksV0FBa0IsRUFBRSxlQUFzQixFQUFFLEtBQUs7UUFDekQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7UUFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUE7UUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDdEIsQ0FBQztJQUNEOztNQUVFO0lBQ0ksMEJBQU0sR0FBWixVQUFhLElBQWU7Ozs7Ozs7d0JBRWxCLGVBQWUsR0FBSSxJQUFJLHlCQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTt3QkFDcEYscUJBQU0sZUFBZSxDQUFDLGNBQWMsRUFBRSxFQUFBOzt3QkFBNUMsR0FBRyxHQUFHLFNBQXNDO3dCQUNsRCxJQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRTs0QkFDcEIsZUFBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBOzRCQUNwQyxzQkFBTTt5QkFDVDt3QkFDTSxPQUFPLEdBQWUsR0FBRyxRQUFsQixFQUFFLFNBQVMsR0FBSSxHQUFHLFVBQVAsQ0FBTzt3QkFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7d0JBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFBO3dCQUMxQixlQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTs0QkFDdkIsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUzs0QkFDL0IsT0FBTyxTQUFBOzRCQUNQLFNBQVMsV0FBQTs0QkFDVCxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksR0FBRzt5QkFDdkMsQ0FBQyxDQUFBO3dCQUNJLFdBQVcsR0FBRyxJQUFJLHlCQUFXLENBQUM7NEJBQ2hDLE1BQU0sRUFBRTtnQ0FDSixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0NBQzdCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTs2QkFDeEM7NEJBQ0QsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTs0QkFDekIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPOzRCQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO3lCQUN4QixDQUFDLENBQUE7d0JBQ1cscUJBQU0sV0FBVyxDQUFDLFVBQVUsRUFBRTs0QkFDM0MsNkJBQTZCOzBCQURjOzt3QkFBckMsSUFBSSxHQUFHLFNBQThCO3dCQUVyQyxVQUFVLEdBR1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUk7NEJBQ2hCLE9BQU87Z0NBQ0gsT0FBTyxFQUFFLEtBQUksQ0FBQyxPQUFPO2dDQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUs7NkJBQ3JCLENBQUE7d0JBQ0wsQ0FBQyxDQUFDLENBQUE7NkJBQ0MsSUFBSSxDQUFDLE1BQU0sRUFBWCx3QkFBVzt3QkFDVixlQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO3dCQUNGLHFCQUFNLElBQUksdUJBQVUsQ0FBQztnQ0FDdkMsU0FBUyxFQUFFLDBCQUFZLENBQUMsT0FBTztnQ0FDL0IsSUFBSSxFQUFFLFVBQVU7Z0NBQ2hCLE1BQU0sRUFBQztvQ0FDSCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7b0NBQzdCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtpQ0FDeEM7Z0NBQ0QsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTs2QkFDNUIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUFBOzt3QkFSZCxhQUFhLEdBQUcsU0FRRjt3QkFDcEIsSUFBRyxhQUFhLENBQUMsY0FBYyxFQUFFOzRCQUM3QixlQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSw4QkFBYSxJQUFJLENBQUMsU0FBUyxHQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLHdGQUF5QixDQUFDLENBQUE7eUJBQzFHOzs7Ozs7S0FFUjtJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQW5FRCxJQW1FQztBQW5FWSw4QkFBUyJ9