import { Col, CardGroup, Container, Carousel } from 'react-bootstrap';
import Item from './item';
import CategoryWidget from './CategoryWidget';
import { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import { useLocation } from 'react-router';

function ItemList(props) {
  const [categories, setCategories] = useState([]);

  const location = useLocation();

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
    <Container className="min-vh-85 position-relative">
      <CardGroup className="imagenesAbout">
        <Container className="mt-3 mb-2 text-end">
          <CategoryWidget categories={categories} />
        </Container>
        {props.productos.map(producto => {
          return (
            <Col
              key={producto.id}
              xs={12}
              md={6}
              lg={4}
              className="p-2 m-auto"
            >
              <Item producto={producto} />
            </Col>
          );
        })}
      </CardGroup>

      {location.pathname === '/' ? null : (
        <Container className="mt-3 mb-2 text-end carrusellMovil">
          <CategoryWidget categories={categories} />
        </Container>
      )}

      <Carousel
        className="carrusellMovil"
        controls={true}
        fade={true}
        slide={false}
        pause={'hover'}
      >
        {props.productos.map(producto => {
          return (
            <Carousel.Item
              key={producto.id}
              xs={12}
              md={6}
              lg={4}
              className="py-2 m-auto"
            >
              <Item producto={producto} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
}

export default ItemList;
