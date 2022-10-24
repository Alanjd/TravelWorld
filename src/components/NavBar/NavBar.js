import Button from "../Button/Button";
import Cartwiget from "../CartWiget/CartWiget";
import Login from "../Login/Login";

function NavBar() {
    return (
      <>
        <div className="App">
          <navbar className= "barra">
                <h1>Travel world</h1>
                <Button><li href="#home">Destinos</li></Button>
                <Button><li href="#home">Ofertas</li></Button>
                <Button><li href="#home">Nosotros</li></Button>
                <Button><Login/></Button>
                <Button><Cartwiget/></Button>
          </navbar>
            
        </div>
      </>
    );
  }
  //PascalCase se llaman a los componentes con mayucula
  export default NavBar;