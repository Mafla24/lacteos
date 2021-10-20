import Header from "../componets/header";
import react, { useEffect, useState } from "react";
import Productos from "./productos";
import { Link } from "react-router-dom";











const Gestionpd= () => {
    const [nombreProducto, setNombreProducto] = useState();

    useEffect(() => {
        console.log('esto es una funcion que se ejecuta cada que cambia el valor de nombrevehiculo');
        console.log('el valor de la variable es ', nombreProducto);
      }, [nombreProducto]);  
      
const enviarDatosAlBackend = () => {
        console.log('El valor de la variable nombreVehiculo es ', nombreProducto);
      };  



    return(

<div> 
<Header/> 
<div></div>     
<div className="container pt-3" >
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>

    
    <div className="row">
        <div className="col-lg-6 text-center">
            <div className="card text-center">
                <div className="card-body">
                    <h2>Agregar Producto</h2>
                    <form className="mt-2">
                        <div className="rw">
                              <div className="col">
                                   <input type="text" className="form-control" placeholder="SKU"/>
                              </div>
                              <div className="col">
                                   <input onChange={(e) => {
          setNombreProducto(e.target.value);
        }} value={nombreProducto} type="text" className="form-control" placeholder="Producto"/>
                              </div>
                         </div>
                             <input type="text" className="form-control mt-2" placeholder="Descripción"/>
                             <input type="text" className="form-control mt-2" placeholder="Valor"/>
                        <div class="mt-3">
                           
                           <button className="btn btn-dark mr-4" onClick={enviarDatosAlBackend}>Agregar</button>
                           

                           <Link to="/Productos">
                           <button  className="btn btn-dark" routerLink="adm-productos">Consultar</button>
                           </Link>
                                                  
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</div>  

    );
} 

export default Gestionpd;