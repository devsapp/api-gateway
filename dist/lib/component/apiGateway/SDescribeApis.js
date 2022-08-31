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
exports.SDescribeApis = void 0;
var $CloudAPI20160714 = __importStar(require("@alicloud/cloudapi20160714"));
var $Util = __importStar(require("@alicloud/tea-util"));
var ClientInit_1 = require("../ClientInit");
var tools_1 = require("../../tools/tools");
var SDescribeApis = /** @class */ (function () {
    function SDescribeApis(config) {
        this.config = config;
    }
    SDescribeApis.prototype.describeApis = function (pageNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var client, describeApisRequest, runtime;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = ClientInit_1.ClientInit.createClient(this.config.access.AccessKeyID, this.config.access.AccessKeySecret, this.config.region);
                        describeApisRequest = new $CloudAPI20160714.DescribeApisRequest({
                            groupId: this.config.groupId,
                            pageNumber: pageNumber,
                        });
                        runtime = new $Util.RuntimeOptions({});
                        return [4 /*yield*/, (0, tools_1.handleClientRequst)(client, 'describeApisWithOptions', describeApisRequest, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SDescribeApis.prototype.describeApi = function (apiId) {
        return __awaiter(this, void 0, void 0, function () {
            var client, describeApiRequest, runtime;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = ClientInit_1.ClientInit.createClient(this.config.access.AccessKeyID, this.config.access.AccessKeySecret, this.config.region);
                        describeApiRequest = new $CloudAPI20160714.DescribeApiRequest({
                            groupId: this.config.groupId,
                            apiId: apiId,
                        });
                        runtime = new $Util.RuntimeOptions({});
                        return [4 /*yield*/, (0, tools_1.handleClientRequst)(client, 'describeApiWithOptions', describeApiRequest, runtime)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return SDescribeApis;
}());
exports.SDescribeApis = SDescribeApis;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU0Rlc2NyaWJlQXBpcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50L2FwaUdhdGV3YXkvU0Rlc2NyaWJlQXBpcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLDRFQUErRDtBQUMvRCx3REFBMkM7QUFDM0MsNENBQTBDO0FBQzFDLDJDQUFzRDtBQUV0RDtJQUVFLHVCQUFZLE1BQXdCO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0lBQ3RCLENBQUM7SUFDSyxvQ0FBWSxHQUFsQixVQUFtQixVQUFVOzs7Ozs7d0JBQ3ZCLE1BQU0sR0FBRyx1QkFBVSxDQUFDLFlBQVksQ0FDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUNuQixDQUFBO3dCQUNHLG1CQUFtQixHQUFHLElBQUksaUJBQWlCLENBQUMsbUJBQW1CLENBQUM7NEJBQ2xFLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87NEJBQzVCLFVBQVUsWUFBQTt5QkFDWCxDQUFDLENBQUE7d0JBQ0UsT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQTt3QkFDbkMscUJBQU0sSUFBQSwwQkFBa0IsRUFDN0IsTUFBTSxFQUNOLHlCQUF5QixFQUN6QixtQkFBbUIsRUFDbkIsT0FBTyxDQUNSLEVBQUE7NEJBTEQsc0JBQU8sU0FLTixFQUFBOzs7O0tBQ0Y7SUFDSyxtQ0FBVyxHQUFqQixVQUFrQixLQUFLOzs7Ozs7d0JBQ2pCLE1BQU0sR0FBRyx1QkFBVSxDQUFDLFlBQVksQ0FDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUNuQixDQUFBO3dCQUNHLGtCQUFrQixHQUFHLElBQUksaUJBQWlCLENBQUMsa0JBQWtCLENBQUM7NEJBQ2hFLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87NEJBQzVCLEtBQUssT0FBQTt5QkFDTixDQUFDLENBQUM7d0JBQ0MsT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQTt3QkFDbkMscUJBQU0sSUFBQSwwQkFBa0IsRUFDN0IsTUFBTSxFQUNOLHdCQUF3QixFQUN4QixrQkFBa0IsRUFDbEIsT0FBTyxDQUNSLEVBQUE7NEJBTEQsc0JBQU8sU0FLTixFQUFBOzs7O0tBQ0Y7SUFDSCxvQkFBQztBQUFELENBQUMsQUF6Q0QsSUF5Q0M7QUF6Q1ksc0NBQWEifQ==