import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import { wrapper } from '@/app/store'
import { testSlice } from '@/app/store/testSlice'
import { Button } from '@shared/ui/button'
import { Link } from '@shared/ui/link'
import { Product } from '@widgets/product'

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
      <Button href={'/about'} variant='secondary' as={Link}>
        Hello world
      </Button>
      {/*
        // TODO: Create component "Section"
      */}
      <section>
        <h1>Chebureks</h1>
        <Product />
      </section>

      <section id='section' style={{ paddingTop: 1550 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi deserunt quibusdam
        accusamus at sint esse. Dolore necessitatibus ratione aliquam sint pariatur recusandae velit
        doloribus rem alias, suscipit fugiat quo modi? Excepturi provident deleniti est quos
        mollitia culpa perspiciatis, aliquid aliquam maiores ut. Enim unde consectetur non nihil
        laboriosam odio! Voluptatibus repellat error in autem eveniet a dignissimos est blanditiis
        ipsa! Mollitia, quisquam velit id laudantium consectetur atque, eius praesentium rem ducimus
        officiis dolores? Nesciunt earum, sapiente suscipit ipsam fugiat eius quod dolorem. Sed,
        beatae veniam. Quasi at error sint. Officia? Amet nulla omnis iure cupiditate consequuntur
        nostrum consequatur repellat, molestias alias et sequi asperiores illo quos perferendis eos
        fugiat porro beatae! Harum adipisci consectetur sit amet accusamus, alias delectus ut! Sit
        rem modi praesentium quas, eveniet inventore natus quisquam quia molestias nulla hic quis
        reprehenderit maxime quasi ipsam aliquid, atque omnis sint, odio ducimus eligendi. Quos ab
        eos non maiores! Quam possimus a pariatur suscipit odit itaque sint accusantium maxime,
        distinctio dolorem harum, assumenda deleniti sequi minima facere ipsam doloribus nemo,
        aspernatur perspiciatis repellendus magnam voluptas ratione labore rem. Quae. Commodi
        dolorum nisi accusamus odit ipsa voluptates quasi cupiditate optio fugiat, veritatis
        architecto modi adipisci, recusandae nemo quaerat, molestias iure debitis? Laboriosam,
        officia molestiae tempora consequuntur fugiat amet pariatur vitae? Accusamus pariatur quae
        quis natus praesentium soluta, aut, repellendus ad dolorem beatae iste. Doloribus quasi,
        accusamus delectus dolores eum consequatur. Eius, totam? Eius neque non veritatis sapiente
        laudantium adipisci? Error. Ipsam voluptates voluptatem dolore cum quam dicta tempora saepe
        iusto optio et? A eum illo hic dolore dignissimos commodi ipsa praesentium esse cumque,
        aliquid eligendi tempora tempore unde consequatur reprehenderit! Cumque excepturi quod
        reiciendis aliquam eos? Exercitationem eaque quam dignissimos atque velit, magnam, suscipit
        officiis eum veniam dolorum ex recusandae fugit id esse ab nihil vel nobis culpa cum
        quisquam! Quos corrupti ipsa labore beatae provident voluptatum, nesciunt inventore
        praesentium rerum aut tenetur odit minus earum sequi, iure ad repudiandae natus cum.
        Excepturi dicta totam expedita debitis a facere eaque? Magnam architecto libero quaerat,
        quae voluptatibus itaque nesciunt est sed quasi repellendus maiores recusandae ipsam neque
        ex veniam rem vero odit sint voluptatem tenetur nulla illum id quia? Molestias, ullam.
        Exercitationem unde rerum earum minus ipsum impedit omnis ratione, officia cumque ab totam
        similique eius, vitae, distinctio aspernatur iure harum nobis eligendi saepe quia!
        Consequatur eos quia accusamus molestias illum?
      </section>
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
