import cors from '@koa/cors'
import koaBody from 'koa-bodyparser'
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
  formLimit: '56kb',
  jsonLimit: '1mb',
  textLimit: '1mb',
  strict: true,
})

/**
 * 路由模块
 */
const mdRoute = router.routes()
const mdRouterAllowed = router.allowedMethods()

export default [
  mdCors,
  mdKoaBody,
  mdRoute,
  mdRouterAllowed,
]
