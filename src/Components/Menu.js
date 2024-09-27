import { useAppContext } from '../newHook/useAppContext';
import '../Style/Menu.css'
import { useNavigate } from 'react-router-dom';



const Menu = () => {

const { count } = useAppContext();
const { countFavorite } = useAppContext();
const navigate = useNavigate();

const toggleNavigate = ()=>{
  navigate('/cart')
}
const goToHome = () => {
  navigate('/');
};

const goToFavorite = () => {
  navigate('favorite')
}

  return (
    <div className='containerMenu'>
        <section className='MenuList'>

          <span className='MenuSpan' onClick={goToHome}>
            Home
            </span> <br />
            
            <span className='MenuSpan'>Entrar</span> <br />

            <span className='MenuSpan' onClick={goToFavorite}>
              Favoritos 
              <p className='contador'>{countFavorite}</p>
              </span> <br />

            <span className='MenuSpan' onClick={toggleNavigate}>
              Carrinho de compras
              <p className='contador'> {count}</p>
              </span> <br />

            <span className='MenuSpan'>Sobre</span> <br />
        </section>
    </div> 
  )
}

export default Menu
