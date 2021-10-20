
import './styles/styles.css';
import Login from './pages/login';





import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Menu from './pages/menu';
import Productos from './pages/productos';
import Gestionpd from './pages/gestionpd';
import Usuariorg from './pages/usuariorg';
import Ventas from './pages/ventas';


function App() {
  return (
    <div className="App">
      
      <Router>
        <switch>
          <Route path={["/login", "/login"]}>
          <Login/>
          </Route> 

          <Route path="/menu">
            <Menu/>
          </Route>

          <Route path="/productos">
            <Productos/>
          </Route>

          <Route path="/gestionpd">
            <Gestionpd/>
          </Route>

          <Route path="/usuariorg">
            <Usuariorg/>
          </Route>

          <Route path="/ventas">
            <Ventas/>
          </Route>
        </switch>  
      </Router>
      
        
    </div>
  );
}

export default App;
