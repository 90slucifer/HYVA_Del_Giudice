import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContaienr } from './components/CartContainer/CartContainer';
import { ThemeContext } from './context/ThemeContext';

function App() {
  return (
    <ThemeContext.Provider value={{texto:"Primer texto del xontexto"}}>
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/products" element={<ItemListContainer/>}/>
        <Route path="/products/:brandId" element={<ItemListContainer/>}/>
        <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartContaienr/>}/>
      </Routes>
      <header className="App-header">
      </header>
    </div>
    </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
