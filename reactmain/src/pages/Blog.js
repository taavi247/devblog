import React from 'react'
import {
    Container,
    Grid
} from '@mui/material';
import Post from '../components/Post';
import { examplePosts } from './exampleposts';
    
const Blog = () => {
    return (
        <Container maxWidth='md'>
            <Grid container spacing={4}>
                {examplePosts.map((post) => (
                    <Post key={post.title} post={post} />
                ))}
            </Grid>
        </Container>
    );
}

export default Blog;