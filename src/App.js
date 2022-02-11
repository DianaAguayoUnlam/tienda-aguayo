import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'; 
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// Importamos la React Router Dom para manejar el ruteo de nuestra web
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header sx={{ justifyContent: 'start' }}>
          <NavBar/>
        </header>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenido/a a Plantillas Webs'/>} />
          <Route path='/category/:id' element={<ItemListContainer greeting='Bienvenido/a a Plantillas Webs'/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
