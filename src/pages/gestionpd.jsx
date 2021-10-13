import Header from "../componets/header";



function Gestionpd(){
    return(
<div class="container pt-3" >
    <Header/>
    <div class="row">
        <div class="col-lg-6 text-center">
            <div class="card text-center">
                <div class="card-body">
                    <h2>Agregar Producto</h2>
                    <form class="mt-2">
                        <div class="rw">
                              <div class="col">
                                   <input type="text" class="form-control" placeholder="SKU"/>
                              </div>
                              <div class="col">
                                   <input type="text" class="form-control" placeholder="Producto"/>
                              </div>
                         </div>
                             <input type="text" class="form-control mt-2" placeholder="Descripción"/>
                             <input type="text" class="form-control mt-2" placeholder="Valor"/>
                        <div class="mt-3">
                            <button class="btn btn-dark mr-4">Agregar</button>
                            <button class="btn btn-dark" routerLink="adm-productos">Volver</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

    );
} 

export default Gestionpd;