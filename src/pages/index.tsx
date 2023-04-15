import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { wrapper } from '@/app/store'
import { testSlice } from '@/app/store/testSlice'
import { Button } from '@shared/ui/button'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className='alt-p-sm'>Home page</div>
      <Link href='about'>To the About page</Link>
      <Button variant='tretiary' as={Link} href='/about'>
        Добавить в корзину за 469
      </Button>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async (_context) => {
    // store.dispatch(testSlice.actions.increment())
    store.dispatch(testSlice.actions.setNumber(12))

    return {
      props: {},
    }
  }
)
