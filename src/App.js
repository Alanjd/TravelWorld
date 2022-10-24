import './App.css';
import NavBar  from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Subtitulo from './components/Subtitulo/Subtitulo';

function App() {
  return (
    <>
     <NavBar/> 
     <Subtitulo greeting="Destinos"/>
     <ItemListContainer/>
    </>
  );
}

export default App;


