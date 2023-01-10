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
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}