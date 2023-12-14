import React from "react";
import Header from "./Header";
import { CartProvider } from "../../context/cartContext";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ padding: "20px", marginTop: 100 }}>
        <CartProvider>{children}</CartProvider>
      </div>
    </div>
  );
};

export default Layout;
