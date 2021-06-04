import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer';

import menu from './data/menu';

function App() {
  return (
    <div className="App">
      <NavBar menu = {menu}/>
      <ItemListContainer greeting='Conoce nuestros productos' />
      <ItemDetailContainer identificador={1} />
    </div>
  );
}

export default App;
