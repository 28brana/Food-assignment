import { Button, Card, CardContent, CardMedia, Collapse, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category, expanded, onExpandClick }) => {
    return (
        <Card sx={{
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: 2,
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: '#ffffff'
        }}>

            <Link to={`/menu/${category.strCategory}`}>
                <CardMedia
                    component="img"
                    height="140"
                    image={category.strCategoryThumb}
                    alt={category.strCategory}
                />
            </Link>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {category.strCategory}
                </Typography>
                <Typography variant="body2" color="grey">
                    {category.strCategoryDescription.length > 150 ? (
                        <>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <Typography variant="body2" color="grey">
                                    {category.strCategoryDescription}
                                </Typography>
                            </Collapse>
                            <Collapse in={!expanded} timeout="auto" unmountOnExit>
                                <Typography variant="body2" color="grey">
                                    {`${category.strCategoryDescription.slice(0, 150)}...`}
                                </Typography>
                            </Collapse>
                            <Button
                                variant='text'
                                onClick={onExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                sx={{ color: '#ffffff' }}
                            >
                                <Typography variant='body2'>More</Typography>
                            </Button>
                        </>
                    ) : (
                        <Typography variant="body2" color="grey">
                            {category.strCategoryDescription}
                        </Typography>
                    )}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CategoryCard;
