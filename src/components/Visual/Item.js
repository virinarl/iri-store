import React from "react";
import ItemCounts from "../ItemCount";
import "./Styles/item.css";

const Items = (props) => {
  return (
    <div className="itemContainer">
      <img src={props.url} alt={props.title} className="itemPhoto" />
      <div>
        <h3>{props.title}</h3>
        <p>${props.price}</p>
      </div>
      <ItemCounts initial={1} stock={props.stock} />
    </div>
  );
};

export default Items;
