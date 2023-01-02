import usersSerivce from "../../services/usersSerivce";
import { useEffect, useState, useContext } from "react";

import productServiceUser from "../../services/product-service-tools-for-user";
import Total from "../total";
import { useAuth } from "../contexts/auth-context";
import CartProducts from "../cart-products/cart-products";
import { CartContext } from "../contexts/cart-context";

const Cart = () => {
  console.log("cart render");
  const { user } = useAuth();
  const admin = user() ? user().admin : null;

  const { cartProducs } = useContext(CartContext);

  const buyingProductsHandler = () => productServiceUser.buyProducts();

  return (
    <div className="cart-section-wrapper">
      <div className="cart-section">
        <div className="products-titles">
          <div className="delete-and-product-tile">
            <div className="delete-title">Delete</div>
            <div className="product-title">Product</div>
          </div>
          <div className="subtotal-title">Subtotal</div>
        </div>
        <CartProducts cartProducs={cartProducs} />
        <form className="products-form" noValidate autoComplete="off">
          <button className="products-btn " onClick={buyingProductsHandler}>
            buy
          </button>
          <Total cartProducs={cartProducs} />
        </form>
      </div>
    </div>
  );
};

export default Cart;
