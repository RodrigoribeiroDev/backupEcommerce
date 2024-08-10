import {useAppContext} from '../newHook/useAppContext'
import { IoAddCircleOutline } from "react-icons/io5";
import '../Style/ButtonCart.css'


const ButtonCart = ({product}) => {
 const { addToCart } = useAppContext();

  const addToItems = () => {
    addToCart(product);
    console.log('Tentando adicionar item:', product); 
  };

  return (
    <div>
      <button onClick={addToItems}>
        <IoAddCircleOutline />
        </button>
    </div>
  );
};

export default ButtonCart;
