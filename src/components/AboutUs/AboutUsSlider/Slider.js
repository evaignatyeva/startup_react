import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { TiSocialGooglePlus } from 'react-icons/ti'

import Slider from 'react-slick'
import 'slick-carousel'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import { dataDigitalBestSeller } from './imageSlider'

import {
    Box,
    Text,
    Image,
    Link,

} from '@chakra-ui/react'

const SlickArrowLeft = ({ onClick }) => (
    <Box
        height='40px'
        width='35px'
        background='red'
        cursor='pointer'
        onClick={onClick}
        display='flex'
        justifyContent='center'
        alignItems='center'
        position='absolute'
        top='35%'
        zIndex='20'
        left='15px'
    >
        <Image
            src='images/icons/p-left.svg'
            alt="prevArrow"
            width='8px'
        />
    </Box>
);

const SlickArrowRight = ({ onClick }) => (
    <Box
        zIndex='20'
        height='40px'
        width='35px'
        background='red'
        cursor='pointer'
        onClick={onClick}
        display='flex'
        justifyContent='center'
        alignItems='center'
        position='absolute'
        top='35%'
        right='14px'
    >
        <Image
            src='images/icons/p-left.svg'
            alt="prevArrow"
            width='8px'
            transform='rotate(-180deg)'
        />
    </Box>
);

function SliderSlick() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SlickArrowRight />,
        prevArrow: <SlickArrowLeft />,
        responsive: [
            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 479.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Box
            paddingTop={{ base: '40px', md: '70px' }}
        >
            <Slider {...settings}>
                {dataDigitalBestSeller.map(item => (
                    <Box
                        position='relative'
                    >
                        <Box
                            overflow='hidden'
                        >
                            <Box
                                padding='0px 15px'
                            >
                                <Box
                                    cursor='grab'
                                    position='relative'
                                >
                                    <Image
                                        width='100%'
                                        height='100%'
                                        objectFit='cover'
                                        src={item.image}
                                        alt={item.name}
                                        cursor='pointer'
                                    />
                                    <Box
                                        __css={{
                                            "@media (hover:hover)": {
                                                opacity: '0',
                                                position: 'absolute',
                                                top: '0',
                                                width: '100%',
                                                height: '100%',
                                                display: 'flex',
                                                alignItems: 'flex-end',
                                                justifyContent: 'center',
                                                backgroundColor: 'rgba(74, 74, 74, 0.5)',
                                                transition: 'all 0.3s ease 0s',
                                                _hover: {
                                                    transition: 'all 0.4s ease 0s',
                                                    opacity: '1',
                                                    visibility: 'visible',
                                                }
                                            }
                                        }}
                                    >
                                        <Box
                                            display='flex'
                                            padding='0px 0px 40px 0px'
                                            __css={{
                                                "@media (hover:none)": {
                                                    justifyContent: { base: 'space-evenly', sm: 'center' },
                                                    backgroundColor: '#CBD5E0',
                                                    padding: '15px',
                                                }
                                            }}
                                        >
                                            <Box
                                                margin='0px 15px 0px 0px'
                                                __css={{
                                                    "@media (hover:none)": {
                                                        border: '2px solid #fff',
                                                        borderRadius: '50%',
                                                    },
                                                    "@media (hover:hover)": {
                                                        _hover: {
                                                            transition: 'all 0.4s ease 0s',
                                                            backgroundColor: 'red',
                                                        }
                                                    }
                                                }}
                                            >
                                                <Link
                                                    href='##'
                                                    color='#fff'
                                                    width='30px'
                                                    height='30px'
                                                    display='flex'
                                                    justifyContent='center'
                                                    alignItems='center'
                                                >
                                                    <FaFacebookF />
                                                </Link>
                                            </Box>
                                            <Box
                                                margin='0px 15px 0px 0px'
                                                __css={{
                                                    "@media (hover:none)": {
                                                        border: '2px solid #fff',
                                                        borderRadius: '50%',
                                                    },
                                                    "@media (hover:hover)": {
                                                        _hover: {
                                                            transition: 'all 0.4s ease 0s',
                                                            backgroundColor: 'red',
                                                        }
                                                    }
                                                }}
                                            >
                                                <Link
                                                    href='##'
                                                    color='#fff'
                                                    width='30px'
                                                    height='30px'
                                                    display='flex'
                                                    justifyContent='center'
                                                    alignItems='center'
                                                >
                                                    <FaTwitter />
                                                </Link>
                                            </Box>
                                            <Box
                                                margin='0px 15px 0px 0px'
                                                __css={{
                                                    "@media (hover:none)": {
                                                        border: '2px solid #fff',
                                                        borderRadius: '50%',
                                                    },
                                                    "@media (hover:hover)": {
                                                        _hover: {
                                                            transition: 'all 0.4s ease 0s',
                                                            backgroundColor: 'red',
                                                        }
                                                    }
                                                }}
                                            >
                                                <Link
                                                    href='##'
                                                    color='#fff'
                                                    fontSize='25px'
                                                    width='30px'
                                                    height='30px'
                                                    display='flex'
                                                    justifyContent='center'
                                                    alignItems='center'
                                                >
                                                    <TiSocialGooglePlus />
                                                </Link>
                                            </Box>
                                            <Box
                                                __css={{
                                                    "@media (hover:none)": {
                                                        border: '2px solid #fff',
                                                        borderRadius: '50%',
                                                    },
                                                    "@media (hover:hover)": {
                                                        _hover: {
                                                            transition: 'all 0.4s ease 0s',
                                                            backgroundColor: 'red',
                                                        }
                                                    }
                                                }}
                                            >
                                                <Link
                                                    href='##'
                                                    color='#fff'
                                                    width='30px'
                                                    height='30px'
                                                    display='flex'
                                                    justifyContent='center'
                                                    alignItems='center'
                                                >
                                                    <FaLinkedinIn />
                                                </Link>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box
                                    padding='10px 0px 0px 0px'
                                >
                                    <Text
                                        fontSize='14px'
                                        textTransform='uppercase'
                                        fontFamily='title'
                                    >
                                        {item.name}</Text>
                                    <Text
                                        margin='10px 0px 0px 0px'
                                        textTransform='none'
                                        fontSize='13px'
                                    >
                                        {item.title}</Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Slider >
        </Box>
    )
}

export default SliderSlick;
