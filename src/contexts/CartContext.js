import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { getProducts } from "../helpers/buscador";

export const CartContext = createContext([]);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(false);

  const addCart = (item) => {
    setCart([...cart, item]);
  };

  useEffect(() => {
    setProducts(getProducts());
  }, [cart, total]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        products,
        total,
        addCart,
        limit,
        setLimit,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
