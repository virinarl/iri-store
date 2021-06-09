import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer";
import CategoryContainer from "./components/CategoryContainer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route exact path="/categorias">
          <CategoryContainer />
        </Route>
        <Route exact path="/categorias/:catName">
          <ItemListContainer />
        </Route>
        <Route path="/categorias/:catName/:id">
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
