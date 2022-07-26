import React from 'react'

import { Link } from 'react-scroll'

import {
    Box,
    Text,

} from '@chakra-ui/react'

function TextBlock() {
    return (
        <Box>
            <Text
                fontWeight='500'
                fontSize='30px'
                color='#fff'
                lineHeight='47px'
                paddingBottom={{ base: '20px', md: '50px' }}
            >
                Do you like <span>OUR WORK</span> so far? <br /> Let's talk about <span>YOUR PROJECT!</span>
            </Text>
            <Link
                to='Contact'
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
            >
                <Text
                    cursor='pointer'
                    display='inline-block'
                    textTransform='uppercase'
                    backgroundColor='unset'
                    color='#fff'
                    padding='15px 25px'
                    border='2px solid #fff'
                    borderRadius='1px'
                    fontSize='18px'
                    _hover={{
                        '@media (hover:hover)': {
                            transition: 'all 0.4s ease 0s',
                            backgroundColor: '#fff',
                            color: 'red',
                            border: '2px solid #dddddd'
                        }
                    }}
                >
                    get in touch
                </Text>
            </Link>
        </Box>
    )
}

export default TextBlock