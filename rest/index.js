module.exports = {
  ApiError: function (msg) {
    // this 指向调用者
    this.suc = false
    this.msg = msg || 'Unknown Error'
  },
  restify: (prefix = '/api') => {
    return async (ctx, next) => {
      // 默认 Rest API 前缀为 /api
      if (ctx.request.path.startsWith(prefix)) {
        console.log(`Process API ${ctx.request.method} ${ctx.request.url}...`)
        try {
          ctx.rest = data => {
            ctx.response.type = 'application/json'
            ctx.response.body = {
              suc: true,
              msg: 'OK',
              data
            }
          }
          await next()
        } catch (e) {
          console.log('Process API error...')
          ctx.response.status = 200
          ctx.response.type = 'application/json'
          ctx.response.body = {
            suc: false,
            msg: e.msg || 'Unknown Error'
          }
        }
      } else {
        await next()
      }
    }
  }
}
