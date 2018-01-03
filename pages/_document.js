import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { renderStaticOptimized } from 'glamor/server'
import { segmentKey } from 'services/config'

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage()
    const styles = renderStaticOptimized(() => page.html)
    return { ...page, ...styles }
  }

  constructor(props) {
    super(props)
    const { __NEXT_DATA__, ids } = this.props

    if (typeof window !== 'undefined') {
      rehydrate(ids)
    } else {
      __NEXT_DATA__.ids = ids
    }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Default Title</title>
          <link
            rel="stylesheet"
            href="//fonts.googleapis.com/css?family=Poppins:300,400"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Oswald:400,600,700"
          />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css"
          />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <link
            rel="icon"
            type="image/png"
            href="/static/img/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/img/favicon-16x16.png"
            sizes="16x16"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-66081806-12"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-66081806-12');
              `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
