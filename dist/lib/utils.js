"use strict";
/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-06 22:01:52
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-29 21:10:14
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
    var theInputs = (0, tools_1.deepClone)(inputs);
    var argsObj = theInputs.argsObj;
    var _a = getAccess(theInputs), AccessKeyID = _a[0], AccessKeySecret = _a[1];
    var props = (0, tools_1.handleAutoFormat)(theInputs.props);
    return {
        AccessKeyID: AccessKeyID,
        AccessKeySecret: AccessKeySecret,
        props: props,
        argsObj: argsObj
    };
}
exports.parseInput = parseInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7OztBQUdILHVDQUEyRDtBQUkzRCxTQUFTLFNBQVMsQ0FBQyxNQUFrQjtJQUVqQyxJQUFBLEtBQ0UsTUFBTSxZQURxQyxFQUE5QixXQUFXLGlCQUFBLEVBQUUsZUFBZSxxQkFBRSxDQUNyQztJQUNWLE9BQU8sQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUE7QUFDdkMsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0IsVUFBVSxDQUFDLE1BQWtCO0lBQzNDLElBQU0sU0FBUyxHQUFHLElBQUEsaUJBQVMsRUFBQyxNQUFNLENBQUMsQ0FBQTtJQUNuQyxJQUFNLE9BQU8sR0FBWSxTQUFTLENBQUMsT0FBTyxDQUFBO0lBQ3BDLElBQUEsS0FBaUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFwRCxXQUFXLFFBQUEsRUFBRSxlQUFlLFFBQXdCLENBQUE7SUFDM0QsSUFBTSxLQUFLLEdBQUcsSUFBQSx3QkFBZ0IsRUFBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDL0MsT0FBTztRQUNMLFdBQVcsYUFBQTtRQUNYLGVBQWUsaUJBQUE7UUFDZixLQUFLLE9BQUE7UUFDTCxPQUFPLFNBQUE7S0FDUixDQUFBO0FBQ0gsQ0FBQztBQVhELGdDQVdDIn0=