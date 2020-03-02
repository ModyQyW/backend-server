module.exports = {
  ApiError: function (msg) {
    // this is equal to caller
    this.suc = false
    this.msg = msg || 'Unknown Error'
  },
  restify: (prefix = '/api') => {
    return async (ctx, next) => {
      // default Rest API prefix is /api
      if (ctx.request.path.startsWith(prefix)) {
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
