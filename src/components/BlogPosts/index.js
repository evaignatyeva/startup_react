import React from 'react'

import TitleBlock from './components/TitleBlock'
import BlogCart from './components/BlogCart'

import {
    Box,

} from '@chakra-ui/react'

import imageBlog1 from '../../img/blog/blog1.jpg'
import imageBlog2 from '../../img/blog/blog2.jpg'


function BlogPosts() {
    const mainNameBlog = 'Recent blog posts'
    const dopNameBlog = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet'

    const PostsTitle1 = 'Startup ideas needs to be funded'
    const PostsTitle2 = 'User Interface Designing Elements'
    const PostsText1 = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam'
    const PostsText2 = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod teduntlabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et erebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidulabore et dolore aliquyam erat, sed diam'
    return (
        <Box
            id="Blog"
            padding={{ base: '50px 0px', sm: '60px 0px', md: '100px 0px' }}
        >
            <Box
                maxWidth='1175px'
                padding='0px 15px'
                margin='0 auto'
            >
                <TitleBlock title={mainNameBlog} titleDop={dopNameBlog} />
                <Box
                    padding={{
                        base: '35px 0px 0px', md: '50px 0px 0px', lg: '70px 0px 0px'
                    }}
                >
                    <BlogCart BlogImage={imageBlog1} PostsTitle={PostsTitle1} BlogText={PostsText1} />
                    <BlogCart BlogImage={imageBlog2} PostsTitle={PostsTitle2} BlogText={PostsText2} />
                </Box>
            </Box>
        </Box>
    )
}

export default BlogPosts;