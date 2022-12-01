import React from 'react';
import { Typography } from '@mui/material';

const PostTextStylizer = (text) => {
  var splitted = text.split('\n');
  return splitted.map((str, index) => {
    return (
      <div key={index}>
        <Typography>{str}</Typography>
        <br />
      </div>
    );
  });
}

export default PostTextStylizer;