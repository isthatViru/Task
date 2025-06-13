import { Box, Button, CardContent, CardMedia, Grid, Typography, Card } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const cartstore = JSON.parse(localStorage.getItem('cart')) || [];
    setItem(cartstore);
  }, []);

  const handleClear = () => {
    localStorage.removeItem('cart');
    setItem([]);
  };

  return (
    <Box sx={{ mt: 4, px: 2 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>

      {item.length === 0 ? (
        <Typography variant="body1">Cart is empty.</Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            {item.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    sx={{ height: 150, objectFit: 'contain', p: 2 }}
                  />
                  <CardContent>
                    <Typography variant="h6" noWrap>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${item.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box display="flex" justifyContent="flex-end" mt={4}>
            <Button variant="outlined" color="error" onClick={handleClear}>
              Clear Cart
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Cart;
