import React, { useContext, useEffect, useState } from 'react';
import {
  Container,
  Col,
  Card,
  CardGroup,
  Button,
  Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Context from '../contexts/Context';
import CartItem from './CartItem';
import CartTotal from './CartTotal';
import CartForm from './CartForm';

const Cart = () => {
  let context = useContext(Context);
  let [showOrder, setShowOrder] = useState(0);
  useEffect(() => {
    if (showOrder) {
      context.clear();
    }
  }, [showOrder]); // eslint-disable-line react-hooks/exhaustive-deps
  if (context.totalQ) {
    return (
      <Container className="mt-2 min-vh-85">
        <Row>
          <Col xs={12} className="p-0">
            <Card className="border-radius-como border-color-como p-2 mt-2 mx-3">
              <Card.Text className="pt-1 h3 text-center fontTitle">
                Luego de confirmar la compra, el pedido de nuestras
                magias COMO podrá ser retirado
                <span className="fw-bold"> el próximo sábado </span>
                con tu nombre.
              </Card.Text>
            </Card>
          </Col>
        </Row>
        <CardGroup className="my-2">
          <Row>
            <Col xs={12} md={6} className="p-2">
              <CartForm setShowOrder={setShowOrder} />
            </Col>
            <Col xs={12} md={6} className="pl-5">
              {context.items.map(item => {
                return (
                  <Col
                    key={item.id}
                    xs={12}
                    md={12}
                    lg={12}
                    className="p-2 mt-2"
                  >
                    <CartItem producto={item} />
                  </Col>
                );
              })}
            </Col>
          </Row>
        </CardGroup>
        <CartTotal />
      </Container>
    );
  } else if (!context.totalQ && showOrder) {
    return (
      <Container className="text-center mt-5 min-vh-75">
        <h2 className="h1 fontTitle mb-4">{`YOUR ORDER: ${showOrder}`}</h2>
        <Link to="/">
          <Button variant="success">Volver</Button>
        </Link>
      </Container>
    );
  } else {
    return (
      <Container className="text-center mt-5 min-vh-75">
        <h2 className="h1 fontTitle mb-4">Carrito Vacío</h2>
        <Link to="/">
          <Button variant="success">Volver</Button>
        </Link>
      </Container>
    );
  }
};

export default Cart;
