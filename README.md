安装包下载工具

本项目使用react

### 项目开发

#### 
```
// 安装模块
yarn install

// 本地开发
yarn start 

// 本地开发使用了接口代理  配置信息在src/setupProxy.js中 
// 如果更改了接口代理地址，请重新执行 yarn start 来使其生效,代理接口在src/config/index.js
// 代理配置查请看 http-proxy-middleware

// 编译
yarn build
```
### UI

蚂蚁金服开源 [antd-mobile ](https://mobile.ant.design/index-cn)
使用了按需加载
modifyVars 定义基本主题，在css/theme.js
对于组件特定样式可以对组件二次包装