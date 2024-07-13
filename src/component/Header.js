import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import SideNavBar from './SideBar';

const Header = () => {
    return (
        <>
            <AppBar elevation={0} sx={{ backdropFilter: 'blur(10px)', backgroundColor: 'transparent' }}>
                <Container>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h6" fontWeight={600} color={'white'}>Food World 🍔</Typography>
                        <SideNavBar/>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box height={60} />
        </>
    );
};

export default Header;
