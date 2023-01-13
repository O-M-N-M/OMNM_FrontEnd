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
        <link rel='icon' href='/favicon.png' />

        <meta property='og:title' content='omnm' />
        <meta property='og:url' content='//omnm.co.kr/' />
        <meta property='og:description' content='오늘 만나고 내일 만나는 기숙사 룸메이트 매칭 서비스' />
        <meta property='og:image' content='https://omnm.co.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.297b4787.png&w=384&q=75' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}