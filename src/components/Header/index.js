import React from 'react'

import TextBlock from './components/TextBlock'

import {
    Box,

} from '@chakra-ui/react'

import bgheader from "../../img/background/backgroundHeader.jpg"

function Header() {
    return (
        <Box
            id="Home"
            background={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${bgheader}')`}
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            width='100%'
            minHeight='100vh'
            textAlign='center'
            backgroundSize='cover'
            position='relative'
        >
            <Box
                maxWidth='1175px'
                padding='0px 15px'
                margin='0 auto'
            >
                <TextBlock />
            </Box>
        </Box >

    )
}

export default Header;