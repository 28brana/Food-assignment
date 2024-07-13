import { Card, CardContent, Container, Grid, Skeleton, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoryCard from '../component/CategoryCard';
import Header from '../component/Header';

const MenuPage = () => {
    const [categories, setCategories] = useState([]);
    const [expandedId, setExpandedId] = useState(null); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
                setCategories(response.data.categories);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const handleExpandClick = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <>
            <Header />
            <Container sx={{mt:5}}>
                <Typography variant='h4' color={'white'} mb={4}>Gourmet Menu 😋</Typography>
                <Grid container spacing={3} pb={10}>
                    {loading ? (
                        Array.from({ length: 6 }).map((_, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card sx={{ backgroundColor: '#424242', color: '#ffffff' }}>
                                    <Skeleton animation="wave" variant="rect" height={140} />
                                    <CardContent>
                                        <Skeleton animation="wave" height={20} style={{ marginBottom: 6 }} />
                                        <Skeleton animation="wave" height={20} width="80%" />
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    ) : (
                        categories.map((category) => (
                            <Grid item key={category.idCategory} xs={12} sm={6} md={4}>
                                <CategoryCard
                                    category={category}
                                    expanded={expandedId === category.idCategory}
                                    onExpandClick={() => handleExpandClick(category.idCategory)}
                                />
                            </Grid>
                        ))
                    )}
                </Grid>
            </Container>
        </>
    );
};

export default MenuPage;
