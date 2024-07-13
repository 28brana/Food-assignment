import { Card, CardContent, CardMedia, Container, Grid, IconButton, Skeleton, Stack, Typography } from "@mui/material";
import axios from "axios";
import { Heart } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/reducers/mainReducer";

const MenuCategory = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
        );
        setMeals(response.data.meals || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching meals:", error);
        setError("Error fetching meals. Please try again later.");
        setLoading(false);
      }
    };

    fetchMeals();
  }, [id]);

  const handleToggleFavorite = (meal) => {
    dispatch(toggleFavorite(meal));
  };

  const isFavorite = (meal) => favorites.some((fav) => fav.idMeal === meal.idMeal);

  return (
    <>
      <Header />
      <Container sx={{ pb: 10 }}>
        <Typography variant="h4" my={4} color="white" gutterBottom>
          {id} Meals
        </Typography>
        <Grid container spacing={3}>
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card sx={{ background: 'rgba(255, 255, 255, 0.2)', borderRadius: 2, boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)', border: '1px solid rgba(255, 255, 255, 0.3)', color: '#ffffff' }}>
                  <Skeleton animation="wave" variant="rect" height={140} />
                  <CardContent>
                    <Skeleton animation="wave" height={20} style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={20} width="80%" />
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : error || meals.length === 0 ? (
            <Stack alignItems="center" width="100%">
              <Typography variant="body1" color="error" mt={2}>
                {error || 'No Data Found'}
              </Typography>
            </Stack>
          ) : (
            meals.map((meal) => (
              <Grid item key={meal.idMeal} xs={12} sm={6} md={4}>
                <Card sx={{ background: 'rgba(255, 255, 255, 0.2)', borderRadius: 2, boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)', border: '1px solid rgba(255, 255, 255, 0.3)', color: '#ffffff' }}>
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
                      onClick={() => handleToggleFavorite(meal)}
                      aria-label="toggle favorite"
                    >
                      {isFavorite(meal) ? (
                        <Heart weight="fill" color="red" size={24} />
                      ) : (
                        <Heart color="gray" size={24} />
                      )}
                    </IconButton>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </>
  );
};

export default MenuCategory;
