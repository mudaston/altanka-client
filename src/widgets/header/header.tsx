import dynamic from 'next/dynamic'
import React, { FC } from 'react'

const MobileMenu = dynamic(() =>
  import('@shared/ui/mobile-menu').then(({ MobileMenu }) => MobileMenu)
)
const DesktopMenu = dynamic(() =>
  import('@shared/ui/desktop-menu').then(({ DesktopMenu }) => DesktopMenu)
)

interface HeaderProps {
  mobile: boolean
}

type Props = HeaderProps

const header: FC<Props> = ({ mobile }) => {
  const DesktopView = !mobile && <DesktopMenu />
  const MobileView = mobile && <MobileMenu />

  return (
    <>
      {DesktopView}
      {MobileView}
    </>
  )
}

export default header
