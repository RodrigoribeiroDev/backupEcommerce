import React, { createContext, useState, useEffect } from "react";


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [ productsCart, setProductsCart ] = useState([]);
  const [count, setCount] = useState(0);

  //Adicionar itens ao carrinho
  const addToCart = (product) => {
      setProductsCart((prevCart) => [...prevCart, product]);
      setCount(count + 1);
      console.log('mostrando os itens', productsCart)
  };

  
  return (
    <CartContext.Provider value={{ productsCart, addToCart, count }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
