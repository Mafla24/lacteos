import React, { useState, useEffect } from "react";
import {
  makeStyles,
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
} from "@material-ui/core";
import { editUser, getUser } from "../../services/UsersService";
import { useHistory, useParams } from "react-router-dom";

const initialValue = {
  email: "",
  name: "",
  isAdmin: false,
  status: '',
  tel: '',
};

const useStyles = makeStyles({
  container: {
    width: "30%",
    margin: "100px auto 0 auto",
    "& > *": {
      marginTop: 20,
    },
  },
});

export function EditUser() {
  const [user, setUser] = useState(initialValue);
  const { email, name, tel, isAdmin, status } = user;
  const classes = useStyles();
  let history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    let response = await getUser(id);
    setUser(response.data.data);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onStateChange = (state) => {
    setUser({ ...user, isAdmin: state });
  };
  
  const handleStatusChange = (event) => {
    setUser({ ...user, status: event.target.value });
  };


  const updateUserData = async () => {
    await editUser(user);
    history.push("/usuarios");
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Editar Usuario</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          name="email"
          type="text"
          readOnly disabled
          value={email}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Nombre</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          type="text"
          name="name"
          value={name}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Telefono</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="tel"
          type="text"
          value={tel}
          id="my-input"
        />
      </FormControl>
      <FormControl>
      <InputLabel htmlFor="my-input">Status</InputLabel>
        <Select
    labelId="status"
    id="status"
    value={status}
    label="Status"
    onChange={handleStatusChange}
  >
    <MenuItem value={"pendiente"}>pendiente</MenuItem>
    <MenuItem value={"autorizado"}>autorizado</MenuItem>
    <MenuItem value={"noAutorizado"}>noAutorizado</MenuItem>
  </Select>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">isAdmin</FormLabel>
        <RadioGroup
          name="isAdmin"
          onChange={(e) => onStateChange(e.target.value === "false")}
          aria-label="isAdmin"
          value={isAdmin ? "false" : "true"}
        >
          <FormControlLabel value="true" control={<Radio />} label="No" />
          <FormControlLabel value="false" control={<Radio />} label="Si" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          onClick={() => updateUserData()}
          color="primary"
        >
          Editar Usuario
        </Button>
      </FormControl>
    </FormGroup>
  );
}