import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'; 
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header" sx={{ justifyContent: 'start' }}>
      <NavBar/>
      <ItemListContainer greeting='Bienvenido/a a Plantillas Webs'/>
      <ItemDetailContainer/>
      </header>
    </div>
  );
}

export default App;
