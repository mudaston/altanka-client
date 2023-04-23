import type { GetServerSideProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'

import { wrapper } from '@/app/store'
import { testSlice } from '@/app/store/testSlice'
import { Button } from '@shared/ui/button'

const MobileMenu = dynamic(() => import('@shared/ui/mobile-menu').then((mod) => mod.MobileMenu))
const DesktopMenu = dynamic(() => import('@shared/ui/desktop-menu').then((mod) => mod.DesktopMenu))

const Home: NextPage<Page> = ({ mobile }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className='alt-p-sm'>Home page</div>
      <Link href='about'>To the About page</Link>
      <Button variant='tretiary'>Добавить в корзину за 469</Button>
      {mobile && <MobileMenu />}
      {!mobile && <DesktopMenu />}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    // store.dispatch(testSlice.actions.increment())
    store.dispatch(testSlice.actions.setNumber(12))

    return {
      props: {},
    }
  }
)

export default Home
