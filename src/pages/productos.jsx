import Header from "../componets/header";

function Productos(){
    return (

      
<div class="container mt-2">
<div><Header/></div>  
    <div class="card">
        <div class="card-body">
            <span class="h3">Lista de productos</span>
            <button class="btn btn-dark float-right" routerLink="/adm-producto-AdmProductoNuevo">Agregar</button>
            <table class="table table-striped mt-2">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">SKU</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Editar o Borrar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>789234-1</td>
                    <td>Mantequilla</td>
                    <td>Lorem ipsum dolor sit amet consectetur, adipiscing elit ante.</td>
                    <td>5000</td>
                    <td>40</td>
                    <td>
                        <i class="far fa-edit fa-lg text-info mr-3"></i>
                        <i class="far fa-minus-square fa-lg text-danger "></i>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>789500-1</td>
                    <td>Crema Sour</td>
                    <td>Lorem ipsum dolor sit amet consectetur, adipiscing elit ante.</td>
                    <td>8000</td>
                    <td>5</td>
                    <td>
                        <i class="far fa-edit fa-lg text-info mr-3"></i>
                        <i class="far fa-minus-square fa-lg text-danger "></i>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>789100-1</td>
                    <td>Leche</td>
                    <td>Lorem ipsum dolor sit amet consectetur, adipiscing elit ante.</td>
                    <td>3300</td>
                    <td>10</td>
                    <td>
                        <i class="far fa-edit fa-lg text-info mr-3"></i>
                        <i class="far fa-minus-square fa-lg text-danger "></i>
                    </td>
                  </tr>
                </tbody>
              </table>        </div>
    </div>
</div>

);
    
    

    
}

export default Productos;
