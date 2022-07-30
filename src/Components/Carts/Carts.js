import { useState } from "react";
import ItemsCart from "../ItemsCart/ItemsCart";

import "./Carts.css";

const Cards = ({ carts, removeBtn }) => {
  // console.log(carts);

  const [getOne, setGetOne] = useState([]);

  const sigleProduct = (carts) => {
    let luckyOne = carts[Math.floor(Math.random() * carts.length)];
    setGetOne(luckyOne);
  };

  return (
    <div className="item">
      <h4 className="selected">Selected Items</h4>
      {carts.map((cart) => (
        <ItemsCart cart={cart} key={cart.id}></ItemsCart>
      ))}
      <div className="itemss">
        <button className="cart-btn" onClick={() => sigleProduct(carts)}>
          Let Me Choose One
        </button>
        <img src={getOne.img} alt="" />
        <p>{getOne.price}</p>
        <p>{getOne.title}</p>
        <button className="cart-btn" onClick={removeBtn}>
          Select Again
        </button>
      </div>
    </div>
  );
};

export default Cards;
