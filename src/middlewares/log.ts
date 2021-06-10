import { Middleware } from 'koa'
import log4js from 'log4js'

const outDir = 'logs'
const level = 'info'
const flag = true

log4js.configure({
  appenders: {
    cheese: {
      type: 'file',
      filename: `${outDir}/receive.log`,
    },
  },
  categories: {
    default: {
      appenders: ['cheese'],
      level: 'info',
    },
  },
  pm2: true,
})

const logger = log4js.getLogger()
logger.level = level

const log: () => Middleware = () => {
  return async (ctx, next) => {
    const { method, path, origin, query, body, headers, ip } = ctx.request
    await next()
    if (flag) {
      const { status, params } = ctx
      const data = {
        method,
        path,
        origin,
        query,
        body,
        ip,
        headers,
        status,
        params,
        result: ctx.body || 'no content',
      }
      if (ctx.body.status !== 200) {
        logger.error(JSON.stringify(data))
      } else {
        logger.info(JSON.stringify(data))
      }
    }
  }
}

export default log
