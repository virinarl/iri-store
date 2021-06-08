import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

import "./styles/NavBar.css";

const NavBar = ({ menu }) => {
  return (
    <div>
      <nav className="header">
        <Link to={"/"}>
          <h1>CLPrisma Tejidos</h1>
        </Link>
        <div>
          {menu.map((element) => (
            <p key={element.nombre}>
              <Link to={ element.url }>{element.nombre}</Link>
            </p>
          ))}
          <CartWidget />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
