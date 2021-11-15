/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container>
      <Row>
        <Col md={12} className=" text-center aboutContainer">
          <h1 className="tituloAbout">Dónde estamos</h1>
          <iframe
            className="mt-3"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.6582652068078!2d-58.421053785194914!3d-34.612801965484955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca5f366c6dbd%3A0xb6c1f9e3b1d8b08e!2sDon%20Bosco%203784%2C%20C1206ABH%20CABA!5e0!3m2!1ses!2sar!4v1636026598486!5m2!1ses!2sar"
            width="386"
            height="249"
            loading="lazy"
          ></iframe>
          <p className="subtituloAbout">Don Bosco 3784, Almagro, CABA.</p>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="text-center aboutContainer">
          <h2 className="tituloAbout mb-4">Contacto</h2>
          <Form action="correo-contacto.php" method="post">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control className="input m-auto" type="text" name="nombre" placeholder="Nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control className="input m-auto" type="email" name="correo" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
              <Form.Control className="input m-auto" as="textarea" name="messaje" rows={3} placeholder="Consulta" />
            </Form.Group>
            <button className="btn btn-form button border-radius-como button-color-como px-5" type="submit">
              Enviar
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
