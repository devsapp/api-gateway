<!--
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-07-05 22:22:42
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-07-16 21:52:22
-->
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
edition: 1.0.0   #版本
name: my-project #项目名
access: default # 密钥别名
vars: # 全局变量
  domain: xxxx.yyy.com

services:
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
        - apiName: api2
          requestConfig:
            requestPath: /mul
          serviceConfig:
            servicePath: /newApi/mul
```
当然，更多灵活的配置我们也需要支持，对于如请求方法，域名，参数位置等，我们可以通过扩展`s.yaml`文件来进行设置。更多参数可见 [详细配置](#详细配置)

# 组件指令

## deploy

使用`deploy`指令，我们可以根据`s.yaml`文件快速的新建并部署一个api网关组。

如果我们在`s.yaml`中指定了api网关组，则组件会将本地的网关配置和远程进行比较，进行修改或是新增api网关组即相关配置

### 参数解析
| 参数全程 | 缩写 | 是否必填 |  含义  |
| --- | --- | --- |--- |
| --yes | -y |  否  | 是否直接采用本地配置对远端进行更改并部署|



## help

使用 help，我们可以快速的查看组件各指令的简介和参数配置

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
        - apiName: api2
          requestConfig:
            requestPath: /mul
          serviceConfig:
            servicePath: /newApi/mul
```

那么它的以下配置将是默认的：

- api网关组


- api网关

  ```yaml
  visibility: PRIVATE #该api不公开，当该组API在云市场上架时，私有类型的API不会上架。
  authType: ANONYMOUS #允许匿名调用
  resultType: JSOn #后端服务返回应答的格式
  resultSample: "200",
  forceNonceCheck: false #不检查X-Ca-Nonce
  disableInternet: false #不限制调用
  backendEnable: false #不启用后端服务
  webSocketApiType: COMMON #双向通信API类型：COMMON：普通API
  regionId: 根据你当前的s.ymal配置
  requestConfig: '{"RequestProtocol":"HTTP,HTTPS","RequestHttpMethod":"ANY","RequestMode":"PASSTHROUGH"}' #普通请求，HTTP协议，请求模式为入参穿透，请求方式为any
  serviceConfig: '{"ServiceProtocol":"HTTP","ServiceHttpMethod":"ANY","ServiceTimeout":"10000"}' #HTTP协议，请求方式为any，10000ms的延时
  ```

以及其他未被列出的配置，有些是非必填项或是暂时不需要关注到的，这里也没有涉及。


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