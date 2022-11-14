import {
    Card,
    CardActionArea,
    CardContent,
    Grid,
    Typography
} from '@mui/material';
import React from 'react';

function FeaturedPost(props) {
    const { post } = props;

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component='a' href='#'>
                <Card>
                    <CardContent>
                        <Typography>
                            {post.title}
                        </Typography>
                        <Typography>
                            {post.description}
                        </Typography>
                        <Typography>
                            {post.linkText}
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </Grid>
    );
}

export default FeaturedPost;