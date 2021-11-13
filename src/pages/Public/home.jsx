import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export function Home() {
  const { isAuthenticated, user } = useAuth0();
  
  return (
    <div className="titulo">
      <h2>Bienvenidos a la App del grupo 2</h2>
      {!isAuthenticated && (
        <>
          <p>haz Click en login para ingresar</p>
          <p>o en registrarse para unirte, es gratis!</p>
        </>
      )}
      {isAuthenticated && (
        <>
          <p>
            Hola, {user.name}. Estas logeado desde {user.email}
          </p>
        </>
      )}
    </div>
  );
}
