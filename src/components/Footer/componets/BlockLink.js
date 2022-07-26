import React from 'react'

import { FaTwitter } from 'react-icons/fa'

import Link from './Link'

import {
    Box,
} from '@chakra-ui/react'

function BlockLink() {
    return (
        <Box
            _after={{
                content: '""',
                display: 'block',
                margin: '29px auto 30px auto',
                width: '50px',
                height: '2px',
                backgroundColor: '#fff'
            }}
        >
            <Link iconLink={<FaTwitter />} />
            <Link iconLink={<FaTwitter />} />
            <Link iconLink={<FaTwitter />} />
            <Link iconLink={<FaTwitter />} />
        </Box>
    )
}

export default BlockLink;