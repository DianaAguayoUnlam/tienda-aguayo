import './App.css';
import NavBar from './components/NavBar/NavBar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'; 
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// Importamos la React Router Dom para manejar el ruteo de nuestra web
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
// 6 - IMPORTAR NUESTRO HOC PROVIDER Y ENVOLVER NUESTRA APP
import { CartProvider } from './CartContext';
import Cart from './components/Cart/Cart';
import Category from './views/Category/Category';

function App() {
  return (
    
		<CartProvider>
      <Router>
        <div className="App">
          <header sx={{ justifyContent: 'start' }}>
            <NavBar/>
          </header>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Bienvenido/a a Plantillas Webs'/>} />
            <Route path='/category/:id' element={<Category/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;