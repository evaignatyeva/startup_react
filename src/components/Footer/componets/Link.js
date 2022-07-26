import React from 'react'

import {
    Button
} from '@chakra-ui/react'

const Link = ({ iconLink }) => {
    return (
        <Button as='a' href='##'
            backgroundColor='unset'
            color='#fff'
            border='2px solid #fff'
            borderRadius='50%'
            padding='8px'
            margin='0px 13px 0px 0px'
            _hover={{
                '@media (hover:hover)': {
                    color: 'red',
                    backgroundColor: '#fff',
                    transition: 'all 0.3s ease 0s',
                }
            }}
        >
            {iconLink}
        </Button>
    )
}

export default Link;