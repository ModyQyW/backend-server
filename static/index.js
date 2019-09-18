const path = require('path')
const mime = require('mime')
const fs = require('fs')

module.exports = (url) => async (ctx, next) => {
  const rpath = ctx.request.path
  if (rpath.startsWith(url)) {
    const fp = path.resolve(__dirname, rpath.substring(url.length))
    if (fs.existsSync(fp)) {
      ctx.response.type = mime.getType(rpath)
      ctx.response.body = fs.readFileSync(fp, { encoding: 'utf8' })
    } else {
      ctx.response.status = 404
    }
  } else {
    await next()
  }
}
