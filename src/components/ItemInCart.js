import React, { useContext } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Context from '../contexts/Context';

const ItemInCart = props => {
  let context = useContext(Context);

  return (
    <Row>
      <Col xs={12} lg={4} className="mt-2">
        <Button
          className="w-100 rounded-0 button-custom"
          variant="outline-secondary"
          size="sm"
          onClick={() => context.removeItem(props.producto.id)}
        >
          Remove
          <FaTrashAlt className="ms-1" />
        </Button>
      </Col>
      <Col xs={12} lg={4} className="mt-2">
        <Link to="/cart">
          <Button className="w-100 rounded-0" variant="success" size="sm">
            To the cart!
            <FaShoppingCart className="ms-1" />
          </Button>
        </Link>
      </Col>
      <Col xs={12} lg={4} className="mt-2">
        <Link to="/">
          <Button className="w-100 rounded-0" variant="outline-success" size="sm">
            Keep Buying
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default ItemInCart;
