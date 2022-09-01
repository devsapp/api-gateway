/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-17 15:33:03
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-29 21:07:44
 */
import { help } from "@serverless-devs/core"

export function main() {
    const sections = [
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
              description: 'use local',
            },
            {
                name: 'use-remote',
                type: Boolean,
                description: 'Use remote configuration',
            },
          ]
        }]
    help(sections);
}