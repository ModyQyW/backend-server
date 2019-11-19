# backend-server

A simple backend server, built with koa2.

English | [简体中文](README.CN.md)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

- Using nvm, node lts, npm lts and yarn is recommended.
  - Follow the links below and install nvm first
    - [nvm for Mac/Linux](https://github.com/nvm-sh/nvm)
    - [nvm-windows](https://github.com/coreybutler/nvm-windows)
    - Using [Homebrew](https://brew.sh/) to install nvm on Mac is **NOT** recommended
  - Then install node lts in terminal / command line

    ```sh
    nvm install --lts
    ```

  - Globally update npm to lts and install yarn

    ```sh
    npm i -g npm@lts
    npm i -g yarn
    ```

  - If you are Chinese, maybe you should set mirrors
- Git is also required.
  - [git for Windows/Linux](https://git-scm.com/downloads)
  - Using [Homebrew](https://brew.sh/) to install git on Mac is recommended.

### Installing

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

## Running the tests

No tests now. Pull requests are welcome.

## Deployment

No deployment now. Pull requests are welcome.

**Notice**: this project is very simple so it is **NOT** recommended for use in production environment.

## Built With

- [koa2](https://koajs.com/) - Expressive middleware for node.js using ES2017 async functions
- [koa-bodyparser](https://github.com/koajs/bodyparser) - A body parser for koa, base on co-body
- [@koa/router](https://github.com/koajs/router) - Router middleware for koa
- [koa2-cors](https://github.com/zadzbw/koa2-cors) - CORS middleware for koa2
- [mime](https://github.com/broofa/node-mime) - A comprehensive, compact MIME type module
- [pm2](http://pm2.keymetrics.io/) - Advanced, production process manager for Node.js
- [eslint](https://eslint.org) - An open source project provided a pluggable linting utility for JavaScript, using [standard](https://standardjs.com/) in the project

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on code of conduct, and the process for submitting pull requests.

## Versioning

Use [SemVer](http://semver.org/) for versioning. For the versions available, see the [releases on this repository](https://github.com/ModyQyW/backend-server/releases).

## Authors

- **Rui Wu** - *Initial work* - [ModyQyW](https://github.com/ModyQyW)

See also the list of [contributors](https://github.com/ModyQyW/backend-server/contributors) who participated in this project.

## License

[MIT](./LICENSE)

Copyright (c) 2019-present ModyQyW

## Acknowledgments

- [easy-mock](https://github.com/easy-mock/easy-mock)
