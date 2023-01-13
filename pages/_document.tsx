import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css'
          rel='stylesheet'
          type='text/css'
        />
        <title>omnm</title>
        <link rel="icon" href="/favicon.png" />

        <meta content='omnm' property='og:title' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}