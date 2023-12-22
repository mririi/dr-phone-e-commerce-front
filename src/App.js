import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom"; // Import the necessary components
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Products from "./components/products/Products";
import Layout from "./components/layout/Layout";
import ShoppingCart from "./components/payment/ShoppingCart";
import ProductDetail from "./components/products/ProductDetail";
import Home from "./components/home/Home";
import { AuthProvider } from "./context/authContext";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Outlet />
              </Layout>
            }
          >
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="cart" element={<ShoppingCart />} />
            <Route path="products/:productId" element={<ProductDetail />} />
          </Route>
          <Route path="dashboard/:token" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
