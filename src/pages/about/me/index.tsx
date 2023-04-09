import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Home: NextPage<{ name: string }> = ({ name }) => {
  const router = useRouter()

  const buttonClickHandler = () => {
    router.back()
  }

  const title = `${name} | About`

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {name}
      <button onClick={buttonClickHandler}>Back</button>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx

  return {
    props: {
      name: query.name,
    },
  }
}

export default Home
