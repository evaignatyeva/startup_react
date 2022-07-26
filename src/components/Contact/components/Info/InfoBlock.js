import React from 'react'

import ContactInfo from './components/ContactInfo'

import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { HiOutlineMail } from 'react-icons/hi'

import {
    Box
} from '@chakra-ui/react'

function InfoBlock() {
    const titleContact1 = 'ADDRESS'
    const dopTextContact1 = <>312, 7th Ave, New York <br /> NY 101200, United States of America</>

    const titleContact2 = 'HOTLINE (24x7)'
    const dopTextContact2 = <>+65 005 2 300, +65 88251 210 <br /> +88 01723 511 340</>

    const titleContact3 = 'E-MAIL'
    const dopTextContact3 = <>shapedtheme@gmail.com <br /> khalilkode@gmail.com</>
    return (
        <Box
            display='flex'
            justifyContent='center'
            alignItems={{ base: 'center', md: 'flex-start' }}
            flexDirection={{
                base: 'column', md: 'unset', lg: 'column'
            }}
        >
            <ContactInfo contactIcon={<FaMapMarkerAlt />} contactTitle={titleContact1} contactDopText={dopTextContact1} />
            <ContactInfo contactIcon={<MdPhoneIphone />} contactTitle={titleContact2} contactDopText={dopTextContact2} />
            <ContactInfo contactIcon={<HiOutlineMail />} contactTitle={titleContact3} contactDopText={dopTextContact3} />
        </Box>
    )
}

export default InfoBlock