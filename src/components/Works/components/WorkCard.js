import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import {
    Box,
    Flex,
    Link,
    Image,
    Text,
    Button,
} from '@chakra-ui/react'

function WorkCard({ elem }) {
    const { id, image, name, category } = elem;
    return (
        <Box
            key={id}
            as='article'
            position='relative'
        >
            <Flex>
                <Link
                    display='block'
                >
                    <Image src={image} alt={name} />
                </Link>
            </Flex>
            <Box
                __css={{
                    "@media (hover:hover)": {
                        opacity: '0',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(189, 24, 6, 0.63)',
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
                    __css={{
                        "@media (hover:none)": {
                            backgroundColor: '#CBD5E0',
                            padding: '15px',
                        }
                    }}
                >
                    <Text
                        fontFamily='title'
                        fontWeight='400'
                        color='#fff'
                        fontSize='18px'
                        padding='0px 0px 15px 0px'
                    >
                        {name}
                    </Text>
                    <Text
                        color='#fff'
                        fontSize='15px'
                    >
                        {category}
                    </Text>
                    <Button
                        fontWeight='400'
                        textTransform='uppercase'
                        border='2px solid #fff'
                        borderRadius='unset'
                        letterSpacing='1px'
                        margin='25px 0px 0px 0px'
                        padding='15px 20px'
                        fontSize='16px'
                        backgroundColor='#fff'
                        color='red'
                    >
                        view <Box padding='0px 0px 0px 11px' ><FontAwesomeIcon icon={faAngleRight}
                            fontSize='14px' /></Box>
                    </Button>
                </Box>
            </Box>
        </Box >
    )
}

export default WorkCard;