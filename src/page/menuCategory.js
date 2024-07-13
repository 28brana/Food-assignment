import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, IconButton, Skeleton, Typography } from '@mui/material';
import axios from 'axios';
import { Heart } from 'phosphor-react'; // Import Phosphor icons
import React, { useEffect, useState } from 'react';

const MenuCategory = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef');
        setMeals(response.data.meals);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching meals:', error);
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  const toggleFavorite = (mealId) => {
    if (favorites.includes(mealId)) {
      setFavorites(favorites.filter(id => id !== mealId));
    } else {
      setFavorites([...favorites, mealId]);
    }
  };

  const isFavorite = (mealId) => favorites.includes(mealId);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Beef Meals
      </Typography>
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
          meals.map((meal) => (
            <Grid item key={meal.idMeal} xs={12} sm={6} md={4}>
              <Card>
            
                  <CardMedia
                    component="img"
                    height="140"
                    image={meal.strMealThumb}
                    alt={meal.strMeal}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {meal.strMeal}
                    </Typography>
                    <IconButton
                      onClick={() => toggleFavorite(meal.idMeal)}
                      aria-label="toggle favorite"
                    >
                      {isFavorite(meal.idMeal) ? <Heart weight='fill' color="red" size={24} /> : <Heart color="gray" size={24} />}
                    </IconButton>
                  </CardContent>
                
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default MenuCategory;
