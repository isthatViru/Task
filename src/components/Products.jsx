import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Alert,
  Box,
} from "@mui/material";
import Icon from "@mui/material/Icon";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import axios from "axios";
import "../style/Products.css";
const Products = () => {
  const nav = useNavigate();
  const [product, setProduct] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProduct(response.data);
        setError();
      })
      .catch(() => {
        setError("Something Went Wrong");
      });
  }, []);
  
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
  return (
    <Box className="product-box">
      <Typography variant="h4" className="product-title">
        Products
      </Typography>

      {error && (
        <Alert
          severity="error"
          sx={{
            mb: 2,
            textAlign: "center",
            width: "100rem",
            justifyContent: "center",
            mt: 5,
          }}
        >
          {error}
        </Alert>
      )}

      <Grid container spacing={10} justifyContent={"center"}>
        {product.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card className="product-card">
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                className="card-image"
              />
              <CardContent>
                <Typography className="card-title">{item.title}</Typography>
                <Typography className="card-price">${item.price}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  to={`/productData/${item.id}`}
                  variant="outlined"
                  className="card-button"
                >
                  View
                </Button>
                <Button
                  variant="outlined"
                  className="card-button"
                  onClick={handleCart}
                >
                  <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
