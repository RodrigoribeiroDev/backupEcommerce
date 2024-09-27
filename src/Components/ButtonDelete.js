import { IoTrash } from "react-icons/io5";
import { useAppContext } from "../newHook/useAppContext";
import '../Style/ButtonRemove.css'

const ButtonDelete = ({ product }) => {
    const { removeFromCart } = useAppContext();

    const removeItens = () => {
        removeFromCart(product)
        console.log('Removendo item', product)
    }
  return (
    <div>
        <button className="iconDelete" 
        onClick={removeItens}>
        <IoTrash />
        </button>
    </div>
  )
}

export default ButtonDelete