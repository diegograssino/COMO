import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo-blanco.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function MyNavbar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav " className="me-auto">
            <Nav className="me-auto d-flex  ">
              {/* <Link to="/" className="text-decoration-none"> */}
              <Link to="/" className="nav-link text-decoration-none link-secondary link">
                Inicio
              </Link>
              {/* </Link> */}
              {/* <Link to="/" className="text-decoration-none"> */}
              <Link to="/productos" className="nav-link text-decoration-none link-secondary link">
                Productos
              </Link>
              {/* </Link> */}
              {/* <Link to="#about" className="text-decoration-none"> */}
              <Link to="/about" className="nav-link text-decoration-none link-secondary link">
                Nosotros
              </Link>
              {/* </Link> */}
              {/* <Link to="#contact" className="text-decoration-none"> */}
              <Link to="contact" className="nav-link text-decoration-none link-secondary">
                Contacto
              </Link>
              {/* </Link> */}
            </Nav>
            <Navbar.Brand className=" logo2 me-auto ">
              <Link to="/">
                <img alt="Foodhouse" src={logo} width="100rem" />
              </Link>
            </Navbar.Brand>
          </Navbar.Collapse>
          <Navbar.Brand className=" logo1 ">
            <Link to="/">
              <img alt="Foodhouse" src={logo} width="70rem" height="25rem" />
            </Link>
          </Navbar.Brand>
          {/* <Link to="/cart" className="text-decoration-none link"> */}
          <CartWidget />
          {/* </Link> */}
        </Container>
      </Navbar>

      {/* <Nav className="sticky-top vh-5">
        <Container className="bgPrimary" fluid>
          <Container className="text-white">
            <Row className="mt-1 mb-0">
              <Col xs={6}>
                <Navbar.Brand>
                  <Link to="/">
                    <img alt="Foodhouse" src={myLogo} width="35rem" height="35rem" className="pb-2" />
                  </Link>
                  <span className="align-center ms-1 fontLogo fs-4">FOODHOUSE</span>
                </Navbar.Brand>
              </Col>
              <Col xs={6} className="text-end pe-4">
                <span className="me-1">
                  <CategoryWidget categories={categories} />
                </span>
                <span>
                  <CartWidget />
                </span>
              </Col>
            </Row>
          </Container>
        </Container>
      </Nav> */}
    </>
  );
}

export default MyNavbar;
