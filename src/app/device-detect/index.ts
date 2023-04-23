const findUserAgentIndex = (headers: Array<string>) =>
  headers.findIndex((header: string) => header === 'User-Agent')

const getUserAgent = (headers: Array<string>) => {
  const index = findUserAgentIndex(headers)
  const notFound = -1

  if (index === notFound) {
    return ''
  }

  return headers[findUserAgentIndex(headers) + 1]
}

export { getUserAgent }
