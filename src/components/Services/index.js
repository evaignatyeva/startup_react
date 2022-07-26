import React from 'react'

import TitleBlock from '../Services/components/TitleBlock'
import CardBlock from '../Services/components/CardBlock'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faA } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faLifeRing } from '@fortawesome/free-solid-svg-icons'

import {
    Box,
    Text,

} from '@chakra-ui/react'


function Services() {
    const mainName = 'Services'
    const dopName = 'We offer ipsum dolor sit amet, consetetur sadipscing elitr amet'

    const servicesIcon1 = <FontAwesomeIcon icon={faA} width="50px" />
    const typography = 'clean typography'
    const servicesTitleDop = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum.'
    const servicesIcon2 = <FontAwesomeIcon icon={faCode} />
    const code = 'Rock Solid Code'
    const servicesIcon3 = <FontAwesomeIcon icon={faLifeRing} />
    const support = 'Expert Support'
    return (
        <Box
            id="Services"
            padding={{ base: '50px 0px', sm: '60px 0px', md: '100px 0px' }}
            textAlign='center'
        >
            <Box
                maxWidth='1175px'
                padding='0px 15px'
                margin='0 auto'
            >
                <TitleBlock title={mainName} titleDop={dopName} />
                <Box
                    display={{ base: 'unset', md: 'flex ' }}
                    margin={{ base: 'unset', md: '0 -20px' }}
                >
                    <CardBlock servicesIcon={servicesIcon1} servicesTitle={typography} servicesTitleDop={servicesTitleDop} />
                    <CardBlock servicesIcon={servicesIcon2} servicesTitle={code} servicesTitleDop={servicesTitleDop} />
                    <CardBlock servicesIcon={servicesIcon3} servicesTitle={support} servicesTitleDop={servicesTitleDop} />
                </Box>
            </Box>
        </Box>
    )
}

export default Services;