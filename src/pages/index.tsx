import type { GetServerSideProps, NextPage } from 'next'
import { useEffect } from 'react'

import { Home as HomeView } from '@/app/pages/home'
import { wrapper } from '@/app/store'
import { testSlice } from '@/app/store/testSlice'
import { get, apiRoutes } from '@/shared/lib/api'

const Home: NextPage<Page> = () => {
  useEffect(() => {
    (async () => {
      const test = await get<{ username: string }>(apiRoutes.test)

      console.log(test)
    })()
  }, [])

  return (
    <>
      <HomeView />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    // store.dispatch(testSlice.actions.increment())
    store.dispatch(testSlice.actions.setNumber(12))

    return {
      props: {},
    }
  }
)

export default Home
