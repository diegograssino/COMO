import React from 'react';
import { Badge, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemBadges = props => {
  return (
    <Row>
      <Col xs="12" md="4">
        <Link to={`/category/${props.producto.category}`}>
          <h6 className="mb-0">
            <Badge pill className="bg-primary mt-1 p-1 rounded-0 text-uppercase">
              <small>{props.producto.category}</small>
            </Badge>
          </h6>
        </Link>
      </Col>
      <Col xs="12" md="8" className="text-md-end">
        {props.producto.discount ? (
          <Badge className="border border-success text-success p-1 rounded-0 text-uppercase">
            <small>{`-${props.producto.discount * 100}%`}</small>
          </Badge>
        ) : null}
      </Col>
    </Row>
  );
};

export default ItemBadges;
