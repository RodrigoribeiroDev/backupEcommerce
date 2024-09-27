import {useAppContext} from '../newHook/useAppContext'
import { FaHeartCirclePlus } from "react-icons/fa6";
import '../Style/ButtonFavorite.css'

const ButtonFavorite = ({favorite}) => {
 const { addToFavorite } = useAppContext();

  const addItens = () => {
    addToFavorite(favorite);
    console.log('Adicionando itens:', favorite); 
  };

  return (
    <div>
      <button className='buttonFavorite' 
      onClick={ addItens }>
       <FaHeartCirclePlus className='icon' />
        <span className="tooltip">Adicionar aos favoritos</span>
        </button>
    </div>
  );
};

export default ButtonFavorite;
