import React, { useState, useEffect } from "react";
import {
  FormGroup,
  Select,
  MenuItem,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography
} from "@material-ui/core";
import { editSale, getSale } from '../../services/SalesService';
import { getProducts } from "../../services/ProductService";
import { useHistory, useParams } from "react-router-dom";

const initialValue = {
  products: [],
  price: 0,
  clientName: "",
  clientId: "",
  sellerId: "",
};

const initialValueProduct = {
  _id: "",
  price: 0,
  desc: "",
  name: "",
  amount: 0,
};

const useStyles = makeStyles({
  container: {
    width: "60%",
    margin: "100px auto 0 auto",
    "& > *": {
      marginTop: 20,
    },
  },
  table: {
    width: "100%",
    margin: "1% auto 0 auto",
  },
  thead: {
    "& > *": {
      fontSize: 20,
      background: "#FFFFFF",
      color: "#000000",
    },
  },
  row: {
    "& > *": {
      fontSize: 18,
    },
  },
  button: {
    marginInline: "20px",
  },
  button_add: {
    textAlign: "right",
  },
});

export function EditSale() {
  const classes = useStyles();
  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    loadProductsData();
  }, []);

  const [productList, setProductList] = useState([]);
  const [sale, setSale] = useState(initialValue);
  const [newProduct, setNewProduct] = useState(initialValueProduct);

  const [creatingProductState, setCreatingProductState] =
    useState("minimizado");

  const { products, price, clientName, clientId, sellerId } = sale;

  const loadSaleData = async () => {
    let response = await getSale(id);
    setSale(response.data.data);
}

  const loadProductsData = async () => {
    let response = await getProducts();
    setProductList(response.data.data);
    loadSaleData();
  };

  const onValueChange = (e) => {
    setSale({ ...sale, [e.target.name]: e.target.value });
  };

  const onValueNewProductChange = (e) => {
    e.preventDefault();
    if (e.target.name === "_id") {
      let product = productList.find((product) => product._id === e.target.value);
      let newProductCopy = newProduct;
      newProductCopy.desc = product.desc;
      newProductCopy.name = product.name;
      newProductCopy.price = product.price;
      setNewProduct(newProductCopy);
    }
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };


  const addProduct = (newProduct) => {
    let productsCopy = products;
    productsCopy.push(newProduct);
    setSale({ ...sale, products: productsCopy });
    setNewProduct(initialValueProduct);
    changeStateCreateProductForm("minimizado");
  };

  const editSaleData = async () => {
    let response = await editSale(sale);
    if (response.status === 201) {
        history.push('/ventas');
    }
}

const deleteProduct = (id) => {
  let productsCopy = products.filter(product => product._id !== id);
  setSale({ ...sale, products: productsCopy });
}

const changeStateCreateProductForm = (state) => {
  setCreatingProductState(state);
}

  return (
    <>
      <FormGroup className={classes.container}>
        <Typography variant="h4">Editar Venta</Typography>
        <FormControl>
          <InputLabel htmlFor="my-input">Id</InputLabel>
          <Input  type="text" name='_id' readOnly disabled  value={id} id="my-input" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Valor</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            type="number"
            name="price"
            value={price}
            id="my-input"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Id Cliente</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            type="text"
            name="clientId"
            value={clientId}
            id="my-input"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Nombre Cliente</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            type="text"
            name="clientName"
            value={clientName}
            id="my-input"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Id Vendedor</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            type="text"
            name="sellerId"
            value={sellerId}
            id="my-input"
          />
        </FormControl>
        
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.thead}>
              <TableCell>
                Id{" "}
                {creatingProductState === "desplegado" && (
                  <>
                    :
                    <FormControl fullWidth>
                      <Select
                        name="_id"
                        value={newProduct._id}
                        label="Id"
                        onChange={(e) => onValueNewProductChange(e)}
                      >
                        {productList.map((product) => (
                          <MenuItem value={product._id}>{product.name}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </>
                )}
              </TableCell>
              <TableCell>
                Precio{" "}
                {creatingProductState === "desplegado" && (
                  <>: {newProduct.price}</>
                )}
              </TableCell>
              <TableCell>
                Cantidad:{" "}
                {creatingProductState === "desplegado" && (
                  <>
                    :
                    <Input
                      onChange={(e) => onValueNewProductChange(e)}
                      value={newProduct.amount}
                      type="number"
                      name="amount"
                    />
                  </>
                )}
              </TableCell>
              <TableCell>
                Descripcion{" "}
                {creatingProductState === "desplegado" && (
                  <>: {newProduct.desc}</>
                )}
              </TableCell>
              <TableCell>
                Nombre{" "}
                {creatingProductState === "desplegado" && (
                  <>: {newProduct.name}</>
                )}
              </TableCell>
              <TableCell className={classes.button_add}>
                {creatingProductState === "minimizado" && (
                  <Button
                    variant="contained"
                    onClick={() => changeStateCreateProductForm("desplegado")}
                  >
                    Agregar
                  </Button>
                )}
                {creatingProductState === "desplegado" && (
                  <Button
                    variant="contained"
                    onClick={() => addProduct(newProduct)}
                  >
                    +
                  </Button>
                )}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sale.products.map((product) => (
              <TableRow className={classes.row} key={product._id}>
                <TableCell>{product._id}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.amount}</TableCell>
                <TableCell>{product.desc}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteProduct(product._id)}
                  >
                    X
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <FormControl>
          <Button
            variant="contained"
            onClick={(e) => editSaleData()}
            color="primary"
          >
            Editar Venta
          </Button>
        </FormControl>
      </FormGroup>
    </>
  );
}
