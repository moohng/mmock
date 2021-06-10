import { Middleware } from 'koa'
import MockJS from 'mockjs'
import { invoice } from '../mock'
import { throwError } from '../utils'

export const detail: Middleware = async ctx => {
  console.log(ctx.query)
  console.log(ctx.params)
  console.log(ctx.request.body)
  throwError(777, '我i的错误')

  ctx.body = MockJS.mock(invoice.detail)
}

export const latestInfo: Middleware = async ctx => {
  ctx.body = MockJS.mock(invoice.latestInfo)
}
