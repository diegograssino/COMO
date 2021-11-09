import { Col, CardGroup, Container, Carousel } from 'react-bootstrap';
import Item from './item';
import CategoryWidget from './CategoryWidget';
import { useEffect, useState } from 'react';
import { firestore } from '../firebase';

function ItemList(props) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    firestore
      .collection('categorys')
      .get()
      .then(resultados => {
        const resultadoFinal = [];
        resultados.forEach(resultado => {
          const id = resultado.id;
          const dataFinal = { id, ...resultado.data() };
          resultadoFinal.push(dataFinal);
          return resultadoFinal;
        });
        setCategories(resultadoFinal);
      });
  }, []);
  return (
    <Container className="min-vh-85 ">
      <Container className="mt-2 text-center">
        <CategoryWidget categories={categories} />
      </Container>
      <CardGroup className="imagenesAbout">
        {props.productos.map(producto => {
          return (
            <Col key={producto.id} xs={12} md={6} lg={4} className="p-2">
              <Item producto={producto} />
            </Col>
          );
        })}
      </CardGroup>

      <Carousel className="carrusellMovil" controls={true} fade={true} pause={'hover'}>
        {props.productos.map(producto => {
          return (
            <Carousel.Item key={producto.id} xs={12} md={6} lg={4} className="py-2">
              <Item producto={producto} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
}

export default ItemList;
