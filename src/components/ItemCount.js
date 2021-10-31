import React, { useState } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { FaPlus, FaMinus, FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ItemCount = props => {
  const [contador, setContador] = useState(props.initial);
  const sumar = function sumar(numero, valor) {
    if (numero > 0 && hayStock(numero, props.stock)) {
      numero = numero + valor;
    }
    return numero;
  };
  const restar = function restar(numero, valor) {
    if (numero > 1) {
      numero = numero - valor;
    }
    return numero;
  };
  const hayStock = function hayStock(numero, stock) {
    if (numero < stock) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <Card className="mb-0 py-0 border-0">
      <Container className="p-0">
        <Row>
          <Col xs={12} lg={4} className="mt-2">
            <Row className="border border-grey mx-0 bg-secondary">
              <Col xs={4} className="text-start">
                <Button
                  className="p-0 border-0 plus-minus-button"
                  variant="white"
                  size="sm"
                  onClick={() => setContador(restar(contador, 1))}
                >
                  <FaMinus className="text-secondary" />
                </Button>
              </Col>
              <Col xs={4} className="text-center text-secondary fw-bold fs-6 mt-1">
                {contador}
              </Col>
              <Col xs={4} className="text-end">
                <Button
                  className="p-0 border-0 plus-minus-button"
                  variant="white"
                  size="sm"
                  onClick={() => setContador(sumar(contador, 1))}
                >
                  <FaPlus className="text-secondary" />
                </Button>
              </Col>
            </Row>
          </Col>
          <Col className="mt-2" xs={12} lg={4}>
            <Row className="m-0">
              <Button className="rounded-0" variant="primary" size="sm" onClick={() => props.onAdd(contador)}>
                Add to the cart <FaCartPlus />
              </Button>
            </Row>
          </Col>
          <Col xs={12} lg={4} className="mt-2">
            <Link to="/">
              <Button className="w-100 rounded-0" variant="outline-success" size="sm">
                Keep Buying
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default ItemCount;
