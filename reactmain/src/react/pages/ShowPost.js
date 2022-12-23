import React from 'react'
import { Container, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import PostTextStylizer from '../components/PostTextStylizer';

const ShowPost = () => {
  const post = useLocation().state;

  return (
    <Container maxWidth='md'>
      <br/>
      <Typography variant='h5'>{post.title}</Typography>
      <br />
      {PostTextStylizer(post.content)}
    </Container>
  );
}

export default ShowPost;