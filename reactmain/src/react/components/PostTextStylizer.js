import React from 'react';
import { Typography } from '@mui/material';

const PostTextStylizer = (text) => {
  var splitted = text.split('\n');
  return splitted.map((str, index) => {
    return (
      <React.Fragment>
        <Typography>{str}</Typography>
        <br />
      </React.Fragment>
    );
  });
}

export default PostTextStylizer;