import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo-blanco.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function MyNavbar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
          <div className="logo1">
            <CartWidget />
          </div>
          <Link to="/">
            <img alt="Foodhouse" src={logo} width="70rem" height="25rem" className="logo1" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav " className="me-auto">
            <Nav className="me-auto d-flex  ">
              <Link to="/" className="nav-link text-decoration-none link-secondary link">
                Inicio
              </Link>

              <Link to="/productos" className="nav-link text-decoration-none link-secondary link">
                Productos
              </Link>

              <Link to="/about" className="nav-link text-decoration-none link-secondary link">
                Nosotros
              </Link>

              <Link to="contact" className="nav-link text-decoration-none link-secondary">
                Contacto
              </Link>
            </Nav>
            <Navbar.Brand className=" logo2 me-auto ">
              <Link to="/">
                <img alt="Foodhouse" src={logo} width="100rem" />
              </Link>
            </Navbar.Brand>
            <Navbar.Brand className="logo2 me-auto">
              <CartWidget className="m-auto" />
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
