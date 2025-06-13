import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' style={{backgroundColor:'#27548A'}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ display:'flex', gap:5}}>
          <Typography
            component={NavLink}
            to="/"
            sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}
          >
            Home
          </Typography>
             <Typography
            component={NavLink}
            to="/Products"
            sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}
          >
            Products
          </Typography>
             <Typography
            component={NavLink}
            to="/Cart"
            sx={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}
          >
            Cart
          </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
