import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';


class NavBar extends React.Component{

  render(){

    return(

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/Mexico-COVID19">COVID-19 México</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/*<Nav className="mr-auto">
              <Nav.Link as={Link} to='/sentimientos'>Análisis de sentimientos</Nav.Link>
              <Nav.Link as={Link} to='/sintomas'>Monitor de síntomas</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about"> Acerca de </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
      </Navbar>

    );
  }


}


export default NavBar;