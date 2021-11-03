import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../../services/AuthService";
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
    marginInline: "20px",
  },
});

const initialValue = {
  email: "",
};

export function UserList() {
  const classes = useStyles();

  const [user, setUser] = useState(initialValue);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUser(getCurrentUser());
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
            <TableCell>Nombre</TableCell>
            <TableCell>Teléfono</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>isAdmin</TableCell>
            <TableCell>Status</TableCell>
            {user && (
              <TableCell className={classes.button_add}>
                <Button
                  variant="contained"
                  color="success"
                  component={Link}
                  to="usuariorg"
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
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.tel}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.isAdmin ? "Si" : "No"}</TableCell>
              <TableCell>{user.status}</TableCell>
              {user && (
                <TableCell>
                  <Button
                    className={classes.button}
                    variant="contained"
                    component={Link}
                    to={`usuarios/${user._id}`}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
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
