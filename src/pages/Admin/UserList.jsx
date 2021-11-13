import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../../services/UsersService";
import { Link } from "react-router-dom";
import {
  makeStyles,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles({
  table: {
    width: "50%",
    margin: "1% auto 0 auto",
  },
  thead: {
    fontSize: 20,
  },
  button_add: {
    textAlign: "right",
  },
  row: {
    fontSize: 18,
  },
  button: {
    marginInline: "17px",
  },
});



export function UserList() {
  const classes = useStyles();
  const { isAuthenticated } = useAuth0();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data.data);
  };

  const deleteUserData = async (id) => {
    let callbackUser = window.confirm("¿Está seguro de eliminar este usuario?");
    if (callbackUser) {
      await deleteUser(id);
      getAllUsers();
    }
  };

  return (
    <>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>Id</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Telefono</TableCell>
            <TableCell>isAdmin</TableCell>
            <TableCell>Estado</TableCell>
            {isAuthenticated && (
            <TableCell className={classes.button_add}>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="registro"
              >
                Agregar
              </Button>
            </TableCell>
          )}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow className={classes.row} key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.tel}</TableCell>
              <TableCell>{user.isAdmin ? "Si" : "No"}</TableCell>
              <TableCell>{user.status}</TableCell>
              {isAuthenticated && (
                <TableCell>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={`usuarios/${user._id}`}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteUserData(user._id)}
                  >
                    Eliminar
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
