import ip from 'ip'

let localIp: string

export function getIPAddress() {
  if (localIp) {
    return localIp
  }
  localIp = ip.address()
  return localIp
}
