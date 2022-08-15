"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SStore = void 0;
/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-08-06 18:09:13
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-08-07 23:28:58
 */
var SStore = /** @class */ (function () {
    function SStore() {
        this.custom_domain = '';
        this.domain = '';
    }
    SStore.prototype.setDomain = function (str) {
        this.domain = str;
    };
    SStore.prototype.getDomain = function () {
        return this.domain;
    };
    SStore.prototype.setCustom = function (str) {
        this.custom_domain = str;
    };
    SStore.prototype.getCustom = function () {
        return this.custom_domain;
    };
    return SStore;
}());
exports.SStore = SStore;
exports.default = (new SStore());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudC9zdG9yZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7O0dBTUc7QUFDSDtJQUdJO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUE7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7SUFDcEIsQ0FBQztJQUNELDBCQUFTLEdBQVQsVUFBVSxHQUFXO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFBO0lBQ3JCLENBQUM7SUFDRCwwQkFBUyxHQUFUO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ3RCLENBQUM7SUFDRCwwQkFBUyxHQUFULFVBQVUsR0FBVztRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQTtJQUM1QixDQUFDO0lBQ0QsMEJBQVMsR0FBVDtRQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQTtJQUM3QixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlksd0JBQU07QUFxQm5CLGtCQUFlLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFBIn0=