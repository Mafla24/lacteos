//function Header(){
  //  return(
    //    <header>
      //<ul className='navbar'>
        //  <h1> Grupo 2</h1>
          //<li><a href="#">Inicio</a></li>
          //<li><a href="#">Productos</a></li>
         // <li><a href="#">Gestor de productos</a></li>
    //      <li><a href="#">Gestor de ventas</a></li>
      //    <li><a href="#">Ventas</a></li>
        //  <li><a href="#">Gestor de usuarios</a></li>  
//       </ul>
  //    </header>
  //  )
//}

//export default Header; 

const Header = ()=>{
  return (
    <header>
    <ul className='navbar'>
        <h1> Grupo 2</h1>
        <li><a href="Login">Acceso</a></li>
        <li><a href="Home">Inicio</a></li>
        <li><a href="Productos">Productos</a></li>
        <li><a href="Gestionpd">Gestor de productos</a></li>
        <li><a href="Ventas">Gestor de ventas</a></li>
        <li><a href="Ventas">Ventas</a></li>
        <li><a href="Usuariorg">Gestor de usuarios</a></li>  
     </ul>
    </header>

  )
}
export default Header