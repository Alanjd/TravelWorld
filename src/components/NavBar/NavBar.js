import Button from "../Button/Button";

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
                <Button className='btn'>Ofertas</Button>
          </navbar>
            <header className="App-header">
            
            </header>
        </div>
      </>
    );
  }
  //PascalCase se llaman a los componentes con mayucula
  export default NavBar;