import React from 'react'
import { useAppContext } from '../newHook/useAppContext'
import '../Style/Cart.css'


const Favorite = () => {
  const { favorite } = useAppContext();

  return (
    <div className='containerProducts'>
      {favorite.length > 0 ? (
        favorite.map((product) => (
          <span key={product.id}>
            <p>{product?.title}</p>
            <img src={product?.image} alt={product?.title} />
          </span>
        ))
      ) : (
        <p>Adicione produtos aos favoritos para visualizar!</p>
      )}
    </div>
  );
};

export default Favorite;
