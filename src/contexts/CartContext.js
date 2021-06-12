import React, { createContext, useContext } from "react";

export const CartContext = createContext([]);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  return <CartContext.Provider value={[]}>{children}</CartContext.Provider>;
};
