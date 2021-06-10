import { Middleware } from 'koa'

const response: () => Middleware = () => {
  return async (ctx, next) => {
    ctx.res.fail = (err) => {
      ctx.body = err
    }

    ctx.res.success = (message = 'success') => {
      ctx.body = {
        status: 200,
        data: ctx.body,
        message,
      }
    }

    await next()
  }
}

export default response
