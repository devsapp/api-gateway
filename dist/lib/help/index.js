"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showHelpDoc = void 0;
/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-17 15:37:16
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-23 16:44:50
 */
var tools_1 = require("../tools/tools");
var deploy_1 = require("./deploy");
function showHelpDoc(docName) {
    switch (docName) {
        case 'deploy':
            (0, deploy_1.main)();
            break;
        default:
            tools_1.Slogger.log('None');
            break;
    }
}
exports.showHelpDoc = showHelpDoc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2hlbHAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7OztHQU1HO0FBQ0gsd0NBQXlDO0FBQ3pDLG1DQUE4QztBQUU5QyxTQUFnQixXQUFXLENBQUMsT0FBZTtJQUN2QyxRQUFRLE9BQU8sRUFBRTtRQUNiLEtBQUssUUFBUTtZQUNULElBQUEsYUFBVSxHQUFFLENBQUE7WUFDWixNQUFNO1FBQ1Y7WUFDSSxlQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ25CLE1BQU07S0FDYjtBQUNMLENBQUM7QUFURCxrQ0FTQyJ9