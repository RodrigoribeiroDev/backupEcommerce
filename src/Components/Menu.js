import { useAppContext } from '../newHook/useAppContext';
import '../Style/Menu.css'
import { useNavigate } from 'react-router-dom';



const Menu = () => {

const {count} = useAppContext()
const navigate = useNavigate()
const toggleNavigate = ()=>{
  navigate('/cart')
}

  return (
    <div className='containerMenu'>
        <section className='MenuList'>
            <span className='MenuSpan'>Entrar</span> <br />
            <span className='MenuSpan'>Lista de Favoritos</span> <br />
            <span className='MenuSpan' onClick={toggleNavigate}>
              Carrinho de compras <p className='contador'>{count}</p>
              </span> <br />
            <span className='MenuSpan'>Sobre</span> <br />
        </section>
    </div> 
  )
}

export default Menu
