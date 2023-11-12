import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import the necessary components

import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import NotAuthorized from './components/NotAuthorized';
import Home from './components/Home';
import Layout from './components/Layout';
import ShoppingCart from './components/ShoppingCart';
import ProductDetail from './components/ProductDetail';
import Sidebar from './components/SideBar';

function App() {
  const isAuthenticated =()=> {
    return !!localStorage.getItem('token');
  }
  const [filters, setFilters] = useState({
    category: null,
    // Add more filters as needed
  });
  const handleFilter = (key, value) => {
    console.log(key, value)
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };
  return (
    <Router>
      <Layout>
      <Sidebar categories={[{name:"helloa"}]} handleFilter={handleFilter} />
        <Routes>
          <Route path="/" element={<Home filters={filters} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={isAuthenticated() ? < Profile /> : <NotAuthorized />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          </Routes>
          </Layout>
    </Router>
  );
}

export default App;
