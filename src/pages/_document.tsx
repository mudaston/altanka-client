import { Html, Head, Main, NextScript } from 'next/document'

import { ResetStyles } from '@app/styles'

export default function Document() {
  return (
    <Html lang='uk'>
      <ResetStyles />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
