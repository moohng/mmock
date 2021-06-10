import ip from 'ip'
import { ResponseData } from 'http'

let localIp: string

export function getIPAddress() {
  if (localIp) {
    return localIp
  }
  localIp = ip.address()
  return localIp
}

export function throwError(status: number, message = 'fail') {
  const err = new Error(message)
  err.status = status
  throw err
}
