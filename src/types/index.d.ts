import 'http'

declare module 'http' {
  export interface ResponseData {
    status: number
    data: any
    message: string
  }

  interface ServerResponse {
    success: (message?: string) => void
    fail: (err: ResponseData) => void
  }
}

declare global {
  interface Error {
    status: number
  }
}
