import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer texto='texto temporal' subtexto='xdnt'/>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
