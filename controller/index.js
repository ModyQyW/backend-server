const fs = require('fs')
const path = require('path')
const router = require('@koa/router')()

const prefix = '/api'

const getUrl = (path) => {
  if (path.startsWith('/')) {
    return prefix + path
  }
  return prefix + '/' + path
}

module.exports = () => {
  fs.readdirSync(path.resolve(__dirname))
    .filter(f => f.endsWith('.js'))
    .filter(f => !f.startsWith('index') && !f.startsWith('404'))
    .forEach(f => {
      console.log(`process controller: ${f}...`)
      const apis = require(path.resolve(__dirname, f))
      apis.forEach(api => {
        router[api.method](getUrl(api.path), api.func)
      })
    })
  require(path.resolve(__dirname, '404.js'))
    .forEach(api => {
      router[api.method](getUrl(api.path), api.func)
    })
  return router.routes()
}
