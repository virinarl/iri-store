import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';
import menu from './data/menu';


function App() {
  return (
    <div className="App">
      <NavBar menu = {menu}/>
      <ItemListContainer greeting='Conoce nuestros productos' />
    </div>
  );
}

export default App;
