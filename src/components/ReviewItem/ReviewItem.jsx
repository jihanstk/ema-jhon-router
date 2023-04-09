import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const ReviewItem = ({ product, handleRemoveCart }) => {
  console.log(product);
  const { id, name, img, price, quantity } = product;
  return (
    <div className="review-item items-center">
      <img src={img} alt="" />
      <div className="review-info flex-1">
        <p>{name}</p>
        <p>
          Price: <span className=" text-orange-500 ">{price}</span>
        </p>
        <p>
          Quantity: <span className="text-orange-500 ">{quantity}</span>
        </p>
      </div>
      <button
        onClick={() => handleRemoveCart(id)}
        className=" bg-transparent bg-red-300 rounded-full h-16 text-xl text-red-600"
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default ReviewItem;
