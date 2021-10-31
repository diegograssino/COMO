import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import MyLoader from './MyLoader';
import { firestore } from '../firebase';

function ItemListContainer() {
  let [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const listParams = useParams();

  useEffect(() => {
    setLoading(true);

    const filtro = listParams.id
      ? firestore
          .collection('items')
          .where('category', '==', listParams.id)
          .orderBy('featured', 'desc')
          .orderBy('discount', 'desc')
      : firestore
          .collection('items')
          .orderBy('featured', 'desc')
          .orderBy('discount', 'desc')
          .orderBy('category', 'asc');

    filtro

      .get()
      .then(resultados => {
        const resultadoFinal = [];
        resultados.forEach(resultado => {
          const id = resultado.id;
          const dataFinal = { id, ...resultado.data() };
          resultadoFinal.push(dataFinal);
          return resultadoFinal;
        });
        setProductos(resultadoFinal);
      })
      .finally(() => setLoading(false));
  }, [listParams.id]);

  return <>{loading ? <MyLoader /> : <ItemList productos={productos} />}</>;
}

export default ItemListContainer;
