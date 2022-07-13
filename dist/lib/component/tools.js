"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepClone = exports.getAccess = exports.handleAutoFormat = void 0;
var constant_1 = require("./constant");
//处理
function handleAutoFormat(o) {
    var map = new Map();
    Object.keys(constant_1.constant.autoMapTable).forEach(function (item) {
        map.set(item, constant_1.constant.autoMapTable[item]);
    });
    return (function deepFormat(initalObj, finalObj) {
        var obj = finalObj || {};
        for (var i in initalObj) {
            if (typeof initalObj[i] === 'object') {
                obj[i] = initalObj[i].constructor === Array ? [] : {};
                deepFormat(initalObj[i], obj[i]);
            }
            else {
                if (initalObj[i] === 'auto') {
                    obj[i] = "".concat(map.get(i)).concat(Math.floor(Math.random() * 100000));
                }
                else {
                    obj[i] = initalObj[i];
                }
            }
        }
        return obj;
    })(o);
}
exports.handleAutoFormat = handleAutoFormat;
function getAccess(inputs) {
    var _a = inputs.credentials, AccessKeyID = _a.AccessKeyID, AccessKeySecret = _a.AccessKeySecret;
    return [AccessKeyID, AccessKeySecret];
}
exports.getAccess = getAccess;
function deepClone(initalObj, finalObj) {
    var obj = finalObj || {};
    for (var i in initalObj) {
        if (typeof initalObj[i] === 'object') {
            //判断构造函数是不是Array即initalObj[i]是不是数组，注意判断数组不能用typeof，因为typeof [1,2,3] === 'object'
            obj[i] = initalObj[i].constructor === Array ? [] : {};
            deepClone(initalObj[i], obj[i]);
        }
        else {
            obj[i] = initalObj[i];
        }
    }
    return obj;
}
exports.deepClone = deepClone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudC90b29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFRQSx1Q0FBcUM7QUFDckMsSUFBSTtBQUNKLFNBQWdCLGdCQUFnQixDQUFDLENBQU07SUFDbkMsSUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQTtJQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtRQUMzQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxtQkFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQzlDLENBQUMsQ0FBQyxDQUFBO0lBQ0YsT0FBTyxDQUFDLFNBQVMsVUFBVSxDQUFDLFNBQVMsRUFBRSxRQUFTO1FBQzVDLElBQUksR0FBRyxHQUFHLFFBQVEsSUFBSSxFQUFFLENBQUE7UUFDeEIsS0FBSyxJQUFJLENBQUMsSUFBSSxTQUFTLEVBQUU7WUFDdkIsSUFBSSxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7Z0JBQ3BDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7Z0JBQ3JELFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDakM7aUJBQU07Z0JBQ0wsSUFBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxFQUFFO29CQUN4QixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFFLENBQUE7aUJBQ2hFO3FCQUFLO29CQUNGLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQ3hCO2FBQ0Y7U0FDRjtRQUNELE9BQU8sR0FBRyxDQUFBO0lBQ2QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDVCxDQUFDO0FBckJELDRDQXFCQztBQUVELFNBQWdCLFNBQVMsQ0FBQyxNQUFrQjtJQUNoQyxJQUFBLEtBQThDLE1BQU0sWUFBVixFQUE3QixXQUFXLGlCQUFBLEVBQUUsZUFBZSxxQkFBQyxDQUFVO0lBQzVELE9BQU8sQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUE7QUFDekMsQ0FBQztBQUhELDhCQUdDO0FBRUQsU0FBZ0IsU0FBUyxDQUFDLFNBQVMsRUFBRSxRQUFTO0lBQzFDLElBQUksR0FBRyxHQUFHLFFBQVEsSUFBSSxFQUFFLENBQUE7SUFDeEIsS0FBSyxJQUFJLENBQUMsSUFBSSxTQUFTLEVBQUU7UUFDdkIsSUFBSSxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDcEMsZ0ZBQWdGO1lBQ2hGLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7WUFDckQsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNoQzthQUFNO1lBQ0wsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUN0QjtLQUNGO0lBQ0QsT0FBTyxHQUFHLENBQUE7QUFDZCxDQUFDO0FBWkQsOEJBWUMifQ==