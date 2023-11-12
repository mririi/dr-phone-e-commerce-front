import React from 'react';
import Header from './Header';
import { CartProvider } from '../cartContext';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ padding: '20px' }}>
        <CartProvider>{children}</CartProvider>
        </div>
      {/* You can add a footer or other elements here if needed */}
    </div>
  );
};

export default Layout;