import React, { useState, useEffect } from 'react';
import { Provider } from './Context';

const CartContext = ({ children }) => {
  const [items, setItems] = useState([]);

  const [totalQ, setTotalQ] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalQ(items.reduce((sum, item) => sum + item.q, 0));
    setTotalPrice(
      Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USS', minimumFractionDigits: 2 }).format(
        items.reduce((sum, item) => sum + item.price * item.q, 0)
      )
    );
  }, [items]);

  function addItem(id, q, title, price, description, image, category, discount) {
    setItems([
      ...items,
      {
        id: id,
        q: q,
        title: title,
        price: price / (discount + 1),
        description: description,
        image: image,
        category: category,
      },
    ]);
  }
  function removeItem(id) {
    setItems(items.filter(item => item.id !== id));
  }
  function clear() {
    setItems([]);
  }
  function isInCart(i) {
    return items.find(item => item.id === i);
  }

  return (
    <Provider value={{ items, setItems, addItem, removeItem, clear, isInCart, totalPrice, totalQ }}>
      {children}
    </Provider>
  );
};

export default CartContext;
