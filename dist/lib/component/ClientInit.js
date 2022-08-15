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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientInit = void 0;
/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-11 22:51:33
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-16 18:11:56
 */
var cloudapi20160714_1 = __importDefault(require("@alicloud/cloudapi20160714"));
var $OpenApi = __importStar(require("@alicloud/openapi-client"));
var ClientInit = /** @class */ (function () {
    function ClientInit() {
    }
    /**
     * @param region 服务地址，默认是深圳
     */
    ClientInit.createClient = function (accessKeyId, accessKeySecret, region) {
        var config = new $OpenApi.Config({
            // 您的 AccessKey ID
            accessKeyId: accessKeyId,
            // 您的 AccessKey Secret
            accessKeySecret: accessKeySecret,
        });
        // 访问的域名
        config.endpoint = "apigateway.".concat(region || 'cn-shenzhen', ".aliyuncs.com");
        return new cloudapi20160714_1.default(config);
    };
    return ClientInit;
}());
exports.ClientInit = ClientInit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50SW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50L0NsaWVudEluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0dBTUc7QUFDSCxnRkFBMEQ7QUFDMUQsaUVBQXFEO0FBQ3JEO0lBQUE7SUFlQSxDQUFDO0lBZEc7O09BRUc7SUFDSSx1QkFBWSxHQUFHLFVBQVMsV0FBbUIsRUFBRSxlQUF1QixFQUFFLE1BQU87UUFDaEYsSUFBSSxNQUFNLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ2pDLGtCQUFrQjtZQUNsQixXQUFXLEVBQUUsV0FBVztZQUN4QixzQkFBc0I7WUFDdEIsZUFBZSxFQUFFLGVBQWU7U0FDL0IsQ0FBQyxDQUFDO1FBQ0gsUUFBUTtRQUNSLE1BQU0sQ0FBQyxRQUFRLEdBQUcscUJBQWMsTUFBTSxJQUFJLGFBQWEsa0JBQWUsQ0FBQztRQUN2RSxPQUFPLElBQUksMEJBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFBO0lBQ0wsaUJBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSxnQ0FBVSJ9