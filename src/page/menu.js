import { Card, CardContent, Container, Grid, Skeleton } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoryCard from '../component/CategoryCard';

const MenuPage = () => {
    const [categories, setCategories] = useState([]);
    const [expandedId, setExpandedId] = useState(null); // Track which card has expanded description
    const [loading, setLoading] = useState(true); // Track loading state

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
        <Container>
            <Grid container spacing={3}>
                {loading ? (
                    Array.from({ length: 6 }).map((_, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card>
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
    );
};

export default MenuPage;
