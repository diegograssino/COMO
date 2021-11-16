import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FaPlus, FaMinus, FaWhatsapp } from 'react-icons/fa';
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
    <Card className="border-0 bg-color-como">
      <Row>
        <Col xs={12} lg={4} className="mt-2">
          <Card className="border-0">
            <Row>
              <Col xs={4} className="text-start">
                <Button
                  className="py-3 border-1 border-color-itemcount-como plus-minus-button button-color-como border-radius-button-left-como"
                  onClick={() => setContador(restar(contador, 1))}
                >
                  <FaMinus className="text-white" />
                </Button>
              </Col>
              <Col xs={4} className="text-center mt-2 itemcount-bigger-font">
                {contador}
              </Col>
              <Col xs={4} className="text-end">
                <Button
                  className="py-3 border-1 border-color-itemcount-como plus-minus-button button-color-como border-radius-button-right-como"
                  onClick={() => setContador(sumar(contador, 1))}
                >
                  <FaPlus className="text-white" />
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col className="mt-2" xs={12} lg={4}>
          <Row className="m-0">
            <Button
              className="border-radius-como button-color-como border-0 py-3"
              onClick={() => props.onAdd(contador)}
            >
              Agregar al Carrito
            </Button>
          </Row>
        </Col>
        <Col xs={12} lg={4} className="mt-2">
          <Link   to="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." class="float" target="_blank">
            <Button className="w-100 border-radius-como button-color-como border-0 py-3">
              <FaWhatsapp className="me-1 fs-4 pb-1" />
              Consultas?
            </Button>
          </Link>
        </Col>
      </Row>
    </Card>
  );
};

export default ItemCount;
