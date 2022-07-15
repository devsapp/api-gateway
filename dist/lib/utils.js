"use strict";
/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-06 22:01:52
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-14 22:36:01
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseInput = void 0;
var tools_1 = require("./tools/tools");
/**
 * @description 解析yaml并且将必要的阿里云id和key拼装进来
 */
function parseInput(inputs) {
    var _a = (0, tools_1.getAccess)(inputs), AccessKeyID = _a[0], AccessKeySecret = _a[1];
    var props = (0, tools_1.handleAutoFormat)(inputs.props);
    return {
        AccessKeyID: AccessKeyID,
        AccessKeySecret: AccessKeySecret,
        props: props,
    };
}
exports.parseInput = parseInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7OztBQUdILHVDQUEyRDtBQUUzRDs7R0FFRztBQUNILFNBQWdCLFVBQVUsQ0FBQyxNQUFrQjtJQUNyQyxJQUFBLEtBQWlDLElBQUEsaUJBQVMsRUFBQyxNQUFNLENBQUMsRUFBakQsV0FBVyxRQUFBLEVBQUUsZUFBZSxRQUFxQixDQUFBO0lBQ3hELElBQU0sS0FBSyxHQUFHLElBQUEsd0JBQWdCLEVBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRTVDLE9BQU87UUFDTCxXQUFXLGFBQUE7UUFDWCxlQUFlLGlCQUFBO1FBQ2YsS0FBSyxPQUFBO0tBQ04sQ0FBQTtBQUNILENBQUM7QUFURCxnQ0FTQyJ9