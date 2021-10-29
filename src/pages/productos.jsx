




function Productos(){
    return (



<div>   


<div className="container mt-2">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
  
    <div className="card">
        <div className="card-body">
            <span className="h3">Lista de productos</span>
            <button className="btn btn-dark float-right" routerLink="/adm-producto-AdmProductoNuevo">Agregar</button>
            <table className="table table-striped mt-2">
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
</div>
);
    
    

    
}

export default Productos;
