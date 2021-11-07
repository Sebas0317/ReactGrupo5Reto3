import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/logo1.png";
import Profile from "../assets/profile.svg";
import carrito from "../assets/carrito.svg";

function Navbar () {
    let history = useHistory();
    let [menu, setMenu] = useState(false);
    let [obj, setObj] = useState(1);

    let logueado = false;
    let session = JSON.parse(localStorage.getItem("session"));
    if (session){
      if (session.estado === true){
        logueado = true;
        
      }
    }

    function abrirMenu(){
      if (menu == true){
        setMenu(false);
      } else {
        setMenu(true);
      }
    }

    function logout(){
      session.estado = false;
      localStorage.setItem("session", JSON.stringify(session));
      setObj("asdaasdasd");
      setMenu(false);
    }

    useEffect(()=>{
      if(menu == true){
        document.querySelector("#cerrarSesion").addEventListener("click", ()=>{
          logout();
        })
        document.querySelector("#btnAdmin").addEventListener("click", ()=>{
          history.push("/admin");
          setMenu(false)
        });
      }
    })

    return (
      <div>
        { menu &&
          <div className="MenuOpcionesCont">
            <div id="btnAdmin" style={{display:(session.user.rol == "admin") ? "flex" : "none"}} className="opcionesNavMenu">Administracion</div>
            <div className="opcionesNavMenu">Historial pedidos/reservas</div>
            <div className="opcionesNavMenu">Reservas</div>
            <div id="cerrarSesion" className="opcionesNavMenu">Cerrar sesion</div>
          </div>
        }
        <input id="btnActualizar" onClick={()=>setObj("ee")} style={{display:"none"}}/>
        <div className="navbar-index">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="nav-link text-light" >
            <Link to="/nosotros">NOSOTROS</Link>
            <Link to="/menu">EL MENU</Link>
            <Link to="/servicios">SERVICIOS</Link>
            <Link to="/reserva">RESERVAS</Link>
            <Link className="pocoMargin" to="/carrito">
              <img className="imgCar" src={carrito} />
            </Link>
            {logueado ?<a className="marginLogin" onClick={()=>abrirMenu()}>{session.user.name} <img src={Profile}/></a> : <Link className="pocoMargin" to="/login">INICIAR SESION</Link>}
          </div>
        </div>
      </div>
    );
}

export default Navbar;
