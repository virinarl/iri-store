import React from "react";
import { useEffect, useState } from "react";
import CategoryList from "../data/categorias";
import Categoria from "./Visual/Categoria";

const CategoryContainer = () => {
  const [category, setCategory] = useState([]);

  const getCategory = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CategoryList);
    }, 1000);
  });

  const ejecutarPromise = async () => {
    try {
      const result = await getCategory;
      setCategory(result);
    } catch (error) {
      alert("No pudimos cargar las categorías");
    }
  };

  useEffect(() => {
    ejecutarPromise();
  }, []);

  return category.map((cat) => (
    <div key={cat.nombre}>
      <Categoria nombre={cat.nombre} url={cat.url} />
    </div>
  ));
};

export default CategoryContainer;
