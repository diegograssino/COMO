import { Col, CardGroup, Container } from 'react-bootstrap';
import Item from './item';

function ItemList(props) {
  return (
    <Container className="min-vh-85">
      <CardGroup>
        {props.productos.map(producto => {
          return (
            <Col key={producto.id} xs={12} md={6} lg={4} className="p-2">
              <Item producto={producto} />
            </Col>
          );
        })}
      </CardGroup>
    </Container>
  );
}

export default ItemList;
