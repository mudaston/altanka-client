const findUserAgentIndex = (headers: Array<string>) =>
  headers.findIndex((header: string) => header === 'User-Agent')

const getUserAgent = (headers: Array<string>) => headers[findUserAgentIndex(headers) + 1]

export { getUserAgent }
