import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({

  fonts: {
    heading: 'Noto Serif, Roboto Slab, synonym, Roboto Slab,Heebo, Poppins, Avenir',
    body: 'synonym, Noto Serif, Roboto Slab, Heebo, Poppins, Avenir'
  },
  colors: {
    backgroundLight: "#EDF2F7",
    backgroundDark: "#96989a",
    brown: {
      300: '#d0a288',
      400: '#B09E8A',
      600: '#ac5c53'
    },
    beige: {
      100: '#c3a897',
      700: '#a09080'
    },
    teal: {
      300: '#7CC3BB',
      400: '#65bfbb',
      500: '#1C928B'
    },
    rose: {
      400: '#B39283',
      600: '#9E7E6F'
    },
    dark: {
      300: '#252525',
      400: '#1A1A1A'
    },
    light: {
      400: '#EFEFEF',
      600: '#ebe4dd'
    },
    red: {
      400: '#EF4444'
    },
    gray: {
      100: '#E5E5E5',
      300: '#e0dcdc',
      500: '#B8B8B8'
    },
    facebook: '#3b5998',
    whatsapp: '#25d366',
    instagram: '#d62976',
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        color: 'gray.900',
        padding: 0,
        margin: 0,
        '-webkit-scrollbar-width': '10px', // Define a largura da barra de rolagem
        '-webkit-scrollbar-height': '10px', // Define a altura da barra de rolagem
        '-webkit-scrollbar-thumb-color': 'yellow', // Define a cor da alça da barra de rolagem
        '-webkit-scrollbar-track-color': 'gray',
      },
      // styles for the `a`
      a: {
        // color: 'teal.500',
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
})