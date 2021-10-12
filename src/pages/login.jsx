import { Link } from "react-router-dom";


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
                            <input name="gmail" id placeholder="Ingrese su Gmail"/>
                        </p>
                        

                        

                    <p>
                    
                        <button type="submit" >                               
                            <span className="fab fa-google" aria-placeholder="fab fa-google"  ></span> 
                            <a href="index.html">Ingresar   </a> 
                                                          
                                                          
                        </button>
                        
                    </p>
                    
                </form>

            </div>
        </div>   

    
</div> )

}


export default Login;
