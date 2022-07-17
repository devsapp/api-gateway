/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-11 23:17:17
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-17 16:12:44
 */

export const mdecorate: MethodDecorator = (target, propertyKey, descriptor) => {
    console.log(target, propertyKey, descriptor)
}
