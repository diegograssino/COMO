import { Col, CardGroup, Container, Carousel } from 'react-bootstrap';
import Item from './item';

function ItemList(props) {
  return (
    <Container className="min-vh-85 ">
      <CardGroup className="imagenesAbout">
        {props.productos.map(producto => {
          return (
            <Col key={producto.id} xs={12} md={6} lg={4} className="p-2">
              <Item producto={producto} />
            </Col>
          );
        })}
      </CardGroup>

      <Carousel className="carrusellMovil" controls={true} fade={true}>
        {props.productos.map(producto => {
          return (
            <Carousel.Item key={producto.id} xs={12} md={6} lg={4} className="py-2">
              <Item producto={producto} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
}

export default ItemList;
