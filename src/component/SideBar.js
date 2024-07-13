import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material';
import { DiceThree, Hamburger, Heart, HouseSimple, List as ListIcon, User } from 'phosphor-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
    { text: 'Home', icon: <HouseSimple color='white' size={24} />, path: '/' },
    { text: 'Menu', icon: <ListIcon color='white' size={24} />, path: '/menu' },
    { text: 'Favorites', icon: <Heart color='white' size={24} />, path: '/favorite' },
    { text: 'Random Meal', icon: <DiceThree color='white' size={24} />, path: '/random' },
];

const bottomItems = [
    { text: 'About Me', icon: <User color='white' size={24} />, path: '/about' },
]

const SideNavBar = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <div>
            <IconButton onClick={toggleDrawer}>
                <Hamburger color='white' size={28} />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={toggleDrawer}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 250,
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        color: '#ffffff',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '16px',
                    },
                }} >
                <Stack height={'100%'} px={2}>
                    <List>
                        {menuItems.map((item, index) => (
                            <ListItemButton key={index} components={Link} to={item.path} onClick={toggleDrawer}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        ))}
                    </List>
                    <List sx={{ mt: 'auto', mb: 2 }}>
                        {bottomItems.map((item, index) => (
                            <ListItemButton key={index} components={Link} to={item.path} onClick={toggleDrawer}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        ))}
                    </List>
                </Stack>
            </Drawer>
        </div>
    );
};

export default SideNavBar;
