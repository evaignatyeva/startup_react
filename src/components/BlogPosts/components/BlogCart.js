import React, { useState } from 'react'

import {
    Box,
    Text,
    Link,
    Image,
    Flex,

} from '@chakra-ui/react'

const BlogCart = ({ BlogImage, PostsTitle, BlogText }) => {
    const [isActive, setIsActiveText] = useState(false)
    return (
        <Box
            role="group"
            as='article'
            borderBottom='1px solid #ddd'
            padding={{ base: '0px 0px 30px 0px', sm: '0px 0px 33px 0px', md: '0px 0px 37px 0px' }}
            margin='0px 0px 37px 0px'
            display={{
                base: 'block', lg: 'flex'
            }}
            alignItems='flex-start'
            _last={{
                borderBottom: 'none',
                padding: '0',
                margin: '0',
            }}
        >
            <Link
                href="##"
                display='block'
                flex='0 0 461px'
                _focus={{
                    border: 'unset',
                }}
            >
                <Image src={BlogImage}
                    width={{ base: '100%', lg: 'unset' }}
                    height={{ base: '35vh', md: '45vh', lg: 'unset' }}
                    borderRadius={{ base: '10px', lg: 'unset' }}
                    objectFit={{ base: 'cover', lg: 'unset' }}
                />
            </Link>
            <Box
                textAlign='left'
                padding={{
                    base: '20px 0px 0px 0px', lg: '0px 0px 0px 40px'
                }}
            >
                <Flex
                    display='flex'
                    padding='0px 0px 22px 0px'
                    alignItems='center'
                >
                    <Box
                        fontFamily='title'
                        fontWeight='900'
                        color='gray.100'
                        border='2px solid #555555'
                        padding='17px 22px'
                        textAlign='center'
                        fontSize='24px'
                        display='inline-flex'
                        lineHeight='20px'
                        letterSpacing='1px'
                    >
                        18 <br />
                        <Text
                            textTransform='uppercase'
                            fontSize='14px'
                            display='contents'
                            letterSpacing='1px'
                        >
                            oct
                        </Text>
                    </Box>
                    <Box
                        padding='0px 0px 0px 25px'
                        lineHeight='30px'
                    >
                        <Text
                            _groupHover={{
                                '@media (hover:hover)': {
                                    color: 'red',
                                    transition: 'color 0.4s ease 0s'
                                }
                            }}
                            fontFamily='title'
                            textTransform='uppercase'
                        >
                            {PostsTitle}
                        </Text>
                        <Text
                            fontSize='14px'
                            color='#818181'
                            display='flex'
                        >
                            By
                            <Box
                                padding='0px 2px'
                                _groupHover={{
                                    '@media (hover:hover)': {
                                        color: 'red',
                                        transition: 'color 0.4s ease 0s'
                                    }
                                }}
                            >Khalil</Box>
                            Uddin in
                            <Box
                                padding='0px 2px'
                                _groupHover={{
                                    '@media (hover:hover)': {
                                        color: 'red',
                                        transition: 'color 0.4s ease 0s'
                                    }
                                }}
                            >
                                Development
                            </Box>
                        </Text>
                    </Box>
                </Flex>
                <Box
                    padding={{ base: '0px 0px 20px 0px', sm: '0px 0px 25px 0px', md: '0px 0px 35px 0px' }}
                    fontSize='15px'
                    lineHeight='22px'
                    letterSpacing='0.7px'
                >
                    {BlogText}
                    <Text as='span' display={isActive ? 'block' : 'none'}>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</Text>
                </Box>
                <Text
                    onClick={() => setIsActiveText((prev) => !prev)}
                    textTransform='uppercase'
                    fontWeight='900'
                    fontSize='14px'
                    color='gray.100'
                    cursor='pointer'
                    _hover={{
                        '@media (hover:hover)': {
                            color: 'red',
                            transition: 'color 0.4s ease 0s'
                        }
                    }}
                >
                    Read More</Text>
            </Box >
        </Box >
    )
}

export default BlogCart;