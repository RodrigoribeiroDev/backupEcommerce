import {useAppContext} from '../newHook/useAppContext'
import { IoAddCircleOutline } from "react-icons/io5";
import '../Style/ButtonCart.css'


const ButtonCart = ({product}) => {
 const { addToCart } = useAppContext();

  const addToItems = () => {
    addToCart(product);
    console.log('Adicionando item:', product); 
  };

  return (
    <div>
      <button className='buttonCart' onClick={addToItems}>
        <IoAddCircleOutline />
        <span className="tooltip">Adicionar ao carrinho</span>
        </button>
    </div>
  );
};

export default ButtonCart;
