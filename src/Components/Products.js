import React, { useEffect, useState } from 'react'
import { baseURL } from '../API/baseURL'
import '../Style/Products.css'
import ButtonCart from "./ButtonCart";


const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setProducts(data);
    })
  },[]);
  
  return (
    <div className='containerProducts'>
        {products.map(product => (
          <span key={product.id}>
            Name: {product.title} <br />
            <img src={product.images}></img>
            <ButtonCart />
          </span>
        ))}
    </div>
  )
}

export default Products