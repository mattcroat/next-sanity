import { Global } from '@emotion/react'

import { Layout } from '@/root/components/Layout'
import { globalStyles } from '@/root/styles/global.js'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
