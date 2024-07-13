import { Button, Card, CardContent, CardMedia, Collapse, Container, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import Header from "../component/Header";

const RandomMeal = () => {
    const [meal, setMeal] = useState(null);
    const [expanded, setExpanded] = useState(false);

    const fetchRandomMeal = async () => {
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
            setMeal(response.data.meals[0]);
        } catch (error) {
            console.error('Error fetching random meal:', error);
            setMeal(null);
        }
    };

    const handleGenerateRandomMeal = () => {
        fetchRandomMeal();
        setExpanded(false);
    };

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Header />
            <Container sx={{ pb: 10 }} >
                <Stack alignItems={'center'} justifyContent={'center'} width={'100%'} mt={5}>
                    <Button variant="contained" color="primary" onClick={handleGenerateRandomMeal} sx={{ mt: 2 }}>
                        Generate Random Meal
                    </Button>
                </Stack>
                <Stack alignItems={'center'} justifyContent={'center'} width={'100%'} mt={5}>
                    {meal ? (
                        <Card sx={{ maxWidth: 600, background: 'rgba(255, 255, 255, 0.2)', borderRadius: 2, boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)', border: '1px solid rgba(255, 255, 255, 0.3)', color: '#ffffff' }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image={meal.strMealThumb}
                                alt={meal.strMeal}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {meal.strMeal}
                                </Typography>
                                <Collapse in={!expanded} timeout="auto" unmountOnExit>
                                    <Typography variant="body2" color="textSecondary">
                                        {meal.strInstructions.length > 150 ? `${meal.strInstructions.slice(0, 150)}...` : meal.strInstructions}
                                    </Typography>
                                </Collapse>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <Typography variant="body2" color="textSecondary">
                                        {meal.strInstructions}
                                    </Typography>
                                </Collapse>
                                {meal.strInstructions.length > 150 && (
                                    <Button variant="text" onClick={toggleExpand} aria-expanded={expanded} aria-label="show more" sx={{ color: '#ffffff' }}>
                                        <Typography variant="body2">
                                            {expanded ? 'Less' : 'More'}
                                        </Typography>
                                    </Button>
                                )}
                            </CardContent>
                        </Card>
                    ) : (
                        <Typography variant="body1" color="white">
                            Please generate a random meal.
                        </Typography>
                    )}
                </Stack>

            </Container>
        </>
    );
};

export default RandomMeal;
