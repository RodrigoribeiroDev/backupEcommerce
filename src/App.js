import './App.css';
import Nav from './Components/Nav';
import Menu from './Components/Menu'
import { Outlet } from 'react-router-dom';

function App() {
  return (

    <div className="App">
                <Nav />
               
                <Menu />
                <Outlet /> {/*reaproveitamento de paginas*/}
    </div>


  );
}

export default App;
