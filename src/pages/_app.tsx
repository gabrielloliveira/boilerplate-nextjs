import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon.png" />
        <link rel="apple-touch-icon" href="/img/icon.png" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Boilerplate simples para TypeScript,
          React, NextJS e Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
