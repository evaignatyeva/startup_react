import React from 'react'

import FormInput from './components/FormInput'
import FormButton from './components/FormButton'

import {
    Flex,
    FormControl
} from '@chakra-ui/react'

function FormBlock() {
    return (
        <Flex
            justifyContent='center'
        >
            <FormControl
                isRequired
                width='unset'
            >
                <FormInput />
                <FormButton />
            </FormControl>
        </Flex>
    )
}

export default FormBlock