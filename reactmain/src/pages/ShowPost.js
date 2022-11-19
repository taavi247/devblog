import React from 'react'
import { Container } from '@mui/material';
import { useLocation } from 'react-router-dom';

const ShowPost = () => {
    const post = useLocation().state;

    return (
        <Container maxWidth='md'>
            <h2>About</h2>
            <p maxWidth='md'>
                {post.description}
            </p>
        </Container>
    );
}

export default ShowPost;