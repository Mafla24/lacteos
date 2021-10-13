import './styles/styles.css';
import Login from './pages/login';
import Header from './componets/header';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Menu from './pages/menu';
import Productos from './pages/productos';
import Gestionpd from './pages/gestionpd';


function App() {
  return (
    <div className="App">
      
      <Router>
        <switch>
          <Route path="/login">
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
        </switch>  
      </Router>
      
        
    </div>
  );
}

export default App;
