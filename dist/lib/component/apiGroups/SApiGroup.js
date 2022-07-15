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
            var sCreateApiGroup, res, _a, groupId, subDomain, sApiGateway, apis;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        sCreateApiGroup = new SCreateApiGroup_1.default(this.AccessKeyID, this.AccessKeySecret, this.props);
                        return [4 /*yield*/, sCreateApiGroup.createApiGroup()];
                    case 1:
                        res = _b.sent();
                        if (!res.responseStatus) {
                            console.log('创建api组失败:', res.error);
                            return [2 /*return*/];
                        }
                        _a = res, groupId = _a.groupId, subDomain = _a.subDomain;
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
                        return [4 /*yield*/, sApiGateway.createApis()];
                    case 2:
                        apis = _b.sent();
                        console.log('apis', apis);
                        return [2 /*return*/];
                }
            });
        });
    };
    return SApiGroup;
}());
exports.SApiGroup = SApiGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU0FwaUdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnQvYXBpR3JvdXBzL1NBcGlHcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxzRUFBZ0Q7QUFDaEQseURBQXdEO0FBQ3hEO0lBTUksbUJBQVksV0FBa0IsRUFBRSxlQUFzQixFQUFFLEtBQUs7UUFDekQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7UUFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUE7UUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDdEIsQ0FBQztJQUNEOztNQUVFO0lBQ0ksMEJBQU0sR0FBWjs7Ozs7O3dCQUVVLGVBQWUsR0FBSSxJQUFJLHlCQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTt3QkFDcEYscUJBQU0sZUFBZSxDQUFDLGNBQWMsRUFBRSxFQUFBOzt3QkFBNUMsR0FBRyxHQUFHLFNBQXNDO3dCQUNsRCxJQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRTs0QkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBOzRCQUNuQyxzQkFBTTt5QkFDVDt3QkFDSyxLQUF1QixHQUFrQyxFQUF4RCxPQUFPLGFBQUEsRUFBRSxTQUFTLGVBQUEsQ0FBc0M7d0JBQy9ELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO3dCQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQTt3QkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUU7NEJBQ3RCLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7NEJBQy9CLE9BQU8sU0FBQTs0QkFDUCxTQUFTLFdBQUE7NEJBQ1QsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTt5QkFDaEMsQ0FBQyxDQUFBO3dCQUNJLFdBQVcsR0FBRyxJQUFJLHlCQUFXLENBQUM7NEJBQ2hDLE1BQU0sRUFBRTtnQ0FDSixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0NBQzdCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTs2QkFDeEM7NEJBQ0QsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTs0QkFDekIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPOzRCQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzRCQUN6QixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO3lCQUN4QixDQUFDLENBQUE7d0JBQ1cscUJBQU0sV0FBVyxDQUFDLFVBQVUsRUFBRSxFQUFBOzt3QkFBckMsSUFBSSxHQUFHLFNBQThCO3dCQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTs7Ozs7S0FDNUI7SUFDTCxnQkFBQztBQUFELENBQUMsQUE1Q0QsSUE0Q0M7QUE1Q1ksOEJBQVMifQ==