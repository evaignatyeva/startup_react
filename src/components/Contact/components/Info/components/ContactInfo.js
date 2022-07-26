import React, { useState } from 'react'

import {
    Box,
    Text
} from '@chakra-ui/react'

import { VscChevronDown } from "react-icons/vsc"

const ContactInfo = ({ contactIcon, contactTitle, contactDopText }) => {
    const [isActive, setIsActiveText] = useState(false)

    return (
        <Box
            onClick={() => setIsActiveText((prev) => !prev)}
            display='flex'
            minWidth={{ base: '250px', md: 'unset' }}
            padding={{ base: '0px 0px 5px 0px', md: '0px 10px 35px 0px' }}
            _last={{
                padding: { base: '0px 0px 15px 0px', md: 'unset' }
            }}
        >
            <Box
                display={{ base: 'none', md: 'block' }}
                paddingRight='11px'
            >
                {contactIcon}
            </Box>
            <Box
                transform={{ base: isActive ? 'rotate(-180deg)' : 'unset' }}
                transition='all 0.4s ease 0s'
                fontSize='20px'
                display={{ base: 'flex', md: 'none' }}
                justifyContent='flex-end'
                height='20px'
            >
                <VscChevronDown />
            </Box>
            <Box
                paddingLeft={{ base: '8px', md: 'unset' }}
            >
                <Text
                    textAlign='left'
                    fontFamily='title'
                    fontWeight='400'
                    fontSize='14px'
                    padding='0px 0px 15px 0px'
                >
                    {contactTitle}
                </Text>
                <Text
                    display={{ base: isActive ? 'block' : 'none', md: 'block' }}
                    textAlign='left'
                    fontSize='13px'
                    lineHeight='19px'
                >
                    {contactDopText}
                </Text>
            </Box>
        </Box>
    )
}

export default ContactInfo;