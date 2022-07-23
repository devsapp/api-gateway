"use strict";
/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-06 22:01:52
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-23 17:07:23
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseInput = void 0;
var tools_1 = require("./tools/tools");
function getAccess(inputs) {
    var _a = inputs.credentials, AccessKeyID = _a.AccessKeyID, AccessKeySecret = _a.AccessKeySecret;
    return [AccessKeyID, AccessKeySecret];
}
/**
 * @description 解析yaml并且将必要的阿里云id和key拼装进来
 */
function parseInput(inputs) {
    var argsObj = inputs.argsObj;
    var _a = getAccess(inputs), AccessKeyID = _a[0], AccessKeySecret = _a[1];
    var props = (0, tools_1.handleAutoFormat)(inputs.props);
    return {
        AccessKeyID: AccessKeyID,
        AccessKeySecret: AccessKeySecret,
        props: props,
        argsObj: argsObj
    };
}
exports.parseInput = parseInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7OztBQUdILHVDQUFnRDtBQUloRCxTQUFTLFNBQVMsQ0FBQyxNQUFrQjtJQUVqQyxJQUFBLEtBQ0UsTUFBTSxZQURxQyxFQUE5QixXQUFXLGlCQUFBLEVBQUUsZUFBZSxxQkFBRSxDQUNyQztJQUNWLE9BQU8sQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUE7QUFDdkMsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0IsVUFBVSxDQUFDLE1BQWtCO0lBQzNDLElBQU0sT0FBTyxHQUFZLE1BQU0sQ0FBQyxPQUFPLENBQUE7SUFDakMsSUFBQSxLQUFpQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQWpELFdBQVcsUUFBQSxFQUFFLGVBQWUsUUFBcUIsQ0FBQTtJQUN4RCxJQUFNLEtBQUssR0FBRyxJQUFBLHdCQUFnQixFQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUU1QyxPQUFPO1FBQ0wsV0FBVyxhQUFBO1FBQ1gsZUFBZSxpQkFBQTtRQUNmLEtBQUssT0FBQTtRQUNMLE9BQU8sU0FBQTtLQUNSLENBQUE7QUFDSCxDQUFDO0FBWEQsZ0NBV0MifQ==