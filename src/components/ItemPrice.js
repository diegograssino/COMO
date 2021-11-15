import React from 'react';
import { Col } from 'react-bootstrap';

const ItemPrice = props => {
  return (
    <Col xs={props.colGrid} className={`${props.col1Classes} fs-6`}>
      <span className="fw-bold fs-5">
        {Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 2 }).format(
          props.producto.price,
          0
        )}
      </span>
    </Col>
  );
};

export default ItemPrice;
