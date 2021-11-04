import React, { useContext } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Context from '../contexts/Context';
import '../css/index.css';

function CartWidget() {
  let context = useContext(Context);

  return (
    <span className="text-light ms-2">
      <Link to="/cart">
        <div className="me-1 d-inline-block">
          <div className="border border-0 btn btn-dark position-relative p-0">
            <MdOutlineShoppingCart className="text-light fs-5 " />
            {context.totalQ ? (
              <span className="position-absolute top-25 start-75 badge rounded-pill badge-cart-widget p-1">
                {context.totalQ}
              </span>
            ) : null}
          </div>
        </div>
      </Link>
    </span>
  );
}

export default CartWidget;
