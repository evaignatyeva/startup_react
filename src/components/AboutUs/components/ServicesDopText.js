import React from 'react'
import {
    Text
} from '@chakra-ui/react'

const ServicesDopText = ({ dopInfo }) => {
    return (
        <Text
            margin={{ base: 'unset', md: '0 15px 0px 0px' }}
            padding={{ base: '20px 0px 0px 0px', md: 'unset' }}
            _first={{
                padding: { base: 'unset' }
            }}
            _last={{
                margin: { base: 'unset', md: '0px 0px 0px 15px' }
            }}
            flex='0 1 50%'
            textAlign='left'
            lineHeight='24px'
            letterSpacing='0.7px'
        >
            {dopInfo}
        </Text>
    )
}

export default ServicesDopText;