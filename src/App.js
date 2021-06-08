import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer";

import menu from "./data/menu";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar menu={menu} />
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route path="/categoria">
          <ItemListContainer />
        </Route>
        <Route path="/ofertas">
          <ItemDetailContainer identificador={1} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
