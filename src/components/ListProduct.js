import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/index.css';

import FeaturedItemListContainer from './FeaturedItemListContainer';

const ListProduct = () => {
  return (
    <Container>
      <Row>
        <Col md={12} className=" text-center aboutContainer ">
          <h1 className="tituloAbout">Nuestros productos</h1>
          <p className="subtituloAbout">Ahora podes comprar nuestros productos a través de nuestra página</p>
          <Link to="/productos" className="text-decoration-none link-color-como">
            Ver todos los productos
          </Link>
        </Col>
      </Row>
      <Row className="position-relative">
        <span className="position-absolute w-100  spanDiv"></span>
        <Col md={12}>
          <FeaturedItemListContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default ListProduct;
