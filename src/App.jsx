import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import ProductData from './components/ProductData';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/Products' element={<Products />} />
            <Route path='/Cart' element={<Cart />} />
          <Route path="/productData/:id" element={<ProductData />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

