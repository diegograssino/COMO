import React, { useContext } from 'react';
import { Col, Card, Row } from 'react-bootstrap';
import Context from '../contexts/Context';

const CartTotal = () => {
  const context = useContext(Context);

  return (
    <Row>
      <Col className="mt-2 py-0" xs={12}>
        <Card className="border-0 bg-color-como">
          <Card.Title className="fontTitle text-dark pe-3 py-1 fs-3 text-end">
            {`Total: ${context.totalPrice}`}
          </Card.Title>
        </Card>
      </Col>
    </Row>
  );
};

export default CartTotal;
