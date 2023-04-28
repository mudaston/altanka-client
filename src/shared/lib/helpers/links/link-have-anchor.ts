import { findHash } from './link-regexes'

const linkHaveAnchor = (link: string): boolean => {
  const regex = findHash

  const have = Boolean(link.match(regex))

  return have
}

export { linkHaveAnchor }
