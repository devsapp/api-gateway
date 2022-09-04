"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SStore = void 0;
/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-08-06 18:09:13
 * @LastEditors: aei imaei@foxmail.com
 * @LastEditTime: 2022-09-04 00:30:40
 */
var SStore = /** @class */ (function () {
    function SStore() {
        this.custom_domain = '';
        this.domain = '';
        this.use_remote = 0;
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
    SStore.prototype.useRemote = function () {
        this.use_remote = 1;
    };
    SStore.prototype.useLocal = function () {
        this.use_remote = 2;
    };
    SStore.prototype.isRomote = function () {
        return (this.use_remote === 1);
    };
    SStore.prototype.isLocal = function () {
        return (this.use_remote === 2);
    };
    return SStore;
}());
exports.SStore = SStore;
exports.default = (new SStore());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudC9zdG9yZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7O0dBTUc7QUFDSDtJQUlJO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUE7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7UUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUE7SUFDdkIsQ0FBQztJQUNELDBCQUFTLEdBQVQsVUFBVSxHQUFXO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFBO0lBQ3JCLENBQUM7SUFDRCwwQkFBUyxHQUFUO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ3RCLENBQUM7SUFDRCwwQkFBUyxHQUFULFVBQVUsR0FBVztRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQTtJQUM1QixDQUFDO0lBQ0QsMEJBQVMsR0FBVDtRQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQTtJQUM3QixDQUFDO0lBQ0QsMEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7SUFDRCx5QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUE7SUFDdkIsQ0FBQztJQUNELHlCQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBQ0Qsd0JBQU8sR0FBUDtRQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQztBQWpDWSx3QkFBTTtBQW1DbkIsa0JBQWUsQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUEifQ==