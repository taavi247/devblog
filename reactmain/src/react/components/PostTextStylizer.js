import { Typography } from '@mui/material';

const PostTextStylizer = (text) => {
  var splitted = text.split('\n');
  return splitted.map(str => {
    return (
      <div>
        <Typography>{str}</Typography>
        <br />
      </div>
    );
  });
}

export default PostTextStylizer;