import './styles/styles.css';
import Login from './pages/login';
import Header from './componets/header';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Menu from './pages/menu';


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
        </switch>  
      </Router>
      
        
    </div>
  );
}

export default App;
