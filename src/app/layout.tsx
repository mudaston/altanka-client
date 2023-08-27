import React from 'react'

import { montserrat } from '@app/config'
import { isMobileDevice } from '@shared/lib/helpers/is-mobile-device'
import { Header } from '@widgets/header'

import '@app/styles/scss/main.scss'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const mobile = isMobileDevice()

  console.log(mobile)

  return (
    <html lang='uk'>
      <head>
        <title>awd</title>
      </head>
      <body>
        <main id='page' className={montserrat.className}>
          <Header mobile={mobile} />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
