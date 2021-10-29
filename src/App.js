import Header from "./componets/header";
import './styles/styles.css';
import Login from './pages/login';





import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './pages/home';
import Productos from './pages/productos';
import Gestionpd from './pages/gestionpd';
import Usuariorg from './pages/usuariorg';
import Ventas from './pages/ventas';


function App() {
  return (<Router>
      <Header />
        <Switch>
          <Route path={["/login", "/login"]}>
          <Login/>
          </Route> 

          <Route path="/home">
            <Home/>
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
        </Switch>  
      </Router>
  );
}

export default App;
