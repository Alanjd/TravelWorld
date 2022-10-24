import Button from "../Button/Button";
import Cartwiget from "../CartWiget/CartWiget";

function NavBar() {
    return (
      <>
        <div className="App">
          <navbar className= "barra">
                <h1>Travel world</h1>
                <li className='submenu'>Destinos</li>
                <li className='submenu'>Ofertas</li>
                <li className='submenu'>Nosotros</li>
                <Button className='btn'>Destinos</Button>
                <Cartwiget/>
          </navbar>
            
        </div>
      </>
    );
  }
  //PascalCase se llaman a los componentes con mayucula
  export default NavBar;