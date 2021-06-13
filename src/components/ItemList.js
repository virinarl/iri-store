import React from "react";
import { useEffect, useState } from "react";
import Item from "./Visual/Item";
import Productos from "../data/infoProductos";

import "./styles/itemList.css";

const ItemList = ({ catName, id }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Productos);
      }, 1000);
    });

    id
      ? getProducts.then((res) => {
          setProductos(res.filter((i) => i.id === id));
        })
      : catName
      ? getProducts.then((res) => {
          setProductos(res.filter((i) => i.categoria === catName));
        })
      : getProducts.then((res) => {
          setProductos(res);
        });
  }, [catName, id]);

  return productos.map((producto) => (
    <div key={producto.id}>
      <Item
        url={"/categorias/" + producto.categoria + "/" + producto.id}
        title={producto.title}
        price={producto.price}
        imagen={producto.pictureUrl}
        stock={producto.stock}
        descripcion={producto.descripcion}
        id={producto.id}
      />
    </div>
  ));
};

export default ItemList;
