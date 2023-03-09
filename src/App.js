import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navigation from './Navigation';

function App() {
  return (
  <>
    <Navigation />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;