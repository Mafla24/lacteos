import React, { useState } from "react";
import { createUser } from "../services/UsersService";
import { useHistory } from "react-router-dom";
import { makeStyles, Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { GoogleLogin } from "react-google-login";

const useStyles = makeStyles({
  container: {
    width: "300px",
    padding: "4%",
    margin: "100px auto 0 auto",
  },
  input: {
    padding:"4%"
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "15px",
    marginTop: "5px"
  },
});

const initialValue = {
  email: "",
  password: "",
  name: "",
  tel: "",
};

function Usuariorg() {
  const [newUser, setNewUser] = useState(initialValue);
  const { email, password, name, tel } = newUser;

  const classes = useStyles();

  let history = useHistory();

  const onValueChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const responseGoogleFailure = (response)=>{
    console.log(response);
  }

  const responseGoogle = async (response) => {
    console.log(response);
    const name = response.profileObj.name;
    const email = response.profileObj.email;
    const password = response.profileObj.email;
    const tel = "";
    setNewUser({ name, email, password, tel});
    registerUser()
  };

  const registerUser = async () => {
    let response = await createUser(newUser);
    if (response.status === 201) {
      history.push("/");
    } else {
      console.error("Error creando el usuario" + response.data.error);
    }
  };

  return (
    <Paper className={classes.container}>
      <Typography variant="h4">Formulario de registro</Typography>
      <Grid container spacing={8} error alignItems="flex-end" className={classes.input}>
        <Grid item md={true} sm={true} xs={true}>
          <TextField
            value={name}
            name="name"
            onChange={(e) => onValueChange(e)}
            label="Nombre Completo"
            type="text"
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container spacing={8} alignItems="flex-end" className={classes.input}>
        <Grid item md={true} sm={true} xs={true}>
          <TextField
            value={tel}
            name="tel"
            onChange={(e) => onValueChange(e)}
            label="Teléfono"
            type="text"
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container spacing={8} alignItems="flex-end" className={classes.input}>
        <Grid item md={true} sm={true} xs={true}>
          <TextField
            value={email}
            name="email"
            onChange={(e) => onValueChange(e)}
            label="Email"
            type="email"
            fullWidth
            autoFocus
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={8} alignItems="flex-end" className={classes.input}>
        <Grid item md={true} sm={true} xs={true}>
          <TextField
            value={password}
            name="password"
            onChange={(e) => onValueChange(e)}
            label="Password"
            type="password"
            fullWidth
            required
          />
        </Grid>
      </Grid>
      <Grid container className={classes.button}>
        <Button
          variant="outlined"
          onClick={() => registerUser()}
          color="primary"
          style={{ textTransform: "none" }}
        >
          Registrarse
        </Button>
        </Grid>
        <Grid container className={classes.button}>
        <GoogleLogin
          clientId="197549320771-3350d8uvuab2bhln8n6afp67um90ocs4.apps.googleusercontent.com"
          buttonText="Registrarse"
          onSuccess={responseGoogle}
          onFailure={responseGoogleFailure}
          cookiePolicy={"single_host_origin"}
        />
      </Grid>
    </Paper>
  );
}

export default Usuariorg;
