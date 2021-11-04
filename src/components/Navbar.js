import { useState, useEffect } from 'react';
import { Navbar, Container, Row, Col, Nav } from 'react-bootstrap';
import { default as myLogo } from '../assets/oldlogo.svg';
import logo from "../assets/img/logo-blanco.png";
import logo from '../assets/img/Logo-COMO.png';
import CartWidget from './CartWidget';
import CategoryWidget from './CategoryWidget';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase';

function MyNavbar() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    firestore
      .collection('categorys')
      .get()
      .then(resultados => {
        const resultadoFinal = [];
        resultados.forEach(resultado => {
          const id = resultado.id;
          const dataFinal = { id, ...resultado.data() };
          resultadoFinal.push(dataFinal);
          return resultadoFinal;
        });
        setCategories(resultadoFinal);
      });
  }, []);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav " className="me-auto">
            <Nav className="me-auto d-flex  ">
              <Link to="/" className="text-decoration-none">
                <Nav.Link>Inicio</Nav.Link>
              </Link>
              <Link to="/" className="text-decoration-none">
                <Nav.Link>Productos</Nav.Link>
              </Link>
              <Link to="#about" className="text-decoration-none">
                <Nav.Link>Nosotros</Nav.Link>
              </Link>
              <Link to="#contact" className="text-decoration-none">
                <Nav.Link>Contacto</Nav.Link>
              </Link>
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
          <CartWidget />
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
