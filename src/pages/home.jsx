import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../services/AuthService";

const initialValue = {
  email: "",
};

export function Home() {
  const [user, setUser] = useState(initialValue);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  return (
    <div className="titulo">
      <h2>Bienvenidos a la App del grupo 2</h2>
      {!user && (
        <>
          <p>haz Click en login para ingresar</p>
          <p>o en registrarse para unirte, es gratis!</p>
        </>
      )}
      {user && (
        <>
          <p>Estas logeado desde {user.email}</p>
        </>
      )}
    </div>
  );
}
