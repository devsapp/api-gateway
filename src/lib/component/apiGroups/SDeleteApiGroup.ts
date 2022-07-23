/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-20 00:15:11
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-23 16:35:26
 */
import { SAccess, SClientResponseBody } from "../../declaration";
import { SDescribeApis } from "../apiGateway/SDescribeApis";
import { SDescribeApiGroup } from "./SDescribeApiGroup";

/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-20 00:15:11
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-21 23:49:37
 */
export class SDeleteApiGroup {
    access: SAccess
    props
    constructor(AccessKeyID:string, AccessKeySecret:string, props) {
        this.access = {
            AccessKeyID,
            AccessKeySecret
        }
        this.props = props
    }
    /**
     * @description 一键删除api组
     */
    async deleteApiGroup(): Promise<SClientResponseBody>{
        //查询api组id
        const sdescribeApiGroups = new SDescribeApiGroup({
            access: this.access,
            region: this.props.region,
            groupName: this.props.groupName
        })
        const apiGroupsDescrib = await sdescribeApiGroups.describeApiGroups()
        if(!apiGroupsDescrib.responseStatus) return apiGroupsDescrib.error
        if(apiGroupsDescrib.apiGroupAttributes.apiGroupAttribute[0]?.groupName 
            !== this.props.groupName) return {
                responseStatus: false,
                error: 'no this apigroup'
            }
        const groupId = apiGroupsDescrib.apiGroupAttributes.apiGroupAttribute[0]?.groupId
        const sDescribeApis = new SDescribeApis({
            access: this.access,
            region: this.props.region,
            groupId
        })
        //查询api列表id
        let apis = []     
        let pageIndex = 0, totalCount = 1
        while(pageIndex * 10 < totalCount) {
            const apisDescrib = await sDescribeApis.describeApis(pageIndex)
            totalCount = apisDescrib.totalCount
            if(!apisDescrib.responseStatus) return apisDescrib.error
            apis = apis.concat(apisDescrib.apiSummarys.apiSummary.map(item => item.apiId))
            pageIndex++;
        } 
        console.log(apis)
        //批量下线api
        //批量删除api
        //删除api组
    }   
}