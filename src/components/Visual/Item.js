import { Link } from "react-router-dom";
import React from "react";
import ItemCounts from "../ItemCount";
import "./Styles/item.css";

const Items = (props) => {
  return (
    <div className="itemContainer">
      <img src={props.imagen} alt={props.title} className="itemPhoto" />
      <Link to={props.url}>
        <div>
          <h3>{props.title}</h3>
          <p>${props.price}</p>
        </div>
      </Link>
      <ItemCounts initial={1} stock={props.stock} />
    </div>
  );
};

export default Items;
