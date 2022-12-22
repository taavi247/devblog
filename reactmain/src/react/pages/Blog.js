import React, { useEffect, useState } from 'react'
import {
  Container
} from '@mui/material';
import Post from '../components/Post';
import { getPosts } from '../utils/getPosts';
import * as constants from '../common/constants';

const Blog = () => {
  const [posts, setPosts] = useState(constants.emptyPost);

  const updatePosts = () => {
    getPosts().then(json => {
      json.sort((a, b) => {
        if (a.date_created > b.date_created) {
          return -1;
        }
        return 0;
      })
      setPosts(json);
    });
  }

  useEffect(() => {
    updatePosts();
  }, []);

  return (
    <Container maxWidth='md'>
      {posts.map((post) => (
        <Post key={post.title} post={post} />
      ))}
    </Container>
  );
}

export default Blog;