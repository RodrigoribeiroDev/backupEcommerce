import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './Context/CartContext'; 
import Home from './Components/Home';
import Cart from './Components/Cart';
import Menu from './Components/Menu';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductsCard from './Components/ProductsCard';
import Favorite from './Components/Favorite';
import PayamentForm from './Components/PaymentForm'
import ButtonCode from './Components/ButtonCode';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
  
  { index: true, element: <ProductsCard /> }, //Esconde o elemento quando clickado em outro
  { path: "cart", element: <Cart /> },
  { path: "menu", element: <Menu /> },
  { path: "favorite", element: <Favorite />},
  { path: "payamentForm", element: <PayamentForm />},
  { path: "buttonCode", element: <ButtonCode /> }
],
},
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CartProvider>
      
      <RouterProvider router={router} />
      
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
