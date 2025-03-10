import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import { SWInstall } from '@/components/SWInstall'
import { AdblockDetector } from 'adblock-detector'
import { Ads } from '@/components/Ads'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps: { ...pageProps } }) {
  const adbDetector = new AdblockDetector()
  const userHasAdblock = adbDetector.detect()

  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      {!isDevelopment && <SWInstall />}
      <Analytics />
      <LayoutWrapper>
        {userHasAdblock ? <Ads /> : ''}
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
