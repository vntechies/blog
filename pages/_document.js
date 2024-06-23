import siteMetadata from '@/data/siteMetadata'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang={`${siteMetadata.language}`} className="scroll-smooth">
        <Head>
          <meta charSet="UTF-8" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=JetBrains+Mono&display=swap"
            rel="stylesheet"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="qmau.me" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#fa8148" />
          <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-config" content="/static/favicons/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
          <link rel="alternate" type="application/rss+xml" href="/public/feed.xml" />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6062406727970154"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
