import { Card, Row, Col, Button, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';
import ItemBadges from './ItemBadges';
import ItemPrice from './ItemPrice';
import CardTitle from './CardTitle';

function Item(props) {
  return (
    <Card className="h-100 border-color-como border-radius-como">
      <Card.Body className="px-0 pb-1 pt-0">
        <Row>
          <Col xs="4" md="12" className="px-md-5">
            <NavLink to={`/item/${props.producto.id}`}>
              <div className="card-img-wrap border-radius-como">
                <Card.Img src={props.producto.image} alt={props.producto.title} />
              </div>
            </NavLink>
          </Col>
          <Col xs="8" md="12" className=" px-3 pt-3">
            <LinkContainer to={`/item/${props.producto.id}`}>
              <CardTitle
                producto={props.producto}
                textClasses="text-center me-3 mb-1"
                // starClasses="text-warning fs-5 me-1 mb-1"
              />
            </LinkContainer>
            {/* <ItemBadges producto={props.producto} /> */}
            <Container className="text-center fw-light py-2">Descripción corta o acortada por codigo</Container>
            <ItemPrice producto={props.producto} col1Classes="text-center" />
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="fs-5 ps-4 pe-5 pt-0 mt-1 border-0">
        <Row className="mt-0">
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
            <Button variant="secondary" className="border-radius-como button-color-como border-0">
              <span className="text-center">Agregar al carrito</span>
            </Button>
          </LinkContainer>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default Item;
