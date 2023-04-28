import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import { wrapper } from '@/app/store'
import { testSlice } from '@/app/store/testSlice'
import { Button } from '@shared/ui/button'
import { Link } from '@shared/ui/link'

const Home: NextPage<Page> = ({ mobile }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className='alt-p-sm'>Home page</div>
      <Link size='small' href='about'>
        To the About page :DDDD
      </Link>
      <Button variant='primary' as={Link} href={'/about'}>
        <div>
          <div>Добавить в корзину за 469</div>
          <br />
          <br />
          <div>Добавить в корзину за 469</div>
        </div>
      </Button>
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
