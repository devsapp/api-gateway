"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-17 15:33:03
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-29 21:07:44
 */
var core_1 = require("@serverless-devs/core");
function main() {
    var sections = [
        {
            header: 'api-gateway',
            content: '阿里云api网关组件',
        },
        {
            header: 'Options',
            optionList: [
                {
                    name: 'help',
                    alias: 'h',
                    description: 'Print this usage guide.',
                    type: Boolean
                },
                {
                    name: 'use-local',
                    type: Boolean,
                    description: 'Use a local configuration',
                },
                {
                    name: 'use-remote',
                    type: Boolean,
                    description: 'Use remote configuration',
                },
            ]
        }
    ];
    (0, core_1.help)(sections);
}
exports.main = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwbG95LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9oZWxwL2RlcGxveS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7O0dBTUc7QUFDSCw4Q0FBNEM7QUFFNUMsU0FBZ0IsSUFBSTtJQUNoQixJQUFNLFFBQVEsR0FBRztRQUNiO1lBQ0UsTUFBTSxFQUFFLGFBQWE7WUFDckIsT0FBTyxFQUFFLFlBQVk7U0FDdEI7UUFDRDtZQUNFLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLFVBQVUsRUFBRTtnQkFDVjtvQkFDRSxJQUFJLEVBQUUsTUFBTTtvQkFDWixLQUFLLEVBQUUsR0FBRztvQkFDVixXQUFXLEVBQUUseUJBQXlCO29CQUN0QyxJQUFJLEVBQUUsT0FBTztpQkFDZDtnQkFDRDtvQkFDRSxJQUFJLEVBQUUsV0FBVztvQkFDakIsSUFBSSxFQUFFLE9BQU87b0JBQ2IsV0FBVyxFQUFFLDJCQUEyQjtpQkFDekM7Z0JBQ0Q7b0JBQ0ksSUFBSSxFQUFFLFlBQVk7b0JBQ2xCLElBQUksRUFBRSxPQUFPO29CQUNiLFdBQVcsRUFBRSwwQkFBMEI7aUJBQzFDO2FBQ0Y7U0FDRjtLQUFDLENBQUE7SUFDTixJQUFBLFdBQUksRUFBQyxRQUFRLENBQUMsQ0FBQztBQUNuQixDQUFDO0FBNUJELG9CQTRCQyJ9