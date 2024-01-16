import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavContext from './context/NavContext';
import '../src/css/global.css';
import NavBar from './components/nav/nav-component';
import Products from './pages/products/index';
import Home from './pages/home/index';

const App = () => {
  const [basket, setBasket] = useState(0)

  return (
    <React.StrictMode>
      <NavContext.Provider value={{basket, setBasket}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<Home />} />
              <Route path="/products" element={<Products/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NavContext.Provider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


