import { Card, Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';
import ItemBadges from './ItemBadges';
import ItemPrice from './ItemPrice';
import CardTitle from './CardTitle';
import ItemCount from './ItemCount';
import { useContext } from 'react';
import Context from '../contexts/Context';

function Item(props) {
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
    <Card className="h-100  shadow card">
      <Card.Body className="px-1 pb-1 pt-0">
        <Row>
          <Col xs="4" md="12" className="px-md-5">
            <NavLink to={`/item/${props.producto.id}`}>
              <div className="card-img-wrap">
                <Card.Img src={props.producto.image} alt={props.producto.title} />
              </div>
            </NavLink>
          </Col>
          <Col xs="8" md="12" className=" px-3 pt-3">
            <LinkContainer to={`/item/${props.producto.id}`}>
              <CardTitle
                producto={props.producto}
                textClasses=" me-3 mb-1 fontTitle"
                starClasses="text-warning fs-5 me-1 mb-1"
              />
            </LinkContainer>
              <p className="prod-info">Mini descripcion del producto</p>
          {/*   <ItemBadges producto={props.producto} /> */}
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="fs-5 ps-0 pt-0 mt-1 border-0 rounded-0 bg-secondary">
        <Row className="mt-0">
         {/*  <Col xs={4} className="ps-3 text-start">
            <LinkContainer to={`/item/${props.producto.id}`}>
              <Button variant="outline-secondary" size="sm" className="ms-1 p-1 border-0 rounded-0">
                <span className="text-center fontTitle">
                  <small>More</small>
                </span>
              </Button>
            </LinkContainer>
          </Col> */}
          <ItemPrice producto={props.producto} col1Classes="text-center" />
          <ItemCount
                        initial={props.producto.stock > 0 ? 1 : 0}
                        stock={props.producto.stock}
                        onAdd={onAdd}
                      />
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default Item;
