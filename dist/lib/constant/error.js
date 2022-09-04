"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorDictionary = void 0;
var errorDictionary = new Map();
exports.errorDictionary = errorDictionary;
// type 1 是直接抛出错误，2是打印错误继续执行
errorDictionary.set('ExceedLimitGroupWithoutFormalDomain', {
    type: 1,
    text: '超出api网关组最大限度'
});
errorDictionary.set('RepeatedPath', {
    type: 1,
    text: '当前api存在在线api方法路径重复，请删除或修改后继续部署'
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2NvbnN0YW50L2Vycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQVFBLElBQU0sZUFBZSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFBO0FBZTdDLDBDQUFlO0FBYm5CLDRCQUE0QjtBQUU1QixlQUFlLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxFQUFFO0lBQ3ZELElBQUksRUFBRSxDQUFDO0lBQ1AsSUFBSSxFQUFFLGNBQWM7Q0FDdkIsQ0FBQyxDQUFBO0FBRUYsZUFBZSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUU7SUFDaEMsSUFBSSxFQUFFLENBQUM7SUFDUCxJQUFJLEVBQUUsZ0NBQWdDO0NBQ3pDLENBQUMsQ0FBQSJ9