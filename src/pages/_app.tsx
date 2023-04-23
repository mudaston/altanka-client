import type { AppProps } from 'next/app'
import App from 'next/app'
import { Provider } from 'react-redux'

import { getUserAgent } from '@app/device-detect'
import { isMobile } from '@app/device-detect/mobile'
import { wrapper } from '@app/store'
import RootLayout from '@layouts/root-layout'

import '@app/styles/scss/main.scss'

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props

  return (
    <Provider store={store}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  )
}

MyApp.getInitialProps = async (ctx: any) => {
  const initialProps = await App.getInitialProps(ctx)
  const { rawHeaders } = ctx.ctx.req

  const userAgent = getUserAgent(rawHeaders)
  const mobile = isMobile(userAgent)

  return {
    ...initialProps,
    pageProps: {
      // pass prop to all pages
      mobile,
    },
  }
}

export default MyApp
