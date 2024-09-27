import React, { useEffect, useState } from 'react'
import { baseURL } from '../API/baseURL'
import '../Style/Products.css'
import ButtonCart from "./ButtonCart";
import ButtonFavorite from './ButtonFavorite';
import '../Style/InputSearch.css'

const Products = () => {
  const [products, setProducts] = useState([])
  const [busca, setBusca] = useState('')

  const productsFilter = 
    products?.filter( product => 
    product?.title.toLowerCase()
    .includes(busca?.toLowerCase())  
  );

  useEffect(() => {
    fetch(`${baseURL}/products`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setProducts(data);
    })
  },[]);
  
  return (
    <div className='containerProducts'>

       <input  
          className='IptSearch' 
          type='text' 
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder='Digite seu produto' 
        />
        
        {productsFilter.map(( product ) => (
          <span key={product.id}>
            Name: {product.title} <br />
            <img src={product?.images}></img>
            <b>${product.price}</b>

             <ButtonCart product={product} />
             <ButtonFavorite favorite={product}/>
          </span>   
        ))}
       
    </div>
  )
}

export default Products