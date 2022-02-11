import '@/css/tailwind.css'
import '@/css/global.css'
import '@/css/prism.css'
import '@fontsource/raleway/300.css'
import '@fontsource/open-sans/600.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import LayoutWrapper from '@/components/LayoutWrapper'
import MailChimpHeadCode from '@/components/MailChimpHeadCode'
import StyleWaves from '@/components/StyleWaves'
import Script from 'next/script'
import siteMetadata from '@/data/siteMetadata'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/lib/utils/theme'

let GTM_Tracking_ID = siteMetadata.analytics.googleTagManagerID || ''
const isProduction = process.env.NODE_ENV === 'production'
if (isProduction) {
  GTM_Tracking_ID = siteMetadata.analytics.googleTagManagerID || ''
} else {
  GTM_Tracking_ID = 'GTM-XXXXXXX'
}

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Google Tag Manager - Global base code */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer', '${GTM_Tracking_ID}');
        `,
        }}
      />
      <ThemeProvider attribute="class">
        <ChakraProvider theme={theme}>
          <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta
              name="google-site-verification"
              content="LOmgcQtS3n4SzA1wUbtCUBeOyVp1Kq8d4XWHvWAf51Y"
            />
            <script
              data-ad-client="ca-pub-1593692039645752"
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            ></script>

            <MailChimpHeadCode />
          </Head>
          <LayoutWrapper>
            <Component {...pageProps} />
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_Tracking_ID}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
                title="GTM Script"
              />
            </noscript>
          </LayoutWrapper>
          <StyleWaves />
        </ChakraProvider>
      </ThemeProvider>
    </>
  )
}
