import https from 'https'
import http from 'http'
import fs from 'fs'
import path from 'path'
import Koa from 'koa'
import compose from 'koa-compose'
import mds from './middlewares'
import { getIPAddress } from './utils'

const app = new Koa()

app.on('error', (err, ctx) => {
  if (ctx) {
    ctx.body = {
      status: 9999,
      message: `程序运行时报错：${err.message}`,
    }
  }
})

/**
 * 使用中间件
 */
app.use(compose(mds))

/**
 * 启动 HTTP 服务
 */
const HTTP_PORT = 8808
const HOST = '0.0.0.0'

http.createServer(app.callback()).listen(HTTP_PORT, HOST, () => {
  console.log('Mock 服务已启动：http://%s:%s', getIPAddress(), HTTP_PORT)
})

/**
 * 启动 HTTPS 服务
 */
try {
  const httpsOption = {
    key: fs.readFileSync(path.resolve('./open_ssl/privatekey.pem')),
    cert: fs.readFileSync(path.resolve('./open_ssl/certificate.pem')),
  }

  const HTTPS_PORT = 8088

  https.createServer(httpsOption, app.callback()).listen(HTTPS_PORT, HOST, () => {
    console.log('Mock 服务已启动：https://%s:%s', getIPAddress(), HTTPS_PORT)
  })
} catch (err) {}
