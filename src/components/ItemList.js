import React from "react";
import { useEffect, useState } from "react";
import Items from "./Visual/Item";
import Productos from "../data/infoProductos";

import "./styles/itemList.css";

const ItemList = () => {
  const [productos, setProductos] = useState([]);

  //Promise
  const obtenerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Productos);
    }, 1000);
  });

  //async
  const ejecutarPromise = async () => {
    try {
      const result = await obtenerProductos;
      setProductos(result);
    } catch (error) {
      alert("No pudimos cargar los productos");
    }
  };

  useEffect(() => {
    ejecutarPromise();
  }, []);

  return productos.map((producto) => (
    <div key={producto.id}>
      <Items
        title={producto.title}
        price={producto.price}
        url={producto.pictureUrl}
        stock={producto.stock}
        descripcion={producto.descripcion}
      />
    </div>
  ));
};

export default ItemList;
