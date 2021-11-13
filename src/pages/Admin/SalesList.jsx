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
import { getSales, deleteSale } from "../../services/SalesService";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles({
  table: {
    width: "60%",
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
    marginInline: "5px",
  },
  buttonEdit: {
    marginInline: "16px",
  },
  button_add: {
    textAlign: "right",
  },
});

export function SalesList() {
  const classes = useStyles();

  const { isAuthenticated } = useAuth0();
  const [sales, setSales] = useState([]);

  useEffect(() => {
    loadSalesData();
  }, []);

  const loadSalesData = async () => {
    let response = await getSales();
    setSales(response.data.data);
  };

  const deleteSaleData = async (id) => {
    let callbackUser = window.confirm("Esta seguro de eliminar la venta");
    if (callbackUser) {
      await deleteSale(id);
      loadSalesData();
    }
  };

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>Fecha</TableCell>
          <TableCell>Valor</TableCell>
          <TableCell>Id Cliente</TableCell>
          <TableCell>Nombre Cliente</TableCell>
          <TableCell>Id Vendedor</TableCell>
          {isAuthenticated && (
            <TableCell className={classes.button_add}>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="ventas/agregar"
              >
                Agregar
              </Button>
            </TableCell>
          )}
        </TableRow>
      </TableHead>
      <TableBody>
        {sales.map((sale) => (
          <TableRow className={classes.row} key={sale._id}>
            <TableCell>{sale.createdAt.slice(0, 10)}</TableCell>
            <TableCell>{sale.price}</TableCell>
            <TableCell>{sale.clientId}</TableCell>
            <TableCell>{sale.clientName}</TableCell>
            <TableCell>{sale.sellerId}</TableCell>
            {isAuthenticated && (
              <TableCell>
                <Button
                  className={classes.button}
                  variant="contained"
                  component={Link}
                  to={`ventas/detalle/${sale._id}`}
                  color="default"
                >
                  Detalle
                </Button>
                <Button
                  className={classes.buttonEdit}
                  variant="contained"
                  component={Link}
                  to={`ventas/editar/${sale._id}`}
                  color="primary"
                >
                  Editar
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteSaleData(sale._id)}
                >
                  Eliminar
                </Button>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
