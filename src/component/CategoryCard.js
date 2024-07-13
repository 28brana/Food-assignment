import { Button, Card, CardActionArea, CardContent, CardMedia, Collapse, IconButton, Typography } from '@mui/material';
import React from 'react';

const CategoryCard = ({ category, expanded, onExpandClick }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="140"
                image={category.strCategoryThumb}
                alt={category.strCategory}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {category.strCategory}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {category.strCategoryDescription.length > 150 ? (
                        <>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <Typography variant="body2" color="textSecondary">
                                    {category.strCategoryDescription}
                                </Typography>
                            </Collapse>
                            <Collapse in={!expanded} timeout="auto" unmountOnExit>
                                <Typography variant="body2" color="textSecondary">
                                    {`${category.strCategoryDescription.slice(0, 150)}...`}
                                </Typography>
                            </Collapse>
                            <Button
                                variant='text'
                                onClick={onExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more">
                                <Typography variant='body2'>More</Typography>
                            </Button>

                        </>
                    ) : (
                        <Typography variant="body2" color="textSecondary">
                            {category.strCategoryDescription}
                        </Typography>
                    )}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CategoryCard;