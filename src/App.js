import React from 'react';

//шрифты
import '@fontsource/montserrat'
import '@fontsource/roboto-slab'

//компоненты
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import Works from './components/Works'
import LinkBlock from './components/LinkBlock'
import BlogPosts from './components/BlogPosts'
import Slider from './components/ReviewsSlider/Slider'
import Contact from './components/Contact'
import Footer from './components/Footer'

import {
  ChakraProvider,
  Box,

} from '@chakra-ui/react';

import theme from './theme/theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        textAlign='center'
      >
        <NavBar />
        <Header />
        <Services />
        <AboutUs />
        <Works />
        <LinkBlock />
        <BlogPosts />
        <Slider />
        <Contact />
        <Footer />
      </Box>
    </ChakraProvider >
  );
}

export default App;
