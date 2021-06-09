import React from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "./styles/itemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const { catName } = useParams();
  console.log(catName);

  return (
    <section className="item-list-container">
      <h2>{greeting}</h2>

      <ItemList />
    </section>
  );
};

export default ItemListContainer;
