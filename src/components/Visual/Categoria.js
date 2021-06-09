import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Category.css";

const Categoria = (props) => {
  return (
    <div className="category">
      <Link to={props.url}>
        <h2>{props.nombre}</h2>
      </Link>
    </div>
  );
};

export default Categoria;
