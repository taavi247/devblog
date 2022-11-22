import React from 'react';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledCard = styled(Card)({
    background: '#FFFFFF',
    margin: 10,

});

const StyledTitle = styled(Typography)({
    fontSize: 18,
    paddingBottom: 4,
});

export default function Post(props) {
    const { post } = props;

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component={Link} to='/showpost' state={post}>
                <StyledCard>
                    <CardContent>
                        <StyledTitle>
                            {post.title}
                        </StyledTitle>

                        <Typography>
                            {post.description}
                        </Typography>
                    </CardContent>
                </StyledCard>
            </CardActionArea>
        </Grid>
    );
}

//<CardMedia
//    component='img'
//    image={require('../assets/imgs/' + post.image).default}
//    alt='Picture'
//    title='A Bug'
//    justifyContent='left'
//    sx={{ objectFit: "contain" }}
///>