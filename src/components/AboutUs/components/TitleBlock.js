import React from 'react'

import {
    Box,
    Text

} from '@chakra-ui/react'

const TitleBlock = ({ title, titleDop }) => {
    return (
        <Box>
            <Text as='h2'
                fontFamily='title'
                fontWeight='400'
                textTransform='uppercase'
                fontSize='20px'
                _after={{
                    content: '""',
                    display: 'block',
                    margin: '29px auto 30px auto',
                    width: '50px',
                    height: '2px',
                    backgroundColor: '#555'
                }}
            >
                {title}</Text>
            <Text
                letterSpacing='0.5px'
            >
                {titleDop}</Text>
        </Box>
    )
}

export default TitleBlock;
