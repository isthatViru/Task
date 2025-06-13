import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios';
import { Alert } from '@mui/material';
import '../style/ProductData.css';
import {
  Container,
  Typography,
  Button,
  CircularProgress,
  Box,
  Card,
  CardMedia,
  CardContent
} from "@mui/material";
const ProductData = () => {
    const {id}=useParams()
    const nav=useNavigate()
    const [product,setProduct]=useState()
  const [error,setError]=useState();
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((response)=>{
            setProduct(response.data)
            setError()
        })
        .catch(()=>{
            setError("Something Went Wrong")
        });
    },[id])
 const handleCart = () => {
  if (!product) return;

  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({
    id: product.id,
    title: product.title,
    price: product.price,
    image: product.image
  });
  localStorage.setItem('cart', JSON.stringify(cart));
  nav('/cart');
};

      if (error) {
    return (
      <Container sx={{ mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

if (!product) {
  return (
    <Box textAlign="center" mt={4}>
      <CircularProgress />
    </Box>
  );
}
  return (
     <Container className="product-container" style={{width:'300rem'}}>
  <Typography variant="h4" className="product-title">
    Product Details
  </Typography>

  <Card className="product-card">
    <CardMedia
      component="img"
      image={product.image}
      alt={product.title}
      className="product-image"
    />
    <CardContent className="product-content">
      <Typography variant="h5" gutterBottom>
        {product.title}
      </Typography>
      <Typography variant="body1">
        {product.description}
      </Typography>
      <Typography variant="h6" className="product-price">
        Price: ${product.price}
      </Typography>
      <Button
        variant="contained"
        className="add-to-cart-btn"
        onClick={handleCart}
      >
        Add to Cart
      </Button>
    </CardContent>
  </Card>
</Container>


  );
};

export default ProductData