import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { DiceThree, Heart, HouseSimple, List as ListIcon, User } from 'phosphor-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
    { text: 'Home', icon: <HouseSimple size={24} />, path: '/' },
    { text: 'Menu', icon: <ListIcon size={24} />, path: '/menu' },
    { text: 'Favorites', icon: <Heart size={24} />, path: '/favorites' },
    { text: 'Random Meal', icon: <DiceThree size={24} />, path: '/random' },
    { text: 'About Me', icon: <User size={24} />, path: '/about' },
];

const SideNavBar = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <div>
            <IconButton onClick={toggleDrawer}>
                <ListIcon size={24} />
            </IconButton>
            <Drawer anchor="left" open={open} onClose={toggleDrawer}>
                <List>
                    {menuItems.map((item, index) => (
                        <ListItemButton  components={Link} to={item.path} onClick={toggleDrawer}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
        </div>
    );
};

export default SideNavBar;
