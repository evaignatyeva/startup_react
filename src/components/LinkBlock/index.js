import React from 'react'

import TextBlock from './components/TextBlock'

import {
    Box,

} from '@chakra-ui/react'

import bgContact from "../../img/background/backgroundContact.jpg"

function LinkBlock() {
    return (
        <Box
            background={`linear-gradient(rgba(235, 31, 4, 0.459), rgba(235, 20, 5, 0.466)), url('${bgContact}')`}
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            textAlign='center'
            padding='100px 0px 100px 0px'
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

export default LinkBlock;