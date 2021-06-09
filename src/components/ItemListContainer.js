import React from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "./styles/itemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const { id } = useParams();
  const { catName } = useParams();

  console.log(id);
  console.log(catName);

  return (
    <section className="item-list-container">
      <h2>{greeting}</h2>

      <ItemList catName={catName} id={id} />
    </section>
  );
};

export default ItemListContainer;
