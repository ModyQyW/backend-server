# backend-server

**已废弃**

使用 koa2 构建的简单后端服务器。

English | [简体中文](README.CN.md)

## 起步

这些说明将让你得到能在本地启动、运行的项目副本以进行开发和测试。有关如何在实时系统上部署项目，请参阅[部署](#部署)。

### 准备

- 推荐使用 nvm，长期支持版 lts node，长期支持版 npm 和 yarn。
  - 参照以下链接，首先安装 nvm
    - [nvm for Mac/Linux](https://github.com/nvm-sh/nvm)
    - [nvm-windows](https://github.com/coreybutler/nvm-windows)
    - 使用 [Homebrew](https://brew.sh/) 在 Mac 安装 nvm 是**不**推荐的
  - 接着在终端/命令行安装长期支持版 node

    ```sh
    nvm install --lts
    ```

  - 全局升级 npm 到长期支持版，安装 yarn

    ```sh
    npm i -g npm@lts
    npm i -g yarn
    ```

  - 如果你是国人，或许你应该设置镜像
- Git 也是需要的
  - [git for Windows/Linux](https://git-scm.com/downloads)
  - 使用 [Homebrew](https://brew.sh/) 在 Mac 安装 git 是推荐的

### 安装

```sh
# clone corresponding backend server
git clone git@github.com:ModyQyW/backend-server.git

# enter the server directory
cd backend-server

# install dependency
yarn

# start server
yarn start

# use pm2 start server
yarn start:pm2

# pm2 list
yarn list:pm2

# use pm2 stop server
yarn stop:pm2 [id got from yarn list:pm2]
```

## 测试

目前没有测试。欢迎 PR。

## 部署

目前没有部署。欢迎 PR。**注意**：该项目非常简单，**不**建议投入生产环境使用。

## 主要依赖

- [koa2](https://koajs.com/)：使用 ES2017 异步函数的 node.js 的富有表现力的中间件
- [koa-bodyparser](https://github.com/koajs/bodyparser)：koa 的 body 解析器，基于co-body
- [@koa/router](https://github.com/koajs/router)：koa 的路由中间件
- [koa2-cors](https://github.com/zadzbw/koa2-cors)：koa2 的 CORS 中间件
- [mime](https://github.com/broofa/node-mime)：一个全面，紧凑的MIME类型模块
- [pm2](http://pm2.keymetrics.io/)：Node.js的高级生产流程管理器
- [eslint](https://eslint.org)：一个为 JavaScript 提供了可插入的规范代码能力的开源项目，这个项目里使用了 [standard](https://standardjs.com/readme-zhcn.html)

## 贡献

请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解行为准则以及提交拉取请求的流程的详细信息。

## 版本命名

使用 [SemVer](http://semver.org/) 进行版本控制。有关可用版本，请参阅此仓库的 [releases](https://github.com/ModyQyW/backend-server/releases)。

## 作者

- **Rui Wu** - *最初工作* - [ModyQyW](https://github.com/ModyQyW)

另请参阅参与此项目的 [contributors](https://github.com/ModyQyW/backend-server/contributors) 列表。

## 协议

[MIT](./LICENSE)

Copyright (c) 2019-present ModyQyW

## 致谢

- [easy-mock](https://github.com/easy-mock/easy-mock)
