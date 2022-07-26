import React from 'react'

import {
    Box,
    Text

} from '@chakra-ui/react'

const CardBlock = ({ servicesIcon, servicesTitle, servicesTitleDop }) => {
    return (
        <Box
            role="group"
            margin={{ base: '0 auto', md: '0px 20px' }}
            width={{ base: '90%', sm: '70%', md: 'unset' }}
        >
            <Box
                margin={{ base: '35px 0px 15px 0px', md: '50px 0px 28px 0px', lg: '70px 0px 28px 0px' }}
                padding='20px'
                color='red'
                border='2px solid #dddddd'
                borderRadius='50%'
                display='inline-flex'
                fontSize='40px'
                _groupHover={{
                    '@media (hover:hover)': {
                        transition: 'all 0.5s ease 0s',
                        backgroundColor: 'red',
                        color: '#fff'
                    }
                }}
            >
                {servicesIcon}
            </Box>
            <Text
                fontFamily='title'
                fontWeight='400'
                textTransform='uppercase'
            >
                {servicesTitle}
            </Text>
            <Text
                letterSpacing='0.4px'
                margin={{ base: '18px 0px 0px 0px', md: '23px 0px 0px 0px' }}
            >
                {servicesTitleDop}
            </Text>
        </Box>

    )
}

export default CardBlock;