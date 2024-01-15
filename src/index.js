import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/css/global.css';
import NavBar from './components/nav/nav-component';
import ProductPage from './pages/products/product-page'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home/home-page';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<NavBar />}>
        <Route index element={<HomePage />} />
          <Route path='/products' element={<ProductPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


