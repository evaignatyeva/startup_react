import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "roboto-slub",
        color: '#555',
      },
    },
  },
  fonts: {
    title: "montserrat"
  },
  colors: {
    red: '#c0301c',
    gray: {
      50: '#f8f8f8',
      100: '#777777',
    }
  },
  breakpoints: {
    sm: '479.98',
    md: '767.98',
    lg: '991.98',
    xl: '1175px',
    '2xl': '1536px'
  },
})

export default theme;