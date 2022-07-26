import React from 'react'

import MenuItem from './componets/MenuItem'

import {
    Box,

} from '@chakra-ui/react'

function Menu({ items, toggleState, toggleTab }) {

    return (
        <Box
            display={{
                base: 'block', sm: 'flex'
            }}
            justifyContent={{
                base: 'center', sm: 'space-evenly', md: 'center'
            }}
            paddingBottom={{ base: '40px', md: '60px' }}
        >
            {items.map((name, index) => {
                return (
                    <MenuItem name={name} index={index} toggleState={toggleState} toggleTab={toggleTab} />
                )
            })}
        </Box>
    )
}

export default Menu