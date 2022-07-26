import React from 'react'

import BlockLink from './componets/BlockLink'

import {
    Box,
    Text,

} from '@chakra-ui/react'

function Footer() {
    return (
        <Box
            backgroundColor='red'
            padding={{ base: '50px 0px', sm: '60px 0px', md: '90px 0px' }}
            textAlign='center'
        >
            <BlockLink />
            <Text
                color='#fff'
                textTransform='uppercase'
                fontSize='14px'
            >
                &copy; 2015 Startup, Designed by ShapedTheme
            </Text>
        </Box>
    )
}

export default Footer;