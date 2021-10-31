import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../services/AuthService";

const initialValue = {
    name: "",
    email: "",
  };

export function Home(){
    const msg = ""
    const [user, setUser] = useState(initialValue);
  
    useEffect(() => {
        setUser(getCurrentUser());
      }, []);
      

    return (
       <div className="titulo">
           <h2>
               Bienvenidos a la App del grupo 2
           </h2>
           {!user && (
            <>
           (!User)
           <p>
               haz Click en login para ingresar 
           </p>
           <p>
           o en registrarse para unirte, es gratis!
           </p>
            </>
          )}
          {user && (
            <>
              <p>
                  Hola {user.name}, estas logeado dese {user.email}
           </p>
            </>
          )}
       </div>
      );
    
    

    
}