import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <div className="custom-footer bg-dark text-white mt-4 text-center">
        <Container className="pt-2 text-center">
          <h6>Proyecto final curso React Coderhouse</h6>
          <h6>Todos los derechos reservados Diego Grassino 2021</h6>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
