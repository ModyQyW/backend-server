const path = require('path')
const mime = require('mime')
const fs = require('fs')

module.exports = (url) => async (ctx, next) => {
  const reqPath = ctx.request.path
  if (reqPath.startsWith(url)) {
    const fp = path.resolve(__dirname, reqPath.substring(url.length))
    if (fs.existsSync(fp)) {
      ctx.response.type = mime.getType(reqPath)
      ctx.response.body = fs.readFileSync(fp, { encoding: 'utf8' })
    } else {
      ctx.response.status = 404
    }
  } else {
    await next()
  }
}
