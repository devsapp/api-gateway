

<h1 align="center">阿里云API网关组件</h1>
<p align="center" class="flex justify-center">
  <a href="https://nodejs.org/en/" class="ml-1">
    <img src="https://img.shields.io/badge/node-%3E%3D%2010.8.0-brightgreen" alt="node.js version">
  </a>
  <a href="https://github.com/devsapp/api-gateway/blob/master/LICENSE" class="ml-1">
    <img src="https://img.shields.io/badge/License-MIT-green" alt="license">
  </a>
  <a href="https://github.com/devsapp/api-gateway/issues" class="ml-1">
    <img src="https://img.shields.io/github/issues/devsapp/api-gateway" alt="issues">
  </a>
</p>

# 组件简介
`api-gateway`组件针对于云厂商的api网关产品开发而来：避免重复复杂的操作，采用简单的统一配置文件（s.yaml），快速完成api网关的配置和部署。


# 快速开始

🙋 两步即可上手`api-gateway`组件的使用：

❶ 完成极简或全面的配置（一切通过s.yaml文件）

❷ 使用`s api-gateway deploy`快速部署你的第一个api网关组吧

# 基础配置

对于一个`s.yaml`文件，我们如果需要配置两个api网关，最简单的方式可以是这样：

``` yaml
edition: 1.0.0 #  命令行YAML规范版本，遵循语义化版本（Semantic Versioning）规范
name: component-test   #  项目名称
access: default # 密钥别名
vars: # [全局变量，提供给各个服务使用]
  region: cn-hangzhou
services:
  api-gateway:
    component: api-gateway
    props: 
      groupName: auto #组名，当为auto时，默认随机生成一个组名
      region: ${vars.region} #使用全局的地区设置
      apis: 
        - apiName: api1
          requestConfig: #api网关前端配置
            requestPath: /add
          serviceConfig: #api网关后端配置
            servicePath: /api/add
            serviceAddress: http://www.example.com
        - apiName: api2
          requestConfig:
            requestPath: /mul
          serviceConfig:
            servicePath: /newApi/mul
            serviceAddress: http://www.example2.com
```
当然，更多灵活的配置我们也需要支持，对于如请求方法，域名，参数位置等，我们可以通过扩展`s.yaml`文件来进行设置。更多参数可见 [详细配置](#详细配置)

# 组件指令

## deploy

使用`deploy`指令，我们可以根据`s.yaml`文件快速的新建并部署一个api网关组。

如果我们在`s.yaml`中指定了api网关组，则组件会将本地的网关配置和远程进行比较，进行修改或是新增api网关组即相关配置

### 参数解析
| 参数全程 | 缩写 | 是否必填 |  含义  |
| --- | --- | --- |--- |
| --help | -h | 否 | 查看deploy指令帮助文档|
| --use-local |  | 否 | 使用本地 (此时远程应已有相应的api组配置，修改后将重新部署到线上)|
| --use-remote |  | 否 | 使用远程|

## remove
使用`remove`指令，我们可以快速删除`s.yaml`文件中指定的api网关组。**请注意：** 若线上本身就没有该apiGroup，也会成功返回，但是会提示`无该api组`

## domain
使用`domain`指令，我们可以快绑定域名，其使用方式为：
```
s api-gateway domain xxx.com
```
根据所传参数，组件将会尝试将自定义域名绑定在该网关组上。实际使用中，我们只需要将`xxx.com`换成您需要绑定的域名即可。
**请注意：** 域名在绑定之前，需要我们将其备案并且正确解析，详细步骤可参考：[分组的域名绑定](https://help.aliyun.com/document_detail/159014.html)。



# 详细配置

## 默认配置

对于一个最简单的配置文件来说（如下面列出的yaml局部文件）：

```yaml
gateway:
    component: api-gateway
    props: 
      groupName: auto #组名，当为auto时，默认随机生成一个组名
      apis: 
        - apiName: api1
          requestConfig: #api网关前端配置
            requestPath: /add
          serviceConfig: #api网关后端配置
            servicePath: /api/add
            serviceAddress: http://www.example.com
        - apiName: api2
          requestConfig:
            requestPath: /mul
          serviceConfig:
            servicePath: /newApi/mul
            serviceAddress: http://www.example2.com
```

那么它的以下配置将是默认的：

- api网关组
  ```yaml
  instance: api-shared-vpc-001
  ```

- api网关

  ```yaml
  visibility: PRIVATE #该api不公开，当该组API在云市场上架时，私有类型的API不会上架。
  authType: ANONYMOUS #允许匿名调用
  resultType: JSON #后端服务返回应答的格式
  resultSample: "200",
  forceNonceCheck: false #不检查X-Ca-Nonce
  disableInternet: false #不限制调用
  backendEnable: false #不启用后端服务
  webSocketApiType: COMMON #双向通信API类型：COMMON：普通API
  requestConfig: '{"requestProtocol":"HTTP,HTTPS","requestHttpMethod":"ANY","requestMode":"PASSTHROUGH"}' #普通请求，HTTP协议，请求模式为入参穿透，请求方式为any
  serviceConfig: '{"serviceProtocol":"HTTP","serviceHttpMethod":"ANY","serviceTimeout":"10000"}' #HTTP协议，请求方式为any，10000ms的延时
  ```

以及其他未被列出的配置，有些是非必填项或是暂时不需要关注到的，这里也没有涉及。

如果我们需要进一步对配置文件编辑，这里有一份参数配置清单：

###  props:

| 名称          | 类型            | 必选 | 示例               | 说明          |
| ------------- | --------------- | ---- | ------------------ | ------------- |
| groupName     | String          | 是   | apiGroup1          | 网关组名称    |
| description   | String          | 否   | 这是一段描述       | 分组描述      |
| region        | String          | 是   | cn-hangzhou        | 分组所在区域  |
| basePath      | String          | 是   | /api               | 基准路径      |
| instanceId    | String          | 否   | api-shared-vpc-002 | 实例ID        |
| custom_domain | String          | 否   | demo.com           | 自定义域名    |
| apis          | **ApiConfig[]** | 是   |                    | api配配置数组 |

### ApiConfig:

| 名称                 | 类型          | 必选 | 示例                                                         | 说明                                                         |
| -------------------- | ------------- | ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| apiName              | String        | 是   | api1                                                         | api名称                                                      |
| description          | String        | 否   | 这是一段描述                                                 | api描述                                                      |
| Visibility           | String        | 否   | PUBLIC                                                       | **PUBLIC**：公开，如选择此类型，该API的线上环境，会在所有用户的控制台“发现API”页面展示 **PRIVATE**：不公开，如选择此类型，当该组API在云市场上架时，私有类型的API不会上架 |
| requestConfig        | RequestConfig | 是   |                                                              | Consumer向网关发送API请求的相关配置项                        |
| serviceConfig        | ServiceConfig | 是   |                                                              | 网关向后端服务发送API请求的相关配置项                        |
| requestParameters    | Array         |      | [{"ParameterType":"Number","Required":"OPTIONAL","isHide":false,   "ApiParameterName":"age","DefaultValue":"20","DemoValue":"20", "Description":"年龄","MinValue":18,"MaxValue":100,"Location":"Head"},  {"ParameterType":"String","Required":"OPTIONAL","isHide":false,    "ApiParameterName":"sex","DefaultValue":"boy","DemoValue":"boy",    "Description":"性别",  "EnumValue":"boy,girl","Location":"Query"},{"ParameterType":"Number","Required":"REQUIRED","isHide":false,  "ApiParameterName":"userId","MaxLength":10,"MinValue":10000000,  "MaxValue":100000000,"Location":"Path"},{"ApiParameterName":"CaClientIp","ParameterLocation":{"name":"Head","orderNumber":0},"Location":"Head","ParameterType":"String",  "Required":"REQUIRED","Description":"客户端IP"},{"ApiParameterName":"constance","ParameterLocation":{"name":"Head","orderNumber":0},"Location":"Head","ParameterType":"String",  "Required":"REQUIRED","DefaultValue":"constance","Description":"constance"}] | Consumer向网关发送API请求的参数描述                          |
| serviceParameters    | Array         | 否   | [{"ParameterType":"Number","Required":"OPTIONAL","isHide":false, "ApiParameterName":"age",  "DefaultValue":"20","DemoValue":"20","Description":"年龄","MinValue":18,"MaxValue":100,"Location":"Head"},{"ParameterType":"String",  "Required":"OPTIONAL","isHide":false,"ApiParameterName":"sex",  "DefaultValue":"boy","DemoValue":"boy","Description":"性别",   "EnumValue":"boy,girl","Location":"Query"},{"ParameterType":"Number","Required":"REQUIRED","isHide":false,  "ApiParameterName":"userId","MaxLength":10, "MinValue":10000000,"MaxValue":100000000, "Location":"Path"},{"ApiParameterName":"CaClientIp","ParameterLocation":{"name":"Head","orderNumber":0},"Location":"Head","ParameterType":"String",  "Required":"REQUIRED","Description":"客户端IP"},  {"ApiParameterName":"constance","ParameterLocation":{"name":"Head","orderNumber":0},"Location":"Head",  "ParameterType":"String","Required":"REQUIRED", "DefaultValue":"constance","Description":"constance"}] | 网关向后端服务发送API请求的参数描述                          |
| systemParameters     | Array         | 否   | [{\"ParameterName\": \"CaAppId\", \"Location\": \"HEAD\", \"ServiceParameterName\": \"x-ca-appid\"}] |                                                              |
| serviceParametersMap | Array         | 否   | [{"ServiceParameterName":"age",    "RequestParameterName":"age"},    {"ServiceParameterName":"sex",   "RequestParameterName":"sex"},    {"ServiceParameterName":"userId",    "RequestParameterName":"userId"},    {"ServiceParameterName":"clientIp",     "RequestParameterName":"CaClientIp"},    {"ServiceParameterName":"constance",  "RequestParameterName":"constance"}] | Consumer向网关发送请求的参数和网关向后端服务发送的请求的参数的映射关系(如果选择请求模式为映射) |
| resultType           | String        | 否   | JSON                                                         | 后端服务返回应答的格式                                       |
| resultSample         | String        | 否   | 200                                                          | 后端服务返回应答的示例                                       |
| webSocketApiType     | String        | 否   | **COMMON**                                                   | 双向通信API类型：  **COMMON**:普通API **REGISTER**:注册API **UNREGISTER**:注销API **NOTIFY**:下行通知 |
| disableInternet      | Boolean       | 否   | false                                                        | 设置DisableInternet为**true**, 仅支持内网调用API。 设置DisableInternet为**false**, 则不限制调用。 |
| backendEnable        | Boolean       | 否   | false                                                        | 是否启用后端服务                                             |
| backendId            | String        | 否   | 0d105f80a8f340408bd34954d4e4ff22                             | 后端服务ID                                                   |
| allowSignatureMethod | String        | 否   | HmacSHA256                                                   | API的客户端请求签名方法，可选值：  HmacSHA256 HmacSHA1,HmacSHA256 |
| openIdConnectConfig  | Object        | 否   | {\"OpenIdApiType\":\"IDTOKEN\", \"PublicKey\":\"lzlj1573\",   \"IdTokenParamName\":\"\", \"PublicKeyId\":\"lzljorders\"} | 第三方账号认证OpenID Connect相关配置项                       |
| errorCodeSamples     | Array         |      | [{"Code":"400","Message":"Missing the userId","Description":"参数错误"}] | 后端服务返回的错误码示例                                     |
| failResultSample     | Object        |      | {"errorCode":"fail","errorMessage":"param invalid"}          | 后端服务失败返回应答的示例 该值仅用于生成文档使用。不对返回结果产生影响。 |



### RequestConfig:

| 名称                | 类型   | 必选 | 示例        | 说明                                                         |
| ------------------- | ------ | ---- | ----------- | ------------------------------------------------------------ |
| requestPath         | String | 是   | /api1       | API path                                                     |
| requestProtocol     | String | 否   | HTTP,HTTPS  | API 支持的协议类型，可以多选，多选情况下以英文逗号隔开，如："HTTP,HTTPS"，取值为：HTTP、HTTPS |
| requestHttpMethod   | String | 否   | GET         | HTTP Method，取值为：GET、POST、DELETE、PUT、HEADER、TRACE、PATCH、CONNECT、OPTIONS（默认ANY） |
| requestMode         | String | 否   | PASSTHROUGH | 请求的模式，取值为：MAPPING、PASSTHROUGH，分别表示入参映射、入参透传(默认) |
| BodyFormat          | String | 否   | FORM        | POST/PUT请求时，表示数据以何种方式传递给服务器，取值为：FORM、STREAM，分别表示表单形式(k-v对应)、字节流形式。当RequestMode值为MAPPING时有效。 |
| PostBodyDescription | String | 否   |             | Body描述                                                     |

### ServiceConfig:

| 名称                  | 类型                  | 必选 | 示例                                             | 说明                                                         |
| --------------------- | --------------------- | ---- | ------------------------------------------------ | ------------------------------------------------------------ |
| servicePath           | String                | 是   | /                                                |                                                              |
| serviceAddress        | String                | 否   | http://demo.com                                  | 后端服务地址，普通HTTP(s)模式时必填                          |
| serviceProtocol       | String                |      | FunctionCompute                                  | 后端服务协议类型，目前只支持HTTP/FunctionCompute 即普通HTTP和函数计算模式 |
| functionComputeConfig | FunctionComputeConfig | 否   |                                                  | 当后端是函数计算时，即ServiceProtocol=FunctionCompute，需要配置函数计算相关参数 |
| serviceHttpMethod     | String                | 否   | POST                                             | 调用后端服务HTTP协议时的Method，取值为：GET、POST、DELETE、PUT、HEADER、TRACE、PATCH、CONNECT、OPTIONS （默认ANY） |
| serviceTimeout        | String                | 否   | 6000                                             | 后端服务超时时间，单位：毫秒 （默认10000ms）                 |
| contentTypeCategory   | String                | 否   | CLIENT                                           | 调用后端服务HTTP服务时，ContentType头的取值策略：DEFAULT：API网关默认   CUSTOM：自定义     CLIENT：使用客户端上行的ContentType的头 |
| contentTypeValue      | String                | 否   | application/x-www-form-urlencoded; charset=UTF-8 | 调用后端服务HTTP服务，ContentTypeCatagory的值为DEFAULT或者CUSTOM时，ContentType头的取值。 |

### FunctionComputeConfig:

| 名称         | 类型   | 必选 | 示例                    | 说明                                       |
| ------------ | ------ | ---- | ----------------------- | ------------------------------------------ |
| fcType       | String | 是   | FCEvent                 | FCEvent或HttpTrigger表示事件触发或函数触发 |
| fcRegionId   | String | 是   | cn-shenzhen             | 函数计算所在Region                         |
| functionName | String | 是   | func1                   | 函数计算定义的FunctionName                 |
| serviceName  | String | 是   | service1                | 函数计算定义的ServiceName                  |
| roleArn      | String | 是   | `acs:ram::xxx:role/xxx` | Ram授权给API网关访问函数计算的arn          |



其中支持使用`auto`的字段为:

- `groupName` api组名称 (不建议)
- `basePath` api组基础路由

# 开源许可

Serverless Devs FC 组件遵循 [MIT License](./LICENSE) 开源许可。

位于`node_modules`和外部目录中的所有文件都是本软件使用的外部维护库，具有自己的许可证；我们建议您阅读它们，因为它们的条款可能与[MIT License](./LICENSE)的条款不同。


# 交流社区

您如果有关于错误的反馈或者未来的期待，您可以在 [Serverless Devs repo Issues](https://github.com/serverless-devs/serverless-devs/issues) 或 [Fc repo Issues](https://github.com/devsapp/fc/issues) 中进行反馈和交流。如果您想要加入我们的讨论组或者了解 FC 组件的最新动态，您可以通过以下渠道进行：

<p align="center">

| <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407298906_20211028074819117230.png" width="200px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407044136_20211028074404326599.png" width="200px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407252200_20211028074732517533.png" width="200px" > |
|--- | --- | --- |
| <center>关注微信公众号：`serverless`</center> | <center>联系微信小助手：`xiaojiangwh`</center> | <center>加入钉钉交流群：`33947367`</center> |

</p>
