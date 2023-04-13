import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { wrapper } from '@app/store'
import RootLayout from '@layouts/root-layout'

import '@app/styles/scss/main.scss'

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)

  return (
    <Provider store={store}>
      <RootLayout>
        <Component {...props.pageProps} />
      </RootLayout>
    </Provider>
  )
}

export default App
