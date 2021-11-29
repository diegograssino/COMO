import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';
import ItemPrice from './ItemPrice';
import CardTitle from './CardTitle';

function Item(props) {
  return (
    <Card className="h-100 border-color-como border-radius-como bg-color-card-como">
      <Card.Body className="px-0 pb-1 pt-0">
        <Row>
          <Col md="12">
            <NavLink to={`/item/${props.producto.id}`}>
              <div className="border-radius-como">
                <Card.Img src={props.producto.image} alt={props.producto.title} className="border-radius-img-como" />
              </div>
            </NavLink>
          </Col>
          <Col md="12" className=" px-3 pt-3">
            <LinkContainer to={`/item/${props.producto.id}`}>
              <CardTitle producto={props.producto} textClasses="text-center me-3 mb-1" />
            </LinkContainer>
            {/* <ItemBadges producto={props.producto} /> */}
            <Container className="text-center fw-light py-2">{props.producto.minidescription}</Container>
            <ItemPrice producto={props.producto} col1Classes="text-center" />
          </Col>
        </Row>
      </Card.Body>
      <Container className="text-center p-0">
        {/* <Col xs={4} className="ps-3 text-start">
            <LinkContainer to={`/item/${props.producto.id}`}>
              <Button variant="outline-secondary" size="sm" className="ms-1 p-1 border-0 rounded-0">
                <span className="text-center">
                  <small>More</small>
                </span>
              </Button>
            </LinkContainer>
          </Col> */}

        <LinkContainer to={`/item/${props.producto.id}`}>
          {/* <ItemCount initial={props.producto.stock > 0 ? 1 : 0} stock={props.producto.stock} onAdd={onAdd} /> */}
          <Container className="d-grid gap-2 mb-4 mt-1">
            <Button variant="secondary" className="border-radius-como button-color-como border-0 py-3">
              <span className="text-center">Agregar al carrito</span>
            </Button>
          </Container>
        </LinkContainer>
      </Container>
    </Card>
  );
}

export default Item;
