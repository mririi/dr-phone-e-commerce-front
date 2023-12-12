import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import the necessary components
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Products from './components/Products';
import Layout from './components/Layout';
import ShoppingCart from './components/ShoppingCart';
import ProductDetail from './components/ProductDetail';
import Home from "./components/Home";
import { AuthProvider } from './authContext';
import Checkout from './components/Checkout';

function App() {
  
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            </Routes>
            </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
