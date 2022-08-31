import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer texto='texto temporal' subtexto='xdnt'/>
      <ItemCount stock={5} initial={1} />
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
