import React, { useState } from 'react'

import Menu from './components/Menu';
import WorkCard from './components/WorkCard'
import worksMenu from './components/worksMenu'
import TitleBlock from './TitleBlock'

import {
    Box,
    SimpleGrid,

} from '@chakra-ui/react'

function Works() {

    const items = ['All', 'Branding', 'Design', 'Development', 'Strategy']
    const [toggleState, setToggleState] = useState(0);

    const filteredItems = () => {
        if (toggleState !== 0) {
            return worksMenu.filter((curElem) => {
                return curElem.category === items[toggleState];
            })
        }

        return worksMenu
    }

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const mainNameWorks = 'Latest Works'

    return (
        <Box
            id="Works"
            padding={{ base: '50px 0px', sm: '60px 0px', md: '100px 0px' }}
        >
            <Box
                maxWidth='1175px'
                padding='0px 15px'
                margin='0 auto'
            >
                <TitleBlock title={mainNameWorks} />

                <Menu items={items} toggleState={toggleState} toggleTab={toggleTab} />

                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing='30px'
                    justifyItems='center'
                >
                    {filteredItems().map((elem) => {
                        return (
                            <WorkCard elem={elem} />
                        )
                    }
                    )}
                </SimpleGrid>
            </Box>
        </Box >
    )
}

export default Works;