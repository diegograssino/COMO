import React, { useContext, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { FaArrowCircleRight } from 'react-icons/fa';
import Context from '../contexts/Context';
import { firestore } from '../firebase';
import MyLoader from './MyLoader';
import validator from 'validator';

const CartForm = props => {
  let context = useContext(Context);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState();

  const saveName = e => {
    const input = e.target;
    const valor = input.value;
    setName(valor);
  };
  const savePhone = e => {
    const input = e.target;
    const valor = input.value;
    setPhone(valor);
  };
  const saveEmail = e => {
    const input = e.target;
    const valor = input.value;
    setEmail(valor);
  };
  const handleBuy = () => {
    if (validation()) {
      setError(false);
      setLoading(true);
      const buyer = { name: name, mail: email, phone: phone };
      const total = context.totalPrice;
      const date = new Date();
      const cart = context.items;
      firestore
        .collection('orders')
        .add({ buyer, cart, date, total })
        .then(res => props.setShowOrder(res.id));
    } else {
      setError(true);
    }
  };
  const validation = () => {
    if (
      validator.isAlpha(name) &&
      validator.isLength(name, [{ min: 6, max: 30 }]) &&
      validator.isNumeric(phone) &&
      validator.isLength(phone, [{ min: 10, max: 10 }]) &&
      validator.isEmail(email) &&
      validator.isLength(email, [{ min: 6, max: 30 }])
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <Row>
      <Col className="p-2" xs={12}>
        <Card className="border-0 bg-color-como">
          <Card.Title className="fontTitle ps-3 mt-2 fs-3 text-start">
            Datos de contacto
          </Card.Title>
          <Card.Body>
            <Form.Group className="mb-3">
              {/* <Form.Label>Nombre</Form.Label> */}
              <Form.Control
                className="border-radius-como border-color-como"
                type="text"
                placeholder="Tu nombre"
                onChange={saveName}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              {/* <Form.Label>Mail</Form.Label> */}
              <Form.Control
                className="border-radius-como border-color-como"
                type="text"
                placeholder="tucorreo@email.com "
                onChange={saveEmail}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              {/* <Form.Label>Teléfono</Form.Label> */}
              <Form.Control
                className="border-radius-como border-color-como"
                type="text"
                placeholder="Tú telefono (1112345678)"
                onChange={savePhone}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="fontTitle mt-2 mb-3 p-1 fs-3  ">
                Anotaciones
              </Form.Label>
              <Form.Control
                className="border-radius-como border-color-como"
                as="textarea"
                rows={3}
                placeholder="Me gustaría ordenar un ..."
              />
            </Form.Group>
            <Row>
              <Col xs={6}>
                {error ? (
                  <Form.Text className="fw-bold text-primary">
                    Por favor, complete todos los campos
                  </Form.Text>
                ) : null}
              </Col>
              <Col xs={6} className="text-end">
                <Button
                  className="py-2 pe-2 ps-1 mt-1 me-0 border-radius-como button-color-como border-0"
                  onClick={() => handleBuy()}
                >
                  <span className="ms-3 me-2 fw-bold fs-6">
                    Ir a pagar
                    <FaArrowCircleRight className="ms-2" />
                  </span>
                </Button>
                {loading ? <MyLoader /> : null}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CartForm;
