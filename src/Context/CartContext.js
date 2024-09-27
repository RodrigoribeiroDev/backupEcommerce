import React, { createContext, useState } from "react";


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [ productsCart, setProductsCart ] = useState([]);
  const [ count, setCount ] = useState(0);
  const [ favorite, setFavorite ] = useState([]);
  const [ countFavorite, setCountFavorite ] = useState(0);

  //Adicionar itens ao carrinho
  //o prevCart cria uma cópia do array
  const addToCart = ( product ) => {
      setProductsCart( prevCart => [...prevCart, product ]);
      setCount(count + 1);
  };
  const removeFromCart = ( product ) => {
    setProductsCart( prevCart => prevCart.filter
      (index => index !== product));
      setCount(count - 1);
    };
  
 const addToFavorite = ( product ) => {
    setFavorite( prevCart => [...prevCart, product])
    setCountFavorite( countFavorite + 1 );
  }
  
  return (
    <CartContext.Provider 
    value={{ productsCart,
      favorite,
      addToCart,
      count,
      countFavorite,
      addToFavorite,
      removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
