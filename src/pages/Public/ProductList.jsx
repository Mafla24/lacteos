import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  makeStyles,
} from "@material-ui/core";
import { getProducts, deleteProduct } from "../../services/ProductService";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles({
  table: {
    width: "50%",
    margin: "1% auto 0 auto",
  },
  thead: {
    "& > *": {
      fontSize: 20,
      background: "#000000",
      color: "#FFFFFF",
    },
  },
  row: {
    "& > *": {
      fontSize: 18,
    },
  },
  button: {
    marginInline: "17px",
  },
  button_add: {
    textAlign: "right",
  },
});

export function ProductList() {
  const classes = useStyles();
  const { isAuthenticated } = useAuth0();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    let response = await getProducts();
    setProducts(response.data.data);
  };

  const deleteProductData = async (id) => {
    let callbackUser = window.confirm("¿Está seguro de eliminar el producto?");
    if (callbackUser) {
      await deleteProduct(id);
      getAllProducts();
    }
  };

  return (
    <>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>Id</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell>Valor</TableCell>
            <TableCell>Estado</TableCell>
            {isAuthenticated && (
              <TableCell className={classes.button_add}>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="productos/agregar"
                >
                  Agregar
                </Button>
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow className={classes.row} key={product._id}>
              <TableCell>{product._id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.desc}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.state ? "Disponible" : "Agotado"}</TableCell>
              {isAuthenticated && (
                <TableCell>
                  <Button
                    className={classes.button}
                    variant="contained"
                    component={Link}
                    to={`productos/editar/${product._id}`}
                    color="primary"
                  >
                    Editar
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteProductData(product._id)}
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
