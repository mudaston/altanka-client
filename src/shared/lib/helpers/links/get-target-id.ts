import { findHash } from './link-regexes'

const getTargetId = (href: string) => href.replace(findHash, '#')

export { getTargetId }
