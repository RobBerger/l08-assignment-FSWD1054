import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navigation from './Navigation';
import ProductList from './ProductList';

function App() {
  return (
  <>
    <Navigation />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;