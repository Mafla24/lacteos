//function Header(){
//  return(
//    <header>
//<ul className='navbar'>
//  <h1> Grupo 2</h1>
//<li><a href="#">Inicio</a></li>
//<li><a href="#">Productos</a></li>
// <li><a href="#">Gestor de productos</a></li>
//      <li><a href="#">Gestor de ventas</a></li>
//    <li><a href="#">Ventas</a></li>
//  <li><a href="#">Gestor de usuarios</a></li>
//       </ul>
//    </header>
//  )
//}

//export default Header;
/*
import React, { useState, useEffect } from "react";
import { getCurrentUser } from "../services/AuthService";

const initialValue = {
  email: "",
};

const Header = ()=>{
  const [user, setUser] = useState(initialValue);
  const classes = useStyle();

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location = "/";
  };

  return (
    <header>
    <ul className='navbar'>
        <h1> Grupo 2</h1>
        {!user && (
          <>
            <li><a href="Login">Acceso</a></li>
            <li><a href="Usuariorg">Gestor de usuarios</a></li>  
          </>
        )}
        {user && (
          <>
            <li onClick={() => logout()}><a href="logout">Logout</a></li>
            <li>${user.email}</a></li>
          </>
        )}
        <li><a href="Home">Inicio</a></li>
        <li><a href="Productos">Productos</a></li>
        <li><a href="Gestionpd">Gestor de productos</a></li>
        <li><a href="Ventas">Gestor de ventas</a></li>
        <li><a href="Ventas">Ventas</a></li>
     </ul>
    </header>

  )
}
export default Header
*/
import {
  makeStyles,
  AppBar,
  Avatar,
  Box,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Toolbar,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getCurrentUser } from "../services/AuthService";

const useStyle = makeStyles({
  header: {
    background: "#204d88",
  },
  tabs: {
    color: "#FFFFFF",
    marginRight: 20,
    textDecoration: "none",
    fontSize: 20,
  },
  tab_end: {
    color: "#FFFFFF",
    marginRight: 10,
    textDecoration: "none",
    fontSize: 20,
    alignItems: "end",
  },
});

const initialValue = {
  email: "",
};

export function Header() {
  const [user, setUser] = useState(initialValue);
  const classes = useStyle();

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location = "/";
  };
  return (
    <Box sx={{ display: "flex", p: 1 }}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <NavLink className={classes.tabs} to="/home">
              Home
            </NavLink>
            <NavLink className={classes.tabs} to="/productos">
              Productos
            </NavLink>
            <NavLink className={classes.tabs} to="/ventas">
              Ventas
            </NavLink>
            <NavLink className={classes.tabs} to="/usuarios">
              Usuarios
            </NavLink>
          </Box>
          {!user && (
            <>
              <NavLink className={classes.tab_end} to="/usuariorg">
                <Button variant="contained" color="primary">
                  registrarse
                </Button>
              </NavLink>
              <NavLink className={classes.tab_end} to="/">
                <Button variant="contained" color="primary">
                  Login
                </Button>
              </NavLink>
            </>
          )}
          {user && (
            <>
              <Button className={classes.tab_end}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                      👤
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText secondary={user.email} />
                </ListItem>
              </Button>
              <Button
                variant="contained"
                onClick={() => logout()}
                color="secondary"
              >
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
