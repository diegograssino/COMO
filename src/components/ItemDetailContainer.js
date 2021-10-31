import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import MyLoader from './MyLoader';
import { firestore } from '../firebase';

function ItemDetailContainer() {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState();

  const detailParams = useParams();

  useEffect(() => {
    setLoading(true);

    firestore
      .collection('items')
      .doc(detailParams.id)
      .get()
      .then(resultado => {
        const id = resultado.id;
        const dataFinal = { id, ...resultado.data() };
        setProducto(dataFinal);
      })
      .finally(() => setLoading(false));
  }, [detailParams.id]);

  return <>{loading ? <MyLoader /> : <ItemDetail producto={producto} />}</>;
}

export default ItemDetailContainer;
