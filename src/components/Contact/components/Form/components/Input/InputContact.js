import React from 'react'

import {
    Input
} from '@chakra-ui/react'

const InputContact = ({ formId, formName }) => {
    return (
        <Input id={formId} placeholder={formName}
            margin={{ base: '0px 0px 13px 0px', md: '0px 30px 0px 0px' }}
            width={{ base: '300px', xl: '340px', '2xl': '349px' }}
            height='40px'
            padding='0px 0px 0px 15px'
            border='1px solid #c0301c'
            borderColor='#555555'
            borderRadius='unset'
            _placeholder={{
                color: '#555',
                fontSize: '12px',
            }}
            _hover={{
                color: 'unset',
            }}
            _focus={{
                transition: 'all 0.2s ease 0s',
                border: '1px solid #c0301c',
                _placeholder: {
                    transition: 'all 0.2s ease 0s',
                    opacity: '0'
                }
            }}
            _last={{
                margin: 'unset',
            }}
        />
    )
}

export default InputContact;