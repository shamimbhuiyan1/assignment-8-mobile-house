import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = ({ product, addTOCard }) => {
  const { title, price, img } = product;
  return (
    <div>
      <div className="card">
        <img src={img} alt="" />
        <div className="product-body">
          <div className="card-info">
            <h3>{title}</h3>
            <p>${price}</p>
          </div>
          <button className="btn" onClick={() => addTOCard(product)}>
            <p className="btn-text">ADD TO CART</p>
            <FontAwesomeIcon
              className="btn-icon"
              icon={faShoppingCart}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
