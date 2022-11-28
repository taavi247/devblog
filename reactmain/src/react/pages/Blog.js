import React, { useEffect, useState } from 'react'
import {
  Container,
  Grid
} from '@mui/material';
import Post from '../components/Post';
import { getPosts } from '../utils/getPosts';

const emptyPost = [
  {
    'title': '',
    'description': '',
    'content': '',
  }
]

const Blog = () => {
  const [posts, setPosts] = useState(emptyPost);

  const updatePosts = () => {
    getPosts().then(json => {
      setPosts(json);
    });
  }

  useEffect(() => {
    updatePosts();
  }, []);

  return (
    <Container maxWidth='md'>
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Post key={post.title} post={post} />
        ))}
      </Grid>
    </Container>
  );
}

export default Blog;