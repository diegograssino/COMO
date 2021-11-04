import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/index.css'

import ItemListContainer from './ItemListContainer';


const ListProduct = () => {



    return (
        <Container>
            <Row>
                <Col md={12} className=" text-center aboutContainer">
                <h1 className="tituloAbout">Nuestros productos</h1>
                    <p className="subtituloAbout">Ahora podes comprar nuestros productos a través de nuestra página</p>
                    <Link to="/productos">Ver todos los productos</Link>
                </Col>
            </Row>
            <Row>
                <Col md={12} >
                    <ItemListContainer />
                </Col>
            </Row>
        </Container>
    )
}

export default ListProduct
 