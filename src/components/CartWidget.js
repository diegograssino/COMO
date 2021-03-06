import React, { useContext } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Context from '../contexts/Context';
import '../css/index.css';

function CartWidget() {
  let context = useContext(Context);

  return (
    <Link to="/cart">
      <div className="me-1 d-inline-block mx-2">
        <div className="border border-0 btn btn-dark position-relative p-0">
          <MdOutlineShoppingCart className="text-light fs-5" />
          {context.totalQ ? (
            <span className="position-absolute top-0 start-25 badge rounded-pill p-1">{context.totalQ}</span>
          ) : null}
        </div>
      </div>
    </Link>
  );
}

export default CartWidget;
