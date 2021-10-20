import { Link } from "react-router-dom";
import Menu from "./menu";


function Login(){
 return (   
<div className="titulo">
        
        <h1>Grupo 2 <span></span></h1>


        <div className="enlace">
            <div className="roles">
                <form action="">
                    <p>
                        <label for="rol">¿Quien eres?</label>
                        
                        <select>
                            <option>             </option>
                            <option>Administrador</option>
                            <option> Vendedor</option>
                        </select>
                    </p>

                        <p>
                            <input type="email" name="gmail" id placeholder="Ingrese su Gmail"/>
                        </p>
                        

                        

                    <p>
                    <Link to="/Menu">
                        <button type="submit" >  
                                                       
                            <span className="fab fa-google" aria-placeholder="fab fa-google"  ></span> 
                            <a href="Menu">Ingresar   </a> 
                                                          
                                                          
                        </button>
                        </Link> 
                    </p>
                    
                </form>

            </div>
        </div>   

    
</div> )

}


export default Login;
