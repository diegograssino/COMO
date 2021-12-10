import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Feedback = () => {
  return (
    <Col className=" vh-100 d-flex flex-column align-content-center justify-content-center text-center containerHome2">
      <Row>
        <h2 className="px-5 text-light">¡Gracias por tu compra!.</h2>
      </Row>
      <Row>
        <Col xs={12} lg={4} className="t-center m-auto ">
          <Link
            to={{
              pathname:
                'https://api.whatsapp.com/send?phone=5491138499203&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20...%20',
            }}
            target="_blank"
          >
            <Button className=" border-radius-como button-color-wp border-0 py-3">
              <FaWhatsapp className="me-1 fs-4 pb-1" />
              Aviso de pedido
            </Button>
          </Link>
        </Col>
      </Row>
    </Col>
  );
};

export default Feedback;
