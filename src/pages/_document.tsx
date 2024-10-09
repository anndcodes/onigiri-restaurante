import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
   render() {
      return (
        <Html>
          <Head>
            {/* <!-- HTML Meta Tags --> */}
            <meta
              name="description"
              content="Seu novo restaurante japonês favorito em São Paulo"
            />
            <meta name="keywords" content="restaurante japonês" />

            {/* <!-- Facebook Meta Tags --> */}
            <meta
              property="og:url"
              content="https://www.onigirirestaurante.com"
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:title"
              content="SSeu novo restaurante japonês favorito em São Paulo"
            />
            <meta
              property="og:description"
              content="Venha conhecer toda a gastronomia japonesa como você nunca viu, temos sushi, poke, temaki, yakissoba lamen e muito mais!"
            />
            <meta
              property="og:image"
              content="https://i.imgur.com/qNn0Xev.png"
            />
            <meta
              name="facebook-domain-verification"
              content="p9o4crdziw52naiebnk8mv7mj3s7pu"
            />

            {/* <!-- Twitter Meta Tags --> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="onigirirestaurante.com" />
            <meta
              property="twitter:url"
              content="https://www.onigirirestaurante.com"
            />
            <meta
              name="twitter:title"
              content="Seu novo restaurante japonês favorito em São Paulo"
            />
            <meta
              name="twitter:description"
              content="Venha conhecer toda a gastronomia japonesa como você nunca viu, temos sushi, poke, temaki, yakissoba lamen e muito mais!"
            />
            <meta
              name="twitter:image"
              content="https://i.imgur.com/qNn0Xev.png"
            />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Roboto+Slab:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap"
              rel="stylesheet"
            />

            <link rel="shortcut icon" href="https://i.imgur.com/qNn0Xev.png" />
            <React.Fragment>
              {/* <!-- Facebook Pixel Code -->
                  <script dangerouslySetInnerHTML={{
                     __html: `!function(f,b,e,v,n,t,s)
               {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
               n.callMethod.apply(n,arguments):n.queue.push(arguments)};
               if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
               n.queue=[];t=b.createElement(e);t.async=!0;
               t.src=v;s=b.getElementsByTagName(e)[0];
               s.parentNode.insertBefore(t,s)}(window, document,'script',
               'https://connect.facebook.net/en_US/fbevents.js');
               fbq('init', '700239298517091');
               fbq('track', 'PageView');` }}
                  />
                  <noscript dangerouslySetInnerHTML={{
                     __html: `<img height="1" width="1" style="display:none"
               src="https://www.facebook.com/tr?id=1469014893670193&ev=PageView&noscript=1" />` }}
                  /> */}
              {/* <!-- End Facebook Pixel Code --> */}
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                     <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16685303886"></script>
                     <script>
                     window.dataLayer = window.dataLayer || [];
                     function gtag(){dataLayer.push(arguments);}
                     gtag('js', new Date());

                     gtag('config', 'AW-16685303886');
                     </script>
               `,
                }}
              />
            </React.Fragment>
          </Head>
          <body style={{ backgroundColor: "#EDF2F7" }}>
            {/* <noscript
                  dangerouslySetInnerHTML={{
                     __html: `
                     <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NX33MD3C"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe>
                        <meta name="facebook-domain-verification" content="p9o4crdziw52naiebnk8mv7mj3s7pu" />`,
                  }}
               /> */}
            <Main />
            <NextScript />
          </body>
        </Html>
      );
   }
}