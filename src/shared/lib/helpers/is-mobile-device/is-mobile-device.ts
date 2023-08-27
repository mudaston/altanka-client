import { headers } from 'next/headers'

/**
 * `Indicates` that the `client` is a `phone`
 */
const isMobileDevice = () => Boolean(headers().get('mobile'))

export default isMobileDevice
