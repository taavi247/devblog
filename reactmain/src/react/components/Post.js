import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Paper,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import PostTextStylizer from '../components/PostTextStylizer';

const StyledTitle = styled(Typography)({
  fontFamily: 'cursive',
  fontStyle: 'normal',
  fontSize: 20,
  fontWeight: 'normal',
  paddingBottom: 4,
});

const StyledCardMedia = styled(CardMedia)({
  width: '40%',
  margin: 'auto',
});

export default function Post(props) {
  const { post } = props;

  return (
    <React.Fragment>
      <br />
      <Paper variant='outlined'>
        <CardActionArea component={Link} to='/showpost' state={post}>
          <Card sx={{ display: 'flex' }}>
            <StyledCardMedia
              component='img'
              image={post.image}
              alt='Picture'
              sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}
            />
            <CardContent sx={{ flex: 1 }}>
              <StyledTitle>
                {post.title}
              </StyledTitle>
              <Typography paddingBottom={1} sx={{ color: 'gray', fontStyle: 'italic' }}>
                {post.date_created}
              </Typography>
              {PostTextStylizer(post.description)}
              <Typography sx={{ color: 'gray', fontSize: 16 }}>
                Read more...
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Paper>
    </React.Fragment>
  );
}