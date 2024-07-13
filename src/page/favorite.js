import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardContent, CardMedia, Container, Grid, IconButton, Typography } from "@mui/material";
import { Heart } from "phosphor-react";
import Header from "../component/Header";
import { toggleFavorite } from "../redux/reducers/mainReducer";
import NoDataFound from "../component/NotFound";

const Favorite = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.favorites);

    const handleToggleFavorite = (meal) => {
        dispatch(toggleFavorite(meal));
    };

    return (
        <>
            <Header />
            <Container sx={{ pb: 10 }}>
                <Typography variant="h4" py={4} color={'white'} gutterBottom>
                    My Favorites
                </Typography>
                <Grid container spacing={3}>
                    {favorites.length === 0 ? <NoDataFound /> : <></>}
                    {favorites.map((favorite) => (
                        <Grid item key={favorite.idMeal} xs={12} sm={6} md={4}>
                            <Card sx={{ background: 'rgba(255, 255, 255, 0.2)', borderRadius: 2, boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)', border: '1px solid rgba(255, 255, 255, 0.3)', color: '#ffffff' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={favorite.strMealThumb}
                                    alt={favorite.strMeal}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {favorite.strMeal}
                                    </Typography>
                                    <IconButton
                                        aria-label="toggle favorite"
                                        onClick={() => handleToggleFavorite(favorite)}
                                    >
                                        <Heart weight="fill" color="red" size={24} />
                                    </IconButton>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default Favorite;
