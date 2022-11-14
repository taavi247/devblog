import React from 'react'
import {
    Container,
    Grid
} from '@mui/material';
import FeaturedPost from '../components/FeaturedPost';

const examplePosts = [
    {
        title: 'Example Title',
        description: 'Example description',
        linkText: 'Continue reading...',
    },
    {
        title: 'Example Title2',
        description: 'Example description2',
        linkText: 'Continue reading...',
    },
];

const Blog = () => {
    return (
        <Container maxWidth='lg'>
            <Grid container spacing={4}>
                {examplePosts.map((post) => (
                    <FeaturedPost key={post.title} post={post} />
                ))}
            </Grid>
        </Container>
    );
}

export default Blog;