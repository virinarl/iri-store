import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return <>
    <NavBar />
    <ItemListContainer greeting="Holaaa! Vengo a flotar..." />
  </>;
}

export default App;
