import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { wrapper } from '@/app/store'
import { testSlice } from '@/app/store/testSlice'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      Home page
      <Link href='about'>To the About page</Link>
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
