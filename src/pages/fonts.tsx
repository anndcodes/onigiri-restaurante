
import { Global } from '@emotion/react'
const Fonts = () => (
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
)

export default Fonts