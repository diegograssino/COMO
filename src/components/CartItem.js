import { Card, Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { CgTrashEmpty } from 'react-icons/cg';
import React, { useContext } from 'react';
import Context from '../contexts/Context';
import CardTitle from './CardTitle';

function Item(props) {
  const context = useContext(Context);

  return (
    <Card className="h-100 border-radius-como border-color-como bg-color-card-como">
      <Card.Body className="ps-1 py-0">
        <Row>
          <Col xs={4} className="ps-2 py-0">
            <Link to={`/item/${props.producto.id}`}>
              <Card.Img
                className="border-radius-button-left-como"
                src={props.producto.image}
                alt={props.producto.title}
              />
            </Link>
          </Col>
          <Col className="px-0 pt-3">
            <LinkContainer to={`/item/${props.producto.id}`}>
              <CardTitle
                producto={props.producto}
                textClasses="fw-bold text-start me-3 mb-1 fontTitle"
              />
            </LinkContainer>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="fs-5 pt-0 border-0">
        <Row className="mt-0 px-1">
          <Col xs={8} className="mt-2">
            <span className="fs-6">
              {`${props.producto.q} x ${Intl.NumberFormat('es-AR', {
                style: 'currency',
                currency: 'ARS',
                minimumFractionDigits: 2,
              }).format(
                props.producto.price
              )} - SUBTOTAL ${Intl.NumberFormat('es-AR', {
                style: 'currency',
                currency: 'ARS',
                minimumFractionDigits: 2,
              }).format(props.producto.price * props.producto.q)}`}
            </span>
          </Col>
          {/* <Col xs={4} className="text-center mt-1 fs-6 fw-bold">
            {Intl.NumberFormat('es-AR', {
              style: 'currency',
              currency: 'ARS',
              minimumFractionDigits: 2,
            }).format(props.producto.price * props.producto.q)}
          </Col> */}
          <Col xs={4} className="text-end fs-6 fw-bold text-white">
            <Button
              className="pb-1 pt-0 pe-1 ps-0 mt-1 me-0 border-0 rounded-pill"
              size="lg"
              variant="outline-dark"
              onClick={() => context.removeItem(props.producto.id)}
            >
              <CgTrashEmpty className="ms-1" />
            </Button>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default Item;
