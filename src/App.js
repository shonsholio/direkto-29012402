import './App.css';
import Detalles from './componentes/Detalles.jsx';
import Galeria from './componentes/Galeria.jsx';
import Header from './componentes/Header.jsx';


function App() {
  return (
    <div className="App">
      <header>
        <Header 
        titulo='Bodega en venta, Sector Circunvalar - La Paz'
        />
        <hr />
      </header>
      <body>
        <Galeria />
        <Detalles />
      </body>
    <br /> <br /> <br />  

    </div>
  );
}

export default App;
