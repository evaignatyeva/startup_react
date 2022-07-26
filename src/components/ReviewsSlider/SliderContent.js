import React, { useState } from 'react'

import { reviewsSlider } from './imageSlider'
import SwipeableViews from 'react-swipeable-views';
import Pagination from './Pagination';

import {
    Box,
    Text
} from '@chakra-ui/react'

const styles = {
    slideContainer: {
        minHeight: 100,
    },
};

function SliderContent() {

    const [index, setIndex] = useState(0);
    const handleChangeIndex = index => setIndex(index)

    return (
        <Box
            id='slider'
            maxWidth='1175px'
            padding='0px 15px'
            margin='0 auto'
            position='relative'
        >
            <Box
            >
                <SwipeableViews
                    index={index}
                    onChangeIndex={handleChangeIndex}
                    enableMouseEvents
                >
                    {reviewsSlider.map((slide, index) => (
                        <Box style={Object.assign({}, styles.slideContainer)}
                            paddingTop={{ base: '20px', md: '0px' }}
                            cursor='grab'
                            margin='0 auto'
                            width={{ base: '100%', sm: '80%', md: '50%' }}
                        >
                            <Text
                                paddingBottom='35px'
                                fontSize='18px'
                            >
                                {slide.review}
                            </Text>
                            <Text
                                paddingBottom='20px'
                                fontSize='20px'
                            >
                                {slide.name}
                            </Text>
                        </Box>
                    ))}
                </SwipeableViews>
                <Pagination
                    dots={3}
                    index={index}
                    onChangeIndex={handleChangeIndex}
                />
            </Box>
        </Box>
    );
}

export default SliderContent;