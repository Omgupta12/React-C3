import React, { createContext } from "react";
import { useEffect, useState } from "react";
const axios = require("axios").default;

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  
  

  useEffect(() => {
    axios(`http://localhost:8080/cartItems`).then((r) => {
      setCartCount(r.data.length);
    });
  }, []);

  

  return (
    <CartContext.Provider value={{ cartCount }}>
      {children}
    </CartContext.Provider>
  );
};