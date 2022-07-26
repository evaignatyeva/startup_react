import React from 'react';


import {
    Box,
    Image,
    keyframes,
    usePrefersReducedMotion

} from '@chakra-ui/react'

import logo1 from '../../img/slider_review/company1.png'
import logo2 from '../../img/slider_review/company2.png'
import logo3 from '../../img/slider_review/company3.png'
import logo4 from '../../img/slider_review/company4.png'
import logo5 from '../../img/slider_review/company5.png'

import SliderContent from './SliderContent'
import { reviewsSlider } from './imageSlider'


const scroll = keyframes`
to { transform: translateX(0); }
from { transform: translateX(calc(-250px * 5));  }
`

function Slider() {
    const prefersReducedMotion = usePrefersReducedMotion()

    const animation = prefersReducedMotion
        ? undefined
        : `${scroll} infinite 30s linear`

    return (
        <Box
            id="Clients"
            padding={{ base: '50px 0px', sm: '60px 0px', md: '100px 0px' }}
            backgroundColor='#f8f8f8'
            position='relative'
        >
            <Box
                overflow='hidden'
                width={{ base: '100%', lg: '65%' }}
                margin='0 auto'
                padding={{ base: '0px 0px 30px 0px', sm: ' 0px 0px 40px 0px', md: '0px 0px 60px 0px' }}
            >
                <Box
                    display='flex'
                    justifyContent={{ base: 'space-evenly', sm: 'space-around' }}
                    alignItems='center'
                    width='calc(250px * 10)'
                    animation={animation}
                >
                    <Box>
                        <Image src={logo1}></Image>
                    </Box>
                    <Box>
                        <Image src={logo2}></Image>
                    </Box>
                    <Box>
                        <Image src={logo3}></Image>
                    </Box>
                    <Box>
                        <Image src={logo4}></Image>
                    </Box>
                    <Box>
                        <Image src={logo5}></Image>
                    </Box>

                    <Box>
                        <Image src={logo1}></Image>
                    </Box>
                    <Box>
                        <Image src={logo2}></Image>
                    </Box>
                    <Box>
                        <Image src={logo3}></Image>
                    </Box>
                    <Box>
                        <Image src={logo4}></Image>
                    </Box>
                    <Box>
                        <Image src={logo5}></Image>
                    </Box>
                </Box>
            </Box>

            <SliderContent
                imageSlider={reviewsSlider}
            />
        </Box >
    )
}

export default Slider