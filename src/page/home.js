import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { Hamburger, Heart, Shuffle } from 'phosphor-react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import HomeHeroImage from '../assets/home-hero.png';
import Header from "../component/Header";

const Home = () => {
    const menuItems = [
        { text: "Menu", icon: <Hamburger size={24} />, gradient: 'linear-gradient(180deg, hsl(60deg 72% 85%) 0%, hsl(57deg 90% 72%) 44%, hsl(55deg 100% 52%) 100%)' },
        { text: "Favorite", icon: <Heart size={24} />, gradient: 'linear-gradient(180deg, hsl(200deg 72% 85%) 0%, hsl(197deg 90% 72%) 44%, hsl(195deg 100% 52%) 100%)' },
        { text: "Random", icon: <Shuffle size={24} />, gradient: 'linear-gradient(180deg, hsl(300deg 72% 85%) 0%, hsl(297deg 90% 72%) 44%, hsl(295deg 100% 52%) 100%)' },
    ];

    return (
        <Box>
            <Header />
            <Container>
                <Stack direction={'row'} alignItems={'center'}>
                    <Box>
                        <Typography variant={"h2"} fontWeight={600} color={'white'}>
                            Your Delightful Dining 🍕, Direct to You
                        </Typography>
                        <Stack direction={'row'} spacing={2} mt={4}>
                            {menuItems.map((item, index) => (
                                <Link
                                    key={index}
                                    component={RouterLink}
                                    to={`/${item.text.toLowerCase()}`}
                                    underline="none"
                                    sx={{
                                        borderRadius: 10,
                                        padding: "12px 16px",
                                        backgroundImage: item.gradient,
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        textDecoration: 'none',
                                        minWidth: 100,
                                        height: 40,
                                    }}
                                >
                                    {item.icon}
                                    <Typography ml={1}>{item.text}</Typography>
                                </Link>
                            ))}
                        </Stack>
                    </Box>
                    <img src={HomeHeroImage} alt='hero' />
                </Stack>
            </Container>
        </Box>
    )
}

export default Home;
