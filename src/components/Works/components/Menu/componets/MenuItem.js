import React from 'react'

import {
    Box
} from '@chakra-ui/react'

function MenuItem({ name, toggleState, toggleTab, index }) {
    return (
        <Box
            margin={{
                base: '0px 0px 15px 0px', sm: '0px 0px 0px 0px', md: '0px 25px 0px 0px'
            }}
            cursor='pointer'
            fontWeight='400'
            _hover={{
                borderbottom: 'none',
            }}
            color={toggleState === index ? 'red' : 'unset'}
            onClick={() => { toggleTab(index) }}
        >
            {name}
        </Box>
    )
}

export default MenuItem