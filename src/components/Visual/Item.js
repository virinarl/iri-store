import { Link } from "react-router-dom";
import React from "react";
import "./Styles/item.css";
import AddToCartButton from "../AddToCartButton";

const Item = (props) => {
  return (
    <div className="itemContainer">
      <Link to={props.url}>
        <img src={props.imagen} alt={props.title} className="itemPhoto" />
        <div>
          <h3>{props.title}</h3>
          <p>${props.price}</p>
        </div>
      </Link>
      <AddToCartButton id={props.id} stock={props.stock} />
    </div>
  );
};

export default Item;
