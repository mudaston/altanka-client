const findUserAgentIndex = (headers: Array<string>) =>
  headers.findIndex((header: string) => header.match(/user-agent/gi))

export const getUserAgent = (headers: Array<string>) => {
  const index = findUserAgentIndex(headers)
  const notFound = -1

  if (index === notFound) {
    return ''
  }

  return headers[findUserAgentIndex(headers) + 1]
}
