import { AppProps } from 'next/app'
import { ChakraProvider, extendTheme, Heading } from '@chakra-ui/react'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { theme } from '../../styles/theme'
import { Global } from '@emotion/react'
import Script from 'next/script'



const FB_PIXEL_ID = ''

function MyApp({ Component, pageProps }: AppProps) {
   const router = useRouter()
   // useEffect(() => {
   //    import('react-facebook-pixel')
   //       .then((x) => x.default)
   //       .then((ReactPixel) => {
   //          ReactPixel.init(`${FB_PIXEL_ID}`)
   //          ReactPixel.pageView()

   //          router.events.on('routeChangeComplete', (url) => {
   //             if (url === '/obrigado-whatsapp') {
   //                ReactPixel.pageView()
   //                ReactPixel.fbq('track', 'Lead');
   //             } else {
   //                ReactPixel.pageView()
   //             }
   //          })
   //       })
   // }, [router.events])
   return (
      <>
         <Script async src="https://www.googletagmanager.com/gtag/js?id=GTM-"></Script>

         <Script id="google-tag-manager" strategy="afterInteractive" dangerouslySetInnerHTML={{
            __html:
               `
               (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
               })(window,document,'script','dataLayer','GTM-');
         `}}>
         </Script>

         <ChakraProvider theme={theme}>
            <Global
               styles={`
                  /* Copied from https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&family=Raleway&display=swap */
   
                  /* latin */
                  @font-face {
                     font-family: 'synonym';
                     font-style: normal;
                     font-weight: 200;
                     font-display: swap;
                     src: url('fonts/Synonym-Extralight.woff2') format('woff2');
                     unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                  }
                  @font-face {
                     font-family: 'synonym';
                     font-style: normal;
                     font-weight: 300;
                     font-display: swap;
                     src: url('fonts/Synonym-Light.woff2') format('woff2');
                     unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                  }
                  @font-face {
                     font-family: 'synonym';
                     font-style: normal;
                     font-weight: 400;
                     font-display: swap;
                     src: url('fonts/Synonym-Regular.woff2') format('woff2');
                     unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                  }
                  @font-face {
                     font-family: 'synonym';
                     font-style: normal;
                     font-weight: 500;
                     font-display: swap;
                     src: url('fonts/Synonym-Semibold.woff2') format('woff2');
                     unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                  }
                  @font-face {
                     font-family: 'synonym';
                     font-style: bold;
                     font-weight: 600;
                     font-display: swap;
                     src: url('fonts/Synonym-Bold.woff2') format('woff2');
                     unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                  }
                     
                  @font-face {
                     font-family: 'SourceSerifPro';
                     font-style: normal;
                     font-weight: 300;
                     font-display: swap;
                     src: url('fonts/SourceSerifPro-Light.woff2') format('woff2');
                     unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                  }
                  @font-face {
                     font-family: 'SourceSerifPro';
                     font-style: normal;
                     font-weight: 400;
                     font-display: swap;
                     src: url('fonts/SourceSerifPro-Regular.woff2') format('woff2');
                     unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                  }

                  
                  @font-face {
                     font-family: 'SourceSerifPro';
                     font-style: bold;
                     font-weight: 600;
                     font-display: swap;
                     src: url('fonts/SourceSerifPro-Bold.woff2') format('woff2');
                     unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                  }

                  @font-face {
                     font-family: 'source-serif-pro-regular';
                     font-style: normal;
                     font-weight: 400;
                     font-display: swap;
                     src: url('fonts/source-serif-pro-regular.ttf') format('ttf');
                     unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                  }
                  
                  `}
            />
            <Component {...pageProps} />
         </ChakraProvider>
      </>
   )
}

export default MyApp