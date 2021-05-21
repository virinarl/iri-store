import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCounts from './components/ItemCount';

function App() {
  return <>
    <NavBar />
    <ItemCounts stock={5} initial={1} />
    <ItemListContainer greeting="Holaaa! Vengo a flotar..." />
  </>;
}

export default App;
