import {
  makeStyles,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { loginAuth } from "../../services/AuthService";

const useStyles = makeStyles({
  container: {
    width: "300px",
    padding: "4%",
    margin: "100px auto 0 auto",
  },
  input: {
    padding: "4%",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "15px",
    marginTop: "5px",
  },
});

const initialValue = {
  email: "",
  password: "",
};

function Login() {
  
  const [credentials, setCredentials] = useState(initialValue);
  const { email, password } = credentials;
  const classes = useStyles();

  const onValueChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const startLogin = async () => {
    let respuesta = await loginAuth(credentials);
    if (respuesta.status === 200) {
      let token = respuesta.data.token;
      localStorage.setItem("token", token);
      window.location = "/home";
    }
  };

  return (
    <Paper className={classes.container}>
      <Typography variant="h4">Grupo 2</Typography>
      <Grid
        container
        spacing={8}
        alignItems="flex-end"
        className={classes.input}
      >
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
      <Grid
        container
        spacing={8}
        alignItems="flex-end"
        className={classes.input}
      >
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
          onClick={() => startLogin()}
          color="primary"
          style={{ textTransform: "none" }}
        >
          Iniciar sesión
        </Button>
        <Button
          variant="outlined"
          color="primary"
          style={{ textTransform: "none" }}
        >
          Google
        </Button>
      </Grid>
    </Paper>
  );
}

export default Login;
