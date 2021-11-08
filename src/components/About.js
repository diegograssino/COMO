import React from 'react';
import { Row, Col, Container, Image, Carousel } from 'react-bootstrap';
import imagen from '../assets/img/about1.jpg';
import imagen2 from '../assets/img/about2.jpg';
import imagen3 from '../assets/img/about3.jpg';
import imagen4 from '../assets/img/about4.jpg';
import '../css/index.css';

const About = () => {


  
  return (
    <Container>
      <Row>
        <Col md={12} className=" text-center aboutContainer">
          <h1 className="tituloAbout" id="about">Nosotros</h1>
          <p className="subtituloAbout">
            Somos Ceci y Pachu. Amigos hace años. Un día nos unimos para crear este hermoso proyecto.
          </p>
          <Container className="imagenesAbout">
            <Row>
              <Col md={7}>
                <Image className="containerFoto pb-3" src={imagen} />
              </Col>
              <Col xs={5}>
                <Image className="containerFoto h-100 pb-3" src={imagen2} />
              </Col>
            </Row>
            <Row>
              <Col md={5}>
                <Image className="containerFoto h-100" src={imagen3} />
              </Col>
              <Col md={7}>
                <Image className="containerFoto" src={imagen4} />
              </Col>
            </Row>
          </Container>

          <Carousel className="carrusellMovil" controls={true} fade={true}>
            <Carousel.Item>
              <img className="d-block w-100" src={imagen} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={imagen2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={imagen3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={imagen4} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
