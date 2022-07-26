import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import {
    Box,
    Flex,
    Text
}
    from '@chakra-ui/react'


function NavBar() {
    const nav = ['Home', 'Services', 'About', 'Works', 'Blog', 'Clients', 'Contact']
    const [isActive, setIsActive] = useState(false)

    const [colorNavbar, setColorNavbar] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 60) {
            setColorNavbar(true);
        } else {
            setColorNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isActive])

    return (
        <Box
            transition='background-color 0.3s ease 0s'
            backgroundColor={colorNavbar ? '#c51212' : 'none'}
            position='fixed'
            width='100%'
            top='0'
            left='0'
            textAlign='center'
            zIndex='50'
        >
            <Box
                maxWidth='1175px'
                padding='0px 15px'
                margin='0 auto'
            >
                <Flex
                    alignItems='center'
                    minHeight={{ base: '60px', md: '70px' }}
                >
                    <Flex
                        alignItems='center'
                        flex='1 0 25%'
                        zIndex='30'
                    >
                        <Link to='Home' spy={true} smooth={true} offset={-60} duration={500}
                        >
                            <Text
                                cursor='pointer'
                                fontFamily='title'
                                color='#fff'
                                fontSize='22px'
                                font-size='22px'
                                fontWeight='900'
                                _hover={{
                                    textDecoration: 'none'
                                }}
                            >
                                Startup
                            </Text>
                        </Link>
                    </Flex>

                    < Box
                    >
                        <Box as='nav'
                        >
                            <Box
                                __css={{
                                    "@media (max-width: 768px)": {
                                        position: 'fixed',
                                        width: '100%',
                                        height: '100%',
                                        overflow: 'auto',
                                        left: '0',
                                        backgroundColor: 'red',
                                        transition: 'top 0.3s ease 0s',
                                        padding: '100px 15px 30px 15px',
                                    }
                                }}
                                top={isActive ? 0 : '-100%'}
                                display={{ base: 'block', md: 'flex' }}
                            >
                                {nav.map((name, index,) =>
                                    // <CustomLink key={index} navName={name} />
                                    <Link to={name} spy={true} smooth={true} offset={-60} duration={500}
                                        key={index}
                                        onClick={() => setIsActive((prev) => !prev)}
                                    >
                                        <Text
                                            cursor='pointer'
                                            fontFamily='title'
                                            fontWeight='900'
                                            color='#fff'
                                            fontSize={{ base: '27px', md: 'unset' }}
                                            alignItems='center'
                                            justifyContent='space-between'
                                            margin={{ base: 'unset', md: '0px 12px' }}
                                            padding={{ base: '25px 0px 0px', sm: '20px 0px 0px', md: '5px 0px' }}
                                            _hover={{
                                                '@media (hover:hover)': {
                                                    transition: 'all 0.3s ease 0s',
                                                    boxShadow: '0 2px #fff'
                                                }
                                            }}
                                        >
                                            {name}
                                        </Text>
                                    </Link>
                                )}
                            </Box>
                        </Box>
                    </ Box>
                    <Box
                        onClick={() => setIsActive((prev) => !prev)}
                        display={{ base: 'block', md: 'none' }}
                        position={{ base: 'relative', md: 'unset' }}
                        height='18px'
                        cursor='pointer'
                        zIndex='30'
                        width='30px'
                    >
                        <Box
                            transition='all 0.3s ease 0s'
                            left='0px'
                            position='absolute'
                            width='100%'
                            height='2px'
                            backgroundColor='#fff'
                            transform={isActive ? 'rotate(-45deg)' : 'unset'}
                            top={isActive ? 'calc(50% - 1px)' : '0px'}
                        >
                        </Box>
                        <Box
                            transition='all 0.3s ease 0s'
                            top='calc(50% - 1px)'
                            left='0px'
                            position='absolute'
                            width='100%'
                            height='2px'
                            backgroundColor='#fff'
                            transform={isActive ? 'scale(0)' : 'unset'}
                        ></Box>
                        <Box
                            transition='all 0.3s ease 0s'
                            left='0px'
                            position='absolute'
                            width='100%'
                            height='2px'
                            backgroundColor='#fff'
                            transform={isActive ? 'rotate(45deg)' : 'unset'}
                            bottom={isActive ? 'calc(50% - 1px)' : '0px'}
                            _last={{
                                top: 'auto',
                            }}
                        ></Box>
                    </Box>
                </Flex>
            </Box >
        </Box >
    )
}

export default NavBar;