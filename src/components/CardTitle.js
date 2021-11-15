import React from 'react';
import { Card } from 'react-bootstrap';

const CardTitle = props => {
  return <Card.Title className={props.textClasses}>{props.producto.title}</Card.Title>;
};

export default CardTitle;
