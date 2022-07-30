import React from "react";
import "../Carts/Carts.css";

const ItemsCart = ({ cart }) => {
  const { title, img } = cart;
  return (
    <div>
      <div className="Carts-box">
        <div className="cart-box-info">
          <img className="cart-img" src={img} alt="" />
          <span className="cart-name">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemsCart;
