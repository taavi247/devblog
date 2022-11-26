import React from 'react'
import { Container, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const ShowPost = () => {
  const post = useLocation().state;

  return (
    <Container maxWidth='md'>
      <Typography variant='h5'>{post.title}</Typography>
      <p>
        {post.description}
      </p>
    </Container>
  );
}

export default ShowPost;