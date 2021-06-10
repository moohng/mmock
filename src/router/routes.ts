import { Middleware } from 'koa'
import { invoice } from '../controllers'

export interface Route {
  path: string;
  method?: 'get' | 'post' | 'put' | 'delete';
  controller?: Middleware;
}

const routes: Route[] = [
  {
    path: '/erp/invoice/brand/getInvoiceInfoByWorkId',
    method: 'post',
    controller: invoice.detail,
  },
  {
    path: '/invoice/getLatelyInvoice',
    method: 'get',
    controller: invoice.latestInfo,
  },
  {
    path: '/invoice/apply',
    method: 'post',
    controller: invoice.detail,
  },
]

export default routes
