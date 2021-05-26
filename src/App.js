import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCounts from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar menu ={["Inicio","Productos","Nosotros","Contacto"]}/>
      <ItemListContainer greeting="Hola!!" />
      <ItemCounts stock={5} initial={1} />
    </div>
  );
}

export default App;
