const Koa = require('koa')
const cors = require('koa2-cors')
const getStatic = require('./static')
const bodyParser = require('koa-bodyparser')
const { restify } = require('./rest')
const controller = require('./controller')

const app = new Koa()

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
  await next()
})

app.use(cors({
  origin: '*',
  exposeHeaders: [
    'Connection',
    'Content-Length',
    'Content-Type',
    'Date',
    'Server',
    'Vary'
  ],
  maxAge: 1800, // 30 m
  credentials: false
}))
  .use(getStatic('/static/'))
  .use(bodyParser())
  .use(restify())
  .use(controller())
  .listen(3000)

console.log('app started at port 3000...')
