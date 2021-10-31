import React, { useContext } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import ItemCount from './ItemCount';
import Context from '../contexts/Context';
import ItemBadges from './ItemBadges';
import ItemPrice from './ItemPrice';
import CardTitle from './CardTitle';
import ItemInCart from './ItemInCart';

function ItemDetail(props) {
  let context = useContext(Context);

  const onAdd = function onAdd(q) {
    context.addItem(
      props.producto.id,
      q,
      props.producto.title,
      props.producto.price,
      props.producto.description,
      props.producto.image,
      props.producto.category,
      props.producto.discount
    );
  };

  return (
    <Container className="min-vh-85">
      <Card className="mt-3 rounded-0 border-2 border-secondary shadow">
        <Card.Body>
          <Row>
            <Col xs={12} sm={12} md={7} lg={5} xl={4} className="p-3">
              <Card.Img src={props.producto.image} alt={props.producto.title} />
            </Col>
            <Col xs={12} sm={12} md={5} lg={7} xl={8} className="px-0 py-2">
              <Card className="h-100 my-0 py-0" border="light">
                <Card.Body>
                  <CardTitle
                    producto={props.producto}
                    textClasses="fs-2 fw-bold fontTitle text-dark"
                    starClasses="text-warning fs-4 me-1 mb-1"
                  />
                  <ItemBadges producto={props.producto} />
                  <Row className="mx-0 px-0 mt-3">
                    <ItemPrice producto={props.producto} colGrid={12} col1Classes="ps-0" />
                  </Row>
                  <Card.Text className="mx-0 my-3">{props.producto.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-light border-0">
                  <div className="fs-6 text-start fst-italic">
                    <small>{`${props.producto.stock} units left!`}</small>
                  </div>
                  {context.isInCart(props.producto.id) ? (
                    <ItemInCart producto={props.producto} />
                  ) : (
                    <Row>
                      <ItemCount
                        initial={props.producto.stock > 0 ? 1 : 0}
                        stock={props.producto.stock}
                        onAdd={onAdd}
                      />
                    </Row>
                  )}
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ItemDetail;
