import React, { useContext } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Context from '../contexts/Context';
// import { firestore } from '../firebase';
// import MyLoader from './MyLoader';
// import validator from 'validator';

const CartForm = props => {
  let context = useContext(Context);
  // const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState('');
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState();

  // const saveName = e => {
  //   const input = e.target;
  //   const valor = input.value;
  //   setName(valor);
  // };
  // const savePhone = e => {
  //   const input = e.target;
  //   const valor = input.value;
  //   setPhone(valor);
  // };
  // const saveEmail = e => {
  //   const input = e.target;
  //   const valor = input.value;
  //   setEmail(valor);
  // };
  // const handleBuy = () => {
  // if (validation()) {
  // setError(false);
  // setLoading(true);
  // const buyer = { name: name, mail: email, phone: phone };
  // const total = context.totalPrice;
  // const date = new Date();
  // const cart = context.items;
  // firestore
  //   .collection('orders')
  //   .add({ buyer, cart, date, total })
  //   .then(res => props.setShowOrder(res.id));
  // } else {
  //   setError(true);
  // }
  // };
  // const validation = () => {
  //   console.log(`name: ${validator.isAlpha(name)}`);
  //   console.log(
  //     `name2: ${validator.isLength(name, [{ min: 6, max: 30 }])}`
  //   );

  //   console.log(`phone: ${validator.isNumeric(phone)}`);
  //   console.log(
  //     `phone2: ${validator.isLength(phone, [{ min: 10, max: 10 }])}`
  //   );

  //   console.log(`email: ${validator.isEmail(email)}`);
  //   console.log(
  //     `email2: ${validator.isLength(email, [{ min: 6, max: 30 }])}`
  //   );

  //   if (
  //     validator.isAlpha(name) &&
  //     validator.isLength(name, [{ min: 6, max: 30 }]) &&
  //     validator.isNumeric(phone) &&
  //     validator.isLength(phone, [{ min: 10, max: 10 }]) &&
  //     validator.isEmail(email) &&
  //     validator.isLength(email, [{ min: 6, max: 30 }])
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  // const handleMercadoPago = items => {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: {
  //       items: [
  //         {
  //           id: 'item-ID-1234',
  //           title: 'Mi producto',
  //           currency_id: 'ARS',
  //           picture_url:
  //             'https://www.mercadopago.com/org-img/MP3/home/logomp3.gif',
  //           description: 'Descripción del Item',
  //           category_id: 'art',
  //           quantity: 1,
  //           unit_price: 75.76,
  //         },
  //       ],
  //     },
  //   };
  //   fetch('http://localhost:3000/checkout', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: {
  //       items: [
  //         {
  //           id: 'item-ID-1234',
  //           title: 'Mi producto',
  //           currency_id: 'ARS',
  //           picture_url:
  //             'https://www.mercadopago.com/org-img/MP3/home/logomp3.gif',
  //           description: 'Descripción del Item',
  //           category_id: 'art',
  //           quantity: 1,
  //           unit_price: 75.76,
  //         },
  //       ],
  //     },
  //   });
  // };
  // console.log(context.totalPrice);
  return (
    <Row>
      <Col className="p-2" xs={12}>
        <Card className="border-0 bg-color-como">
          <Card.Title className="fontTitle ps-3 mt-2 fs-3 text-start">
            Datos de contacto
          </Card.Title>
          <Card.Body>
            <Row>
              <form
                action="https://node-mp-como.herokuapp.com/checkout"
                // action="http://localhost:3000/checkout"
                method="POST"
              >
                <input
                  type="hidden"
                  name="cartItems"
                  value={JSON.stringify(context.mpItems)}
                />
                <input
                  type="hidden"
                  name="title"
                  value="Productos varios COMO"
                />
                <input
                  type="hidden"
                  name="unit_price"
                  value={context.totalPrice2}
                />
                <label for="inputName" class="form-label">
                  Nombre
                </label>
                <input
                  className="form-control border-radius-como border-color-como border-1 mb-3"
                  id="inputName"
                  name="name"
                  required
                  type="text"
                  placeholder="Juanx Pérez"
                  // value={name}
                />

                <label for="inputPhone" class="form-label">
                  Teléfono
                </label>
                <input
                  className="form-control border-radius-como border-color-como border-1 mb-3"
                  id="inputPhone"
                  name="number"
                  required
                  type="number"
                  placeholder="Solo números (ejemplo 1123456789)"
                />
                <label for="inputEmail" class="form-label">
                  Email
                </label>
                <input
                  className="form-control border-radius-como border-color-como border-1 mb-3"
                  id="inputEmail"
                  name="email"
                  type="email"
                  required
                  placeholder="juanx@perez.com"
                />

                <input
                  value="Comprar ahora"
                  className="py-2 px-3 mt-1 me-0 border-radius-como button-color-como border-0"
                  type="submit"
                />
              </form>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CartForm;
