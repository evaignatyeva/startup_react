import React from 'react'

import TitleBlock from './components/TitleBlock'
import InfoBlock from './components/Info/InfoBlock'
import FormBlock from './components/Form/FormBlock'


import {
    Box,

} from '@chakra-ui/react'

function Contact() {
    const mainNameContact = 'GET IN TOUCH'
    const dopNameContact = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet'

    return (
        <Box
            id="Contact"
            padding={{ base: '50px 0px', sm: '60px 0px', md: '100px 0px' }}
        >
            <Box
                maxWidth='1175px'
                padding='0px 15px'
                margin='0 auto'
            >
                <TitleBlock title={mainNameContact} titleDop={dopNameContact} />
                <Box
                    display={{ base: 'block', md: 'flex' }}
                    alignItems={{
                        base: 'center', lg: 'start'
                    }}
                    justifyContent='space-between'
                    flexDirection={{
                        base: 'column', lg: 'unset'
                    }}
                    padding={{
                        base: '45px 0px 0px', md: '70px 0px 0px'
                    }}
                >
                    <InfoBlock />
                    <FormBlock />
                </Box>
            </Box>
        </Box >
    )
}

export default Contact;