import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import Menu from '../data/menu';

import "./styles/NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="header">
        <Link to={"/"}>
          <h1>CLPrisma Tejidos</h1>
        </Link>
        <div>
          {Menu.map((element) => 
          (
            <p key={element.nombre}>
              <Link to={element.url}>{element.nombre}</Link>
            </p>
          ))
          }       
          <CartWidget />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
