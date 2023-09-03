import type { AppProps } from 'next/app'
import App from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'

import { getUserAgent } from '@app/device-detect'
import { isMobile } from '@app/device-detect/mobile'
import { wrapper } from '@app/store'
import RootLayout from '@layouts/root-layout'

import '@app/styles/scss/main.scss'

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props
  const { mobile } = pageProps

  return (
    <Provider store={store}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <RootLayout mobile={mobile}>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  )
}

MyApp.getInitialProps = async (ctx: any) => {
  const initialProps = await App.getInitialProps(ctx)

  const { req } = ctx.ctx

  const rawHeaders = req?.rawHeaders ?? []

  const userAgent = getUserAgent(rawHeaders)

  const mobile = isMobile(userAgent)

  const pageProps = {}

  // pass prop to all pages
  Object.defineProperty(pageProps, 'mobile', {
    enumerable: true,
    get() {
      if (!req && process.env.NODE_ENV === 'development') {
        console.warn('to have access to user`s device type page must be server side rendered (SSR)')
      }

      return mobile
    },
  })

  return {
    ...initialProps,
    pageProps,
  }
}

export default MyApp
