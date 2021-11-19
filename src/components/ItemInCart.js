import React, { useContext } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Context from '../contexts/Context';

const ItemInCart = props => {
  let context = useContext(Context);

  return (
    <Row>
      <Col xs={12} lg={4} className="mt-2">
        <Button
          className="border-radius-como button-color-como border-0 py-3 w-100"
          onClick={() => context.removeItem(props.producto.id)}
        >
          Eliminar del carrito
        </Button>
      </Col>
      <Col xs={12} lg={4} className="mt-2">
        <Link to="/cart">
          <Button className="border-radius-como button-color-como border-0 py-3 w-100">
            Finalizar compra
          </Button>
        </Link>
      </Col>
      <Col xs={12} lg={4} className="mt-2">
        <Link to="/">
          <Button className="border-radius-como button-color-como border-0 py-3 w-100">
            Seguir comprando
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default ItemInCart;
