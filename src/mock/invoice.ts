export const detail = {
  status: 200,
  message: 'success',
  data: {
    workId: '@string("number", 12)',
    orderId: '@string("number", 12)',
    originalWorkId: '@string("number", 12)',
    originalOrderId: '@string("number", 12)',
    originalAmount: '@natural(0, 10000)',
    invoiceAmount: '@natural(0, 10000)',
    'invoiceAmountType|0-1': 0,
    buyer: '@cword(2, 20)',
    'buyerType|1-2': 1,
    'buyerRole|1': ['个人', '公司'],
    buyerTaxNum: '@id',
    buyerEmail: '@email',
    'status|1-7': 1,
    invoiceMessage: '@csentence',
    remark: '@cparagraph',
    invoiceTimeStr: '@datetime',
    createTimeStr: '@datetime',
  },
}

export const latestInfo = {
  status: 200,
  message: '',
  data: {
    buyer: '@cword(2, 20)',
    'buyerType|1-2': 1,
    buyerTaxNum: '@id',
    buyerEmail: '@email',
    remark: '@cparagraph',
    'userId|0-1000000': 0,
    userName: '@cname',
  },
}
