import React from "react";
import "./item.css";
import { Link } from "react-router-dom";
const Item = ({ image, name, newPrice, oldPrice, id }) => {
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img src={image} onClick={() => window.scrollTo(0, 0)} />
      </Link>

      <p> {name} </p>
      <div className="itemPrices">
        <div className="itemNewPrice"> ₾ {newPrice} </div>
        <div className="itemOldPrice"> ₾ {oldPrice} </div>
      </div>
    </div>
  );
};

export default Item;
