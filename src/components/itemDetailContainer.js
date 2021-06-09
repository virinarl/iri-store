import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./Visual/itemDetails";
import { ItemBySale } from "../helpers/buscador";

const ItemDetailContainer = ({ identificador }) => {
  const [item, setItem] = useState([]);

  const getItems = (condition) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = ItemBySale(condition);
        resolve(result);
      }, 1000);
    });
  };

  useEffect(() => {
    getItems(identificador).then((response) => setItem(response));
  }, [identificador]);

  return (
    <div>
      {" "}
      {item ? (
        <div>
          <ItemDetail item={item} />
        </div>
      ) : (
        <p className="loading">Cargando producto</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
