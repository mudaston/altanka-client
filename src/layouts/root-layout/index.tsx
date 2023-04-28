import React, { FC } from 'react'

import { montserrat } from './config'

import { Header } from '@widgets/header'

interface RootLayoutProps {
  children: React.ReactNode
  mobile: boolean
}

type Props = RootLayoutProps

const RootLayout: FC<Props> = ({ children, mobile }) => {
  return (
    <main className={montserrat.className}>
      <Header mobile={mobile} />
      {children}
    </main>
  )
}

export default RootLayout
