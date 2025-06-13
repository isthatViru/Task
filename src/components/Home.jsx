import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Img from '../media/img.jpg';
import '../style/Home.css';

const Home = () => {
  const nav = useNavigate();

  return (
    <Box className="home-section">
      <Container maxWidth="lg" className="home-container">
        <Box className="home-text">
          <Typography variant="h3" className="home-heading">
            Hey, Welcome to the store
          </Typography>
          <Typography variant="body1" className="home-subtext">
            Quick look around, grab what you like. Cart’s waiting.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              variant="contained"
              onClick={() => nav('/products')}
              startIcon={<StorefrontIcon />}
            >
              Explore Products
            </Button>
            <Button
              variant="outlined"
              onClick={() => nav('/cart')}
              startIcon={<ShoppingCartOutlinedIcon />}
            >
              Go to Cart
            </Button>
          </Stack>
        </Box>

        <Box
          component="img"
          src={Img}
          alt="shopping image"
          className="home-image"
        />
      </Container>
    </Box>
  );
};

export default Home;
