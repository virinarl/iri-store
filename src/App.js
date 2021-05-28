import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCounts from './components/ItemCount';
import ItemList from './components/ItemList';


function App() {
  return (
    <div className="App">
      <NavBar menu ={["Inicio","Productos","Nosotros","Contacto"]}/>
      <ItemListContainer greeting="Hola!!" />
      <ItemList />
    </div>
  );
}

export default App;
