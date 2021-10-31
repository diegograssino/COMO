import React from 'react';
import { Col } from 'react-bootstrap';

const ItemPrice = props => {
  return (
    <Col xs={props.colGrid} className={`${props.col1Classes} fs-6`}>
      {props.producto.discount ? (
        <span className="me-2 text-decoration-line-through discounted">
          <small>{`U$S ${props.producto.price}`}</small>
        </span>
      ) : null}
      <span className="fw-bold">
        {Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USS', minimumFractionDigits: 2 }).format(
          props.producto.price / (props.producto.discount + 1),
          0
        )}
      </span>
    </Col>
  );
};

export default ItemPrice;
