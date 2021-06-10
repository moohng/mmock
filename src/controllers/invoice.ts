import { Middleware } from 'koa'
import MockJS from 'mockjs'
import { invoice } from '../mock'

export const detail: Middleware = async ctx => {
  ctx.body = MockJS.mock(invoice.detail)
}

export const latestInfo: Middleware = async ctx => {
  ctx.body = MockJS.mock(invoice.latestInfo)
}
