import React from 'react'

import {
    Box,
    Button,
    Text
} from '@chakra-ui/react'

function FormButton() {
    return (
        <Box
            display={{ base: 'block', md: 'flex' }}
        >
            <Button type='submit'
                border='1px solid #555555'
                fontWeight='500'
                fontSize='13px'
                padding='15px 33px'
                backgroundColor='unset'
                borderRadius='unset'
                _hover={{
                    transition: 'all 0.4s ease 0s',
                    border: '1px solid #c0301c',
                    color: 'red',
                }}
            >
                SEND MESSAGE
            </Button>
            <Text
                alignItems='center'
                justifyContent={{ base: 'center', md: 'unset' }}
                display='flex'
                padding={{ base: '13px 0px 0px 0px', md: '0px 0px 0px 35px' }}
                fontSize='12px'
            >
                <Box
                    color='red'
                    paddingRight='3px'

                >*</Box>We’ll contact you as
                possible. We don’t reply on Monday.
            </Text>
        </Box>
    )
}

export default FormButton;