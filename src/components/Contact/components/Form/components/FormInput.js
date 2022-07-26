import React from 'react'

import InputContact from './Input/InputContact'

import {
    Flex,
    Box,
    Input
} from '@chakra-ui/react'

function FormInput() {
    const ContactId1 = 'first-name'
    const ContactInputName1 = 'YOUR NAME'

    const ContactId2 = 'e-mail'
    const ContactInputName2 = 'YOUR E-MAIL'

    const ContactId3 = 'subject'
    const ContactInputName3 = 'YOUR SUBJECT'

    const ContactId4 = 'company-name'
    const ContactInputName4 = 'COMPANY NAME'
    return (
        <Box>
            <Flex
                display={{ base: 'flex' }}
                flexDirection={{ base: 'column', md: 'unset' }}
                alignItems={{ base: 'center', md: 'unset' }}
                justifyContent='center'
                marginBottom={{ base: '13px', md: '15px' }}
            >
                <InputContact formId={ContactId1} formName={ContactInputName1} />
                <InputContact formId={ContactId2} formName={ContactInputName2} />
            </Flex>
            <Flex
                display={{ base: 'flex' }}
                flexDirection={{ base: 'column', md: 'unset' }}
                alignItems={{ base: 'center', md: 'unset' }}
                justifyContent='unset'
            >
                <InputContact formId={ContactId3} formName={ContactInputName3} />
                <InputContact formId={ContactId4} formName={ContactInputName4} />
            </Flex>
            <Input as='textarea' id='first-name' placeholder='WRITE YOUR MESSAGE'
                margin={{ base: '13px 0px 6px 0px', md: '20px 0px 18px 0px' }}
                width={{ base: 'unset', md: '100%' }}
                minWidth='300px'
                minHeight='100px'
                padding='13px 0px 0px 15px'
                resize='none'
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
            />
        </Box>
    )
}

export default FormInput