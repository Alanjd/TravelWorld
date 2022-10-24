import './App.css';
import NavBar  from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Subtitulo from './components/Subtitulo/Subtitulo';
import ItemListOfertas from './components/ItemListOfertas/ItemlistOfertas';

function App() {
  return (
    <>
     <NavBar/> 
     <Subtitulo greeting="Destinos"/>
     <ItemListContainer/>
     <Subtitulo greeting="Ofertas"/>
     <ItemListOfertas/>
    </>
  );
}

export default App;


