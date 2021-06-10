import cors from '@koa/cors'
import koaBody from 'koa-bodyparser'
import response from './response'
import error from './error'
import log from './log'
import router from '../router'

/**
 * 解决跨域
 */
const mdCors = cors({
  origin: '*',
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE', 'PUT'],
})

/**
 * 参数解析
 */
const mdKoaBody = koaBody({
  enableTypes: ['json', 'form', 'text', 'xml'],
})

/**
 * 请求日志
 */
const mdLogger = log()

/**
 * 统一返回
 */
const mdResponseHandler = response()
const mdErrorHandler = error()

/**
 * 路由模块
 */
const mdRoute = router.routes()
const mdRouterAllowed = router.allowedMethods()

export default [
  mdCors,
  mdKoaBody,
  mdLogger,
  mdResponseHandler,
  mdErrorHandler,
  mdRoute,
  mdRouterAllowed,
]
