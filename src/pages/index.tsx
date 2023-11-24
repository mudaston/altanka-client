import { md5 } from 'js-md5'
import Head from 'next/head'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import { useRouterPath } from '@/shared/hooks/use-router-path'
import Modal from '@/shared/ui/modal/modal'
import { chebureks } from '@entities/chebureks'
import { Button } from '@shared/ui/button'
import { Link } from '@shared/ui/link'
import { Product } from '@widgets/product'

const Home = () => {
  const router = useRouter()

  const { asPath } = useRouterPath()

  const sendPayRequest = async () => {
    const secretKey = '907cf54af2ef55438ffb8dc876ef465fe5fa9bd0'
    const orderDate = Date.now()

    console.log({ orderDate })

    const merchantSignature = md5.hmac(
      secretKey,
      `site_ua1;altanka-client.vercel.app;DH783023;${orderDate};1;UAH;TEST;1;1;`
    )

    const req = await fetch('https://secure.wayforpay.com/pay', {
      method: 'POST',
      body: JSON.stringify({
        merchantAccount: 'site_ua1',
        merchantDomainName: 'https://altanka-client-mudaston.vercel.app',
        merchantTransactionSecureType: 'AUTO',
        orderReference: 'DH783023',
        orderDate,
        amount: 1,
        currency: 'UAH',
        productName: ['TEST'],
        productPrice: ['1'],
        productCount: [1],
        merchantSignature,
      }),
    })

    console.log(req)
    console.log(await req.json())

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then((response) => response.json())
    //   .then((json) => console.log(json))
  }

  return (
    <>
      <Modal watchParam={asPath}>
        <div
          style={{
            minHeight: 150,
            background: 'red',
            position: 'relative',
          }}
        >
          <div>HELLO WORLD!</div>
          <div
            onClick={() => router.back()}
            style={{
              position: 'absolute',
              top: -15,
              right: -15,
              background: '#fff',
              fontSize: 24,
            }}
          >
            X
          </div>
        </div>
      </Modal>
      <Head>
        <title>Home</title>
      </Head>
      <div>Home page</div>
      <Link size='small' href='about'>
        To the About page :DDDD
      </Link>
      <Button href={'/about'} variant='secondary' as={Link}>
        Hello world
      </Button>
      {/*
      // TODO: Create component "Section"
    */}
      <Button variant='primary' onClick={sendPayRequest}>
        WayForPay
      </Button>
      <section
        style={{
          padding: '100px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '50px 40px',
          justifyContent: 'center',
          maxWidth: '1500px',
          margin: '0 auto',
        }}
      >
        {chebureks.map(({ id, price, discount, inStock, ...rest }) => {
          let Price = !discount && <Product.PriceRegular>від {price} ₴</Product.PriceRegular>
          let Control = !inStock && <Product.WillBeLater />

          if (discount) {
            Price = <Product.PriceDiscount>акція {price} ₴</Product.PriceDiscount>
          }

          if (inStock) {
            Control = <Product.ControlSelect />
          }

          return (
            <NextLink key={id} href={`/`} as={`/?cheburek=${rest.pathname}`} scroll={false}>
              <Product {...rest}>
                {Price}
                {Control}
              </Product>
            </NextLink>
          )
        })}
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

export default Home
