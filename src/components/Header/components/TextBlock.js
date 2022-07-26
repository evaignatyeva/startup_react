import React from 'react'

import { Link } from 'react-scroll'

import {
    Box,
    Text

} from '@chakra-ui/react'

function TextBlock() {
    return (
        <Box
            textAlign='center'
            position='absolute'
            top='50%'
            left='50%'
            marginRight='-40%'
            transform='translate(-50%, -50%)'
        >
            <Text
                color='#fff'
                textTransform='uppercase'
                alignItems='center'
                fontFamily='title'
                justifyContent='center'
                fontSize='48px '
                textAlign='center'
                lineHeight='1.2'

            >
                Welcome to STARTUP</Text>
            <Text
                color='#fff'
                fontSize='22px'
                alignItems='center;'
                justifyContent='center'
                textAlign='center'
                paddingTop={{ base: '30px' }}
                paddingBottom={{ base: '40px', md: '50px' }}
            >
                Your Favourite Creative Agency Template</Text>
            <Link
                to='Services'
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
            >
                <Text
                    cursor='pointer'
                    display='inline-block'
                    padding='15px 33px'
                    fontFamily='title'
                    textTransform='uppercase'
                    color='#fff'
                    backgroundColor='unset'
                    borderRadius='1px'
                    border='2px solid #fff'
                    alignItems='center'
                    justifyContent='center'
                    textAlign='center'
                    _hover={{
                        '@media (hover:hover)': {
                            backgroundColor: '#fff',
                            color: 'red',
                            border: '2px solid #dddddd',
                            transition: 'all 0.3s ease 0s',
                        }
                    }}
                    _focus={{
                        border: '2px solid #dddddd',
                    }}
                >
                    Get Started
                </Text></Link>
        </Box>
    )
}

export default TextBlock;