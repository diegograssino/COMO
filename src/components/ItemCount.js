import React, { useState } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

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
    <Container className="mt-2 mb-4 py-0">
      <Card className="border-bottom border-top border-start-0 border-end-0 border-color-itemcount-como mb-2 bg-color-card-como">
        <Row>
          <Col xs={4} className="text-start m-0">
            <Button
              className="p-3 border-1 border-color-itemcount-como plus-minus-button button-color-como border-radius-button-left-como"
              onClick={() => setContador(restar(contador, 1))}
            >
              <FaMinus className="text-white" />
            </Button>
          </Col>
          <Col xs={4} className="text-center fw-bold p-2 itemcount-bigger-font">
            {contador}
          </Col>
          <Col xs={4} className="text-end m-0">
            <Button
              className="p-3 border-1 border-color-itemcount-como plus-minus-button button-color-como border-radius-button-right-como"
              onClick={() => setContador(sumar(contador, 1))}
            >
              <FaPlus className="text-white" />
            </Button>
          </Col>
        </Row>
      </Card>
      <Row>
        <Container className="d-grid gap-2">
          <Button
            variant="secondary"
            className="border-radius-como button-color-como border-0 py-3"
            onClick={() => props.onAdd(contador)}
          >
            <span className="text-center">Agregar al carrito</span>
          </Button>
        </Container>
      </Row>
    </Container>
  );
};

export default ItemCount;
