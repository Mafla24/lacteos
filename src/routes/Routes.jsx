import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Public
import { Home } from "../pages/Public/home";
import { NotFound } from "../pages/Public/NotFound";
import { ProductList } from "../pages/Public/ProductList";
//private
import { EditUser } from "../pages/Admin/EditUser";
import { CreateProduct } from "../pages/Admin/CreateProduct";
import { CreateSale } from "../pages/Admin/CreateSale";
import { EditProduct } from "../pages/Admin/EditProduct";
import { EditSale } from "../pages/Admin/EditSale";
import { SaleDetail } from "../pages/Admin/SaleDetail";
import { SalesList } from "../pages/Admin/SalesList";
import { UserList } from "../pages/Admin/UserList";
import Roles from "../pages/Admin/Roles";
import Registro from "../pages/Admin/usuariorg";
//Layout
import PrivateLayout from "../Layout/PrivateLayout";
import PublicLayout from "../Layout/PublicLayout";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route
          path={[
            "/usuarios/:id",
            "/usuarios", 
            "/productos/agregar",
            "/productos/editar/:id",
            "/ventas/agregar",
            "/ventas",
            "/ventas/detalle/:id",
            "/ventas/editar/:id",
            "/ventas/detalle/editar/:id",
            "/roles",
            "/registro"
          ]}
        >
          <PrivateLayout>
            <Switch>
              <Route path="/usuarios/:id">
                <EditUser />
              </Route>
              <Route exact path="/usuarios">
                <UserList />
              </Route>
              <Route path="/productos/agregar">
                <CreateProduct />
              </Route>
              <Route path="/productos/editar/:id">
                <EditProduct />
              </Route>
              <Route path="/ventas/agregar">
                <CreateSale />
              </Route>
              <Route exact path="/ventas">
                <SalesList />
              </Route>
              <Route exact path="/ventas/detalle/:id">
                <SaleDetail />
              </Route>
              <Route path="/ventas/editar/:id">
                <EditSale />
              </Route>
              <Route path="/ventas/detalle/editar/:id">
                <EditSale />
              </Route>
              <Route path="/roles">
                <Roles />
              </Route>
              <Route path="/registro">
                <Registro />
              </Route>
            </Switch>
          </PrivateLayout>
        </Route>

        <Route
          path={["/", "/productos"]}
        >
          <PublicLayout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/productos">
                <ProductList />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </PublicLayout>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
