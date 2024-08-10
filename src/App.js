
import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Cart from './Components/Cart'
import ProductsCard from './Components/ProductsCard'
import ButtonCart from './Components/ButtonCart'
import Menu from './Components/Menu'
import InputSearch from './Components/InputSearch'
import { Outlet } from 'react-router-dom';

function App() {
  return (

    <div className="App">
                <Nav />
                <InputSearch />
                <Menu />
                <Outlet /> {/*reaproveitamento de paginas*/}
    </div>


  );
}

export default App;
