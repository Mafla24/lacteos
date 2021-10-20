function Usuariorg(){
    return (
        <div>
            
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/>
    

    <div>
        <h1>Formulario de registro</h1>
    </div>
    <form>
        <div class="form-group"> 
            <label for="full_name_id" class="control-label"><b>Nombre</b></label>
            <input type="text" class="form-control" id="full_name_id" placeholder="Ingresa tu nombre"/>
        </div>  
        <div class="form-group"> 
            <label for="full_name_id" class="control-label"><b>Telefono</b></label>
            <input type="text" class="form-control" id="full_tele_id" placeholder="Ingresa numero telefonico"/>
        </div>  
        <div class="form-group"> 
            <label for="full_name_id" class="control-label"><b>Correo</b></label>
            <input type="email" class="form-control" id="full_email_id" placeholder="Ejemplo: correo@mail.com"/>
        </div> 
        <div class="form-group"> 
            <label for="state_id" class="control-label"><b>Rol</b></label>
            <select class="form-control" id="state_id">
                <option value="AL">Vendedor</option>
                <option value="AL">Administrador</option>
            </select>                    
        </div>
        <div class="form-group"> 
            <label for="state_id" class="control-label"><b>Estado</b></label>
            <select class="form-control" id="state_id">
                <option value="AL">Pendiente</option>
                <option value="AL">Autorizado</option>
                <option value="AL">No autorizado</option>
            </select>                    
        </div>

        <div class="2"> 
            <button type="submit" class="btn btn-primary">Enviar</button>
        </div> 


    </form>
    


</div>

    );
}

export default Usuariorg;