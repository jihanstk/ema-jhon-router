import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>CheckOute Here</h1>
      <button className=" bg-orange-300" onClick={handleGoBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
        Go Back
      </button>
    </div>
  );
};

export default Checkout;
