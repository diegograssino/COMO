import React, { useState, useEffect } from 'react';
import { Provider } from './Context';

const CartContext = ({ children }) => {
  const [items, setItems] = useState([]);
  const [mpItems, setMpItems] = useState([]);

  const [totalQ, setTotalQ] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPrice2, setTotalPrice2] = useState(0);

  useEffect(() => {
    setTotalQ(items.reduce((sum, item) => sum + item.q, 0));
    setTotalPrice(
      Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2,
      }).format(
        items.reduce((sum, item) => sum + item.price * item.q, 0)
      )
    );
    setTotalPrice2(
      items.reduce((sum, item) => sum + item.price * item.q, 0)
    );
  }, [items]);

  function addItem(
    id,
    q,
    title,
    price,
    description,
    image,
    category
  ) {
    setItems([
      ...items,
      {
        id: id,
        q: q,
        title: title,
        price: price,
        description: description,
        image: image,
        category: category,
      },
    ]);
    setMpItems([
      ...mpItems,
      {
        title: title,
        quantity: q,
        unit_price: price,
        picture_url: image,
        currency_id: 'ARS',
      },
    ]);
  }
  function removeItem(id) {
    setItems(items.filter(item => item.title !== id));
    setMpItems(mpItems.filter(item => item.title !== id));
  }
  function clear() {
    setItems([]);
    setMpItems([]);
  }
  function isInCart(i) {
    return items.find(item => item.id === i);
  }

  return (
    <Provider
      value={{
        items,
        mpItems,
        setItems,
        addItem,
        removeItem,
        clear,
        isInCart,
        totalPrice,
        totalPrice2,
        totalQ,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartContext;
