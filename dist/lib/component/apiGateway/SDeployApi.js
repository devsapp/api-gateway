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
exports.SDeployApi = void 0;
var ClientInit_1 = require("../ClientInit");
var $CloudAPI20160714 = __importStar(require("@alicloud/cloudapi20160714"));
var $Util = __importStar(require("@alicloud/tea-util"));
var tools_1 = require("../../tools/tools");
var SDeployApi = /** @class */ (function () {
    function SDeployApi(apisconfig) {
        this.apisconfig = apisconfig;
    }
    SDeployApi.prototype.batchDeployApis = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var client, apis, batchDeployApisRequest, runtime;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        client = ClientInit_1.ClientInit.createClient(this.apisconfig.access.AccessKeyID, this.apisconfig.access.AccessKeySecret, this.apisconfig.region);
                        apis = ((_a = this.apisconfig.apis) === null || _a === void 0 ? void 0 : _a.map(function (item) {
                            return new $CloudAPI20160714.BatchDeployApisRequestApi(item);
                        })) || [];
                        batchDeployApisRequest = new $CloudAPI20160714.BatchDeployApisRequest({
                            api: apis,
                            stageName: 'RELEASE',
                            description: '批量发布api',
                        });
                        runtime = new $Util.RuntimeOptions({});
                        return [4 /*yield*/, (0, tools_1.handleClientRequst)(client, 'batchDeployApisWithOptions', batchDeployApisRequest, runtime)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    return SDeployApi;
}());
exports.SDeployApi = SDeployApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU0RlcGxveUFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50L2FwaUdhdGV3YXkvU0RlcGxveUFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBLDRDQUEwQztBQUMxQyw0RUFBK0Q7QUFDL0Qsd0RBQTJDO0FBQzNDLDJDQUFzRDtBQUV0RDtJQUVFLG9CQUFZLFVBQWlDO1FBQzNDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFBO0lBQzlCLENBQUM7SUFDSyxvQ0FBZSxHQUFyQjs7Ozs7Ozt3QkFDTSxNQUFNLEdBQUcsdUJBQVUsQ0FBQyxZQUFZLENBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FDdkIsQ0FBQTt3QkFDSyxJQUFJLEdBQUcsQ0FBQSxNQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSwwQ0FBRSxHQUFHLENBQUMsVUFBQSxJQUFJOzRCQUN6QyxPQUFPLElBQUksaUJBQWlCLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLENBQUE7d0JBQzlELENBQUMsQ0FBQyxLQUFJLEVBQUUsQ0FBQTt3QkFDSixzQkFBc0IsR0FBRyxJQUFJLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDOzRCQUN4RSxHQUFHLEVBQUUsSUFBSTs0QkFDVCxTQUFTLEVBQUUsU0FBUzs0QkFDcEIsV0FBVyxFQUFFLFNBQVM7eUJBQ3ZCLENBQUMsQ0FBQTt3QkFDRSxPQUFPLEdBQUcsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFBO3dCQUNuQyxxQkFBTSxJQUFBLDBCQUFrQixFQUM3QixNQUFNLEVBQ04sNEJBQTRCLEVBQzVCLHNCQUFzQixFQUN0QixPQUFPLENBQ1IsRUFBQTs0QkFMRCxzQkFBTyxTQUtOLEVBQUE7Ozs7S0FDRjtJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQTNCRCxJQTJCQztBQTNCWSxnQ0FBVSJ9