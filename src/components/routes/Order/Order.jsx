import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Cart from "../../Cart/Cart";
import ReviewItem from "../../ReviewItem/ReviewItem";
import "./Order.css";

const Order = () => {
  const saveCart = useLoaderData();
  const [cart, setCart] = useState(saveCart);
  const handleRemoveCart = (id) => {
    const removeItem = cart.filter((pd) => pd.id !== id);
    setCart(removeItem);
    removeFromDb(id);
  };
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveCart={handleRemoveCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <button className="w-full bg-orange-300 hover:outline-none">
            <Link to="/checkout">CheckOut</Link>
          </button>
          <button
            className="w-full bg-orange-300 hover:outline-none mt-5"
            onClick={handleGoBack}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Go Back
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
