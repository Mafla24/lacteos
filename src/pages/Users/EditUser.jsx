import React, { useState, useEffect } from "react";
import {
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
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { editUser, getUser } from "../../services/UsersService";
import { useHistory, useParams } from "react-router-dom";
import { verifyToken } from "../../services/AuthService";

const initialValue = {
  email: "",
  name: "",
  password: "",
  isAdmin: false,
  status: "",
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
  const { name, password, isAdmin, status } = user;
  const classes = useStyles();
  let history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    verifyToken();
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

  const updateUserData = async () => {
    await editUser(user);
    history.push("/usuarios");
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Editar Usuario</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Nombre</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Password</InputLabel>
        <Input
          type="password"
          onChange={(e) => onValueChange(e)}
          name="password"
          value={password}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Status</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="status"
          value={status}
          id="my-input"
        />
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">isAdmin</FormLabel>
        <RadioGroup
          name="isAdmin"
          onChange={(e) => onStateChange(e.target.value === "No")}
          aria-label="isAdmin"
          defaultValue="No"
          value={isAdmin ? "No" : "Si"}
        >
          <FormControlLabel value="No" control={<Radio />} label="No" />
          <FormControlLabel value="Si" control={<Radio />} label="Si" />
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
