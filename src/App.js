import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./componets/header";
import "./styles/styles.css";

import Login from "./pages/login";
import Usuariorg from "./pages/usuariorg";
import { Home } from "./pages/home";
import { NotFound } from "./pages/NotFound";

import { UserList } from "./pages/Users/UserList";
import { EditUser } from "./pages/Users/EditUser";

import { ProductList } from "./pages/Products/ProductList";
import { CreateProduct } from "./pages/Products/CreateProduct";
import { EditProduct } from "./pages/Products/EditProduct";

import { SalesList } from "./pages/Sales/SalesList";
import { SaleDetail } from "./pages/Sales/SaleDetail";
import { CreateSale } from "./pages/Sales/CreateSale";
import { EditSale } from "./pages/Sales/EditSale";

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
        <Route exact path="/usuariorg" component={Usuariorg} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/productos" component={ProductList} />
        <Route exact path="/ventas" component={SalesList} />
        <Route exact path="/ventas/detalle/:id" component={SaleDetail} />
        <Route exact path="/usuarios" component={UserList} />
        {user && (
          <>
            <Route exact path="/usuarios/:id" component={EditUser} />
            <Route exact path="/productos/agregar" component={CreateProduct} />
            <Route exact path="/productos/editar/:id" component={EditProduct} />
            <Route exact path="/ventas/agregar" component={CreateSale} />
            <Route exact path="/ventas/editar/:id" component={EditSale} />
            <Route exact path="/ventas/detalle/editar/:id" component={EditSale} />
          </>
        )}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
