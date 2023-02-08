import { Html, Head, Main, NextScript } from 'next/document'
import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Nextech development</title>
          <meta name="google-site-verification" content="t_tSSM8BhfbE7QXWTabn4bn9TqvSjYUEUPwvMOEJNMM" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

/*export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}*/
