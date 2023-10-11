import { Html, Head, Main, NextScript } from 'next/document'
// import Footer from '../Footer/Footer'
// import { Header } from '../common'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <body>
        {/* <Header /> */}
        <Main />
        <NextScript />
        {/* <Footer /> */}
      </body>
    </Html>
  )
}
