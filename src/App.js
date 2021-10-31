import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Header} from "./componets/header";
import "./styles/styles.css";

import Login from "./pages/login";
import {Home} from "./pages/Home";
import Productos from "./pages/productos";
import Gestionpd from "./pages/gestionpd";
import Usuariorg from "./pages/usuariorg";
import Ventas from "./pages/ventas";
import { NotFound } from "./pages/NotFound";

import { getCurrentUser } from "./services/AuthService";

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/productos" component={Productos} />
        {user && (
          <>
            <Route exact path="/ventas" component={Ventas} />
            <Route exact path="/gestionpd" component={Gestionpd} />
          </>
        )}
        <Route exact path="/usuariorg" component={Usuariorg} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
