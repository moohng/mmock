import KoaRouter from 'koa-router'
import routes from './routes'

const router = new KoaRouter()

routes.forEach(({ path, method = 'get', controller = () => {} }) => {
  router[method](path, controller)
})

export default router
