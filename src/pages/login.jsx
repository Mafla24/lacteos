import React, { useState } from "react";
import { loginAuth } from "../services/AuthService";

const initialValue = {
  email: "",
  password: "",
};

function Login() {
  const [datosUsuario, setDatosUsuario] = useState(initialValue);
  const { email, password } = datosUsuario;
  const controlarCambioValor = (e) => {
    setDatosUsuario({ ...datosUsuario, [e.target.name]: e.target.value });
  };

  const startLogin = async () => {
    let respuesta = await loginAuth(datosUsuario);
    if (respuesta.status === 200) {
      let token = respuesta.data.token;
      localStorage.setItem("token", token);
      window.location = "/";
    }
  };

  return (
      <div className="titulo">
        <h1>
          Grupo 2 <span></span>
        </h1>

        <div className="enlace">
          <div className="roles">
            <form action="">
              <p>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => controlarCambioValor(e)}
                  id
                  placeholder="Ingrese su Email"
                />
              </p>
              <p>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => controlarCambioValor(e)}
                  id
                  placeholder="Ingrese su Password"
                />
              </p>

              <p>
                <button onClick={() => startLogin()}>Ingresar</button>
              </p>

              <p>
                <button type="submit">
                  <span
                    className="fab fa-google"
                    aria-placeholder="fab fa-google"
                  ></span>
                  <a href="Menu">Ingresar con Google </a>
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Login;
