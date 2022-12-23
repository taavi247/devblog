import React from 'react';
import { CardMedia, Typography } from '@mui/material';

const PostTextStylizer = (text) => {
  var splittedParagraphs = text.split('\n');
  return splittedParagraphs.map((str, index) => {
    if (str.startsWith('image:')) {
      return (
        <CardMedia
          key={index}
          component='img'
          image={str.slice(6)}
          alt='Picture'
          sx={{ display: { xs: 'block' } }}
        />
      );
    }
    else {
      return (
        <React.Fragment key={index}>
          <Typography>{str}</Typography>
          <br />
        </React.Fragment>
      );
    }
  });
}

export default PostTextStylizer;