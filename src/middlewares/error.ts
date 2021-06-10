import { Middleware } from 'koa'

const error: () => Middleware = () => {
  return async (ctx, next) => {
    try {
      await next()
      if (ctx.status === 200) {
        ctx.res.success()
      }
    } catch (err) {
      if (err.status) {
        ctx.res.fail({
          status: err.status,
          data: null,
          message: err.message,
        })
      } else {
        ctx.app.emit('error', err, ctx);
      }
    }
  }
}

export default error
