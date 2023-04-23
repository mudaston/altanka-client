import { devices } from './devices'

const regular = devices
  .map((device) => {
    const indexOfDot = device.indexOf('.')
    const notFound = -1

    if (indexOfDot !== notFound) {
      const left = device.substring(0, indexOfDot)
      const right = device.substring(indexOfDot)
      const formattedDevice = `${left}\\${right}`

      return formattedDevice
    }

    return device
  })
  .join('|')

const regExp = new RegExp(regular, 'gim')

const isMobile = (userAgent: string) => Boolean(userAgent.match(regExp))

export { isMobile }
