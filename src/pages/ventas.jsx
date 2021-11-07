import React, { useState, useEffect, useRef } from "react/cjs/react.development";

import { ToastContainer, toast } from 'react-toastify';
import { addSale } from "../services/SalesService";
import 'react-toastify/dist/ReactToastify.css';


const ventasBackend = {
        idventa: "",
        fecha: "",
        producto: "",
        cantidad:"",
        preciounit:"",
        valortotal:"",
        cliente:"",
        vendedor:"",
        estado:""

    }
    


const Ventas = () => {
   const [mostrarTabla, setMostrarTabla] = useState(true);
   const [ventas, setVentas] = useState(ventasBackend);
   const {idventa, fecha, producto, cantidad, preciounit, valortotal, cliente, vendedor, estado} = ventas;
   const [textoBoton, setTextoBoton] = useState("crear nueva venta");

useEffect(()=>{
    setVentas(ventasBackend);
},[])   

useEffect(() => {
    if(mostrarTabla){
        setTextoBoton("Crear venta");
    }else{
    setTextoBoton("Mostrar ventas");

    }
}, [mostrarTabla]); 


const registrarSale = async () => {
    let response = await addSale(nuevaVenta);
    if (response.status === 201) {
      history.push("/");
    } else {
      console.error("Error creando la venta" + response.data.error);
    }
  };

    return (
        
            <div className="tabla">
            <div>   
            <h1>Ventas</h1>
            <button onClick = {()=>{setMostrarTabla(!mostrarTabla);
             }}

             
             >
                 {textoBoton}
             
             </button>
             </div> 
            {mostrarTabla ? (
                 <TablaVentas listaVentas={ventas}/>
            ) : (

                <FormularioVentas
                setMostrarTabla={setMostrarTabla}
                listaVentas={ventas}
                setVentas={setVentas}    
                />
            )}
            <ToastContainer position="bottom-center" autoClose="{5000}"/>
            </div>

    );
}





const TablaVentas = ({ listaVentas }) => {
    useEffect(()=>{
        console.log("este es el listado de ventas del componente tabla", listaVentas);
    }, [listaVentas]);
    return(

        <div className="tablaventas">
            <h2>Tabla Ventas</h2>
        <table className="mostrartabla">
            <thead><tr>
                <th>Id venta</th>
                <th>Fecha</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>precio unit</th>
                <th>Valor total</th>
                <th>Cliente</th>
                <th>Vendedor</th>
                <th>Estado</th>
                </tr>
            </thead>
            <tbody>
               {listaVentas.map((venta)=>{
                   return(
                   <tr>
                    <td>{venta.idventa}</td>
                    <td>{venta.fecha}</td>
                    <td>{venta.producto}</td>
                    <td>{venta.cantidad}</td>
                    <td>{venta.preciounit}</td>
                    <td>{venta.valortotal}</td>
                    <td>{venta.cliente}</td>
                    <td>{venta.vendedor}</td>
                    <td>{venta.estado}</td>
                   </tr>
                   );
               })} 
                
               
            </tbody>
        </table>
        </div>
    );
}








const FormularioVentas = ({setMostrarTabla, listaVentas, setVentas})=> {
      

    const form = useRef(null);

    const submitForm = (e) =>{
        e.preventDefault();
        const fd = new FormData(form.current);
        
        const nuevaVenta = {};
        fd.forEach((value, key) =>{
            nuevaVenta[key]= value;
        });
        setMostrarTabla(true);
        setVentas([...listaVentas, nuevaVenta]);
        toast.success("Venta agregada con exito");
        
        //toast.error("Error al crear nueva venta");  
        
    };

    //const enviarAlBackend = () => {
    //console.log("idventa", idventa, "fecha", fecha, "producto", producto, 
      //  "cantidad", cantidad, "preciounit", preciounit, "valortotal", valortotal, 
      //  "cliente", cliente, "vendedor", vendedor, "estado", estado );
       // toast.success("Venta creada");  
       // setMostrarTabla(true);
       // setVentas([...listaVentas, {idventa:idventa, fecha:fecha, producto:producto, cantidad:cantidad,
       // preciounit:preciounit, valortotal:valortotal, cliente:cliente, vendedor:vendedor, estado:estado}]);
   // };


    return(
     
        <div className="formulario">
            <h4>Crear nueva venta</h4>
          <form ref={form} onSubmit={submitForm} >
              <p>
              <label htmlFor="idventa">Id venta
              <input value={idventa} onChange={this.e} name="idventa" placeholder="Id venta" type="text" required/>
              </label>
              </p>

              <p>  
              <label htmlFor="fecha">Fecha
              <input  value={fecha} onChange={this.e} name="fecha" placeholder="Fecha" type="date" required/>
              </label>
              </p>
              

              <p>
              <label htmlFor="producto">Producto
              <input value={producto} onChange={this.e} name="producto" placeholder="Producto" type="text" required/>
              </label>
              </p>

              <p>  
              <label htmlFor="cantidad">Cantidad
              <input value={cantidad} onChange={this.e} name="cantidad" placeholder="Cantidad" type="number"required/>
              </label>
              </p>

              <p>  
              <label htmlFor="preciounit">Precio unitario
              <input value={preciounit} onChange={this.e} name="preciounit" placeholder="Precio unitario" type="text" required/>
              </label>
              </p>

              <p>  
              <label htmlFor="valort">Valor total
              <input value={valortotal} onChange={this.e} name="valort" placeholder="Valor total" type="text" required/>
              </label>
              </p>

              <p>
              <label htmlFor="cliente">Cliente
              <input value={cliente} onChange={this.e} name="cliente" placeholder="Cliente" type="text" required/>
              </label>
              </p>

              <p>  
              <label htmlFor="vendedor">Vendedor
              <input value={vendedor} onChange={this.e}  name="vendedor" placeholder="vendedor" type="text" required/>
              </label>
              </p>
              
              <p>
              <label htmlFor="estado">Estado
              <select value={estado} onChange={this.e} name="estado" required defaultValue={0}>
                  <option disabled value={0}>Seleccione una opcion</option>
                  <option>En proceso</option>
                  <option>Cancelada</option>
                  <option>Entregada</option>
              </select>
              </label>
              </p>
             
              <button type="submit" onClick={() => addSale()}
              
              >Guardar venta</button>
          </form>

        </div>
        

    );
}

export default Ventas;



