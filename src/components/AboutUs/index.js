import React from 'react'

import TitleBlock from '../AboutUs/components/TitleBlock'
import ServicesDopText from '../AboutUs/components/ServicesDopText'

import Slider from './AboutUsSlider/Slider.js'

import {
    Box,

} from '@chakra-ui/react'

function AboutUs() {
    const mainNameAbout = 'About us'
    const dopNameAbout = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet'
    const dopInfoText = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam nonumy eirmod tempor invidunt ut labore et dolore aliquyam erat, sed diam voluptua. At vero eos et accusam et justo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor et dolore aliquyam erat. Lorem ipsum dolor sit amet. Lorem ipsum eat.'
    const dopInfoText2 = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sediam nonumy eirtempor invidunt ut labore et dolore aliquyam erat, sed diam voluptua. At vero eos eaccusam et justo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor et dolore aliquyam erat. Loreipsum dolor sit amet. Lorem ipsum dolor et.'
    return (
        <Box
            id="About"
            backgroundColor='gray.50'
            padding={{ base: '50px 0px', sm: '60px 0px', md: '100px 0px' }}
        >
            <Box
                maxWidth='1175px'
                padding='0px 15px'
                margin='0 auto'
            >
                <TitleBlock title={mainNameAbout} titleDop={dopNameAbout} />
                <Box
                    display={{
                        base: 'block', md: 'flex'
                    }}
                    padding={{
                        base: '35px 0px 0px', md: '50px 0px 0px', lg: '70px 0px 0px'
                    }}
                    width={{
                        base: '90%', md: 'unset'
                    }}
                    margin={{
                        base: '0 auto', md: 'unset'
                    }}
                >
                    <ServicesDopText dopInfo={dopInfoText} />
                    <ServicesDopText dopInfo={dopInfoText2} />
                </Box>
            </Box>
            <Box
                maxWidth='1175px'
                margin='0 auto'
            >
                <Slider />
            </Box>
        </Box>
    )
}

export default AboutUs;