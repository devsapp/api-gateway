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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDeleteApiGroup = void 0;
var SDescribeApis_1 = require("../apiGateway/SDescribeApis");
var SDescribeApiGroup_1 = require("./SDescribeApiGroup");
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
            AccessKeySecret: AccessKeySecret
        };
        this.props = props;
    }
    /**
     * @description 一键删除api组
     */
    SDeleteApiGroup.prototype.deleteApiGroup = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var sdescribeApiGroups, apiGroupsDescrib, groupId, sDescribeApis, apis, pageIndex, totalCount, apisDescrib;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        sdescribeApiGroups = new SDescribeApiGroup_1.SDescribeApiGroup({
                            access: this.access,
                            region: this.props.region,
                            groupName: this.props.groupName
                        });
                        return [4 /*yield*/, sdescribeApiGroups.describeApiGroups()];
                    case 1:
                        apiGroupsDescrib = _c.sent();
                        if (!apiGroupsDescrib.responseStatus)
                            return [2 /*return*/, apiGroupsDescrib.error];
                        if (((_a = apiGroupsDescrib.apiGroupAttributes.apiGroupAttribute[0]) === null || _a === void 0 ? void 0 : _a.groupName)
                            !== this.props.groupName)
                            return [2 /*return*/, {
                                    responseStatus: false,
                                    error: 'no this apigroup'
                                }];
                        groupId = (_b = apiGroupsDescrib.apiGroupAttributes.apiGroupAttribute[0]) === null || _b === void 0 ? void 0 : _b.groupId;
                        sDescribeApis = new SDescribeApis_1.SDescribeApis({
                            access: this.access,
                            region: this.props.region,
                            groupId: groupId
                        });
                        apis = [];
                        pageIndex = 0, totalCount = 1;
                        _c.label = 2;
                    case 2:
                        if (!(pageIndex * 10 < totalCount)) return [3 /*break*/, 4];
                        return [4 /*yield*/, sDescribeApis.describeApis(pageIndex)];
                    case 3:
                        apisDescrib = _c.sent();
                        totalCount = apisDescrib.totalCount;
                        if (!apisDescrib.responseStatus)
                            return [2 /*return*/, apisDescrib.error];
                        apis = apis.concat(apisDescrib.apiSummarys.apiSummary.map(function (item) { return item.apiId; }));
                        pageIndex++;
                        return [3 /*break*/, 2];
                    case 4:
                        console.log(apis);
                        return [2 /*return*/];
                }
            });
        });
    };
    return SDeleteApiGroup;
}());
exports.SDeleteApiGroup = SDeleteApiGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU0RlbGV0ZUFwaUdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnQvYXBpR3JvdXBzL1NEZWxldGVBcGlHcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSw2REFBNEQ7QUFDNUQseURBQXdEO0FBRXhEOzs7Ozs7R0FNRztBQUNIO0lBR0kseUJBQVksV0FBa0IsRUFBRSxlQUFzQixFQUFFLEtBQUs7UUFDekQsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNWLFdBQVcsYUFBQTtZQUNYLGVBQWUsaUJBQUE7U0FDbEIsQ0FBQTtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0lBQ3RCLENBQUM7SUFDRDs7T0FFRztJQUNHLHdDQUFjLEdBQXBCOzs7Ozs7O3dCQUVVLGtCQUFrQixHQUFHLElBQUkscUNBQWlCLENBQUM7NEJBQzdDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTs0QkFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTs0QkFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUzt5QkFDbEMsQ0FBQyxDQUFBO3dCQUN1QixxQkFBTSxrQkFBa0IsQ0FBQyxpQkFBaUIsRUFBRSxFQUFBOzt3QkFBL0QsZ0JBQWdCLEdBQUcsU0FBNEM7d0JBQ3JFLElBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjOzRCQUFFLHNCQUFPLGdCQUFnQixDQUFDLEtBQUssRUFBQTt3QkFDbEUsSUFBRyxDQUFBLE1BQUEsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFNBQVM7Z0NBQzlELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUzs0QkFBRSxzQkFBTztvQ0FDN0IsY0FBYyxFQUFFLEtBQUs7b0NBQ3JCLEtBQUssRUFBRSxrQkFBa0I7aUNBQzVCLEVBQUE7d0JBQ0MsT0FBTyxHQUFHLE1BQUEsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLDBDQUFFLE9BQU8sQ0FBQTt3QkFDM0UsYUFBYSxHQUFHLElBQUksNkJBQWEsQ0FBQzs0QkFDcEMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNOzRCQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzRCQUN6QixPQUFPLFNBQUE7eUJBQ1YsQ0FBQyxDQUFBO3dCQUVFLElBQUksR0FBRyxFQUFFLENBQUE7d0JBQ1QsU0FBUyxHQUFHLENBQUMsRUFBRSxVQUFVLEdBQUcsQ0FBQyxDQUFBOzs7NkJBQzNCLENBQUEsU0FBUyxHQUFHLEVBQUUsR0FBRyxVQUFVLENBQUE7d0JBQ1QscUJBQU0sYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBQTs7d0JBQXpELFdBQVcsR0FBRyxTQUEyQzt3QkFDL0QsVUFBVSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUE7d0JBQ25DLElBQUcsQ0FBQyxXQUFXLENBQUMsY0FBYzs0QkFBRSxzQkFBTyxXQUFXLENBQUMsS0FBSyxFQUFBO3dCQUN4RCxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsQ0FBQyxDQUFDLENBQUE7d0JBQzlFLFNBQVMsRUFBRSxDQUFDOzs7d0JBRWhCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7Ozs7O0tBSXBCO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBaERELElBZ0RDO0FBaERZLDBDQUFlIn0=