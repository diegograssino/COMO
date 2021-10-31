import React, { useContext, useEffect, useState } from 'react';
import { Container, Col, Card, CardGroup, Button, Row } from 'react-bootstrap';
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
            <Card className="rounded-0 text-dark shadow p-2 mt-2 mx-2">
              <Card.Text className="fw-bold pt-1 h3 text-center fontTitle">ORDER CONFIRMATION</Card.Text>
            </Card>
          </Col>
        </Row>
        <CardGroup className="my-2">
          <Row>
            {context.items.map(item => {
              return (
                <Col key={item.id} xs={12} md={6} lg={4} className="p-2">
                  <CartItem producto={item} />
                </Col>
              );
            })}
          </Row>
        </CardGroup>
        <CartTotal />
        <CartForm setShowOrder={setShowOrder} />
      </Container>
    );
  } else if (!context.totalQ && showOrder) {
    return (
      <Container className="text-center mt-5 min-vh-75">
        <h2 className="h1 fontTitle mb-4">{`YOUR ORDER: ${showOrder}`}</h2>
        <Link to="/">
          <Button variant="success">Take me to buy!</Button>
        </Link>
      </Container>
    );
  } else {
    return (
      <Container className="text-center mt-5 min-vh-75">
        <h2 className="h1 fontTitle mb-4">YOUR CART IS EMPTY</h2>
        <Link to="/">
          <Button variant="success">Take me to buy!</Button>
        </Link>
      </Container>
    );
  }
};

export default Cart;
