import React, { useContext } from 'react';
import { Col, Card, Button, Row } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import Context from '../contexts/Context';

const CartTotal = () => {
  const context = useContext(Context);

  return (
    <Row>
      <Col className="p-2" xs={12}>
        <Card className="rounded-0shadow">
          <Card.Title className="fontTitle ps-3 py-1 fs-3 bg-primary text-white">TOTAL ORDER</Card.Title>
          <Card.Body>
            <Card.Text className="fontTitle fs-4">{context.totalPrice}</Card.Text>
            <Card.Text>{`${context.totalQ} units`}</Card.Text>
          </Card.Body>
          <Card.Footer className="fs-5 pt-0 border-0 rounded-0 bg-secondary">
            <Row className="mx-1 my-2 pb-2 bg-cart-card-footer shadow px-2 pt-1">
              <Col xs={12} className="text-end pe-0">
                <span className="fs-6 text-end">
                  <Button
                    className="pb-1 pt-0 pe-1 ps-1 mt-1 me-0 rounded-0"
                    size="sm"
                    variant="outline-primary"
                    onClick={() => context.clear()}
                  >
                    <small>
                      <FaTrashAlt className="me-1" />
                      Empty Cart
                    </small>
                  </Button>
                </span>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};

export default CartTotal;
