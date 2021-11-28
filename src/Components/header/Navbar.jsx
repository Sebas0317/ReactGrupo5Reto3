import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/logo1.png";
import Profile from "../assets/profile.svg";
import Arrow from "../assets/arrow.svg";
import carrito from "../assets/carrito.svg";
import carrito1 from "../assets/carrito1.png";

function Navbar () {
    let history = useHistory();
    let [menu, setMenu] = useState(false);
    let [obj, setObj] = useState(1);

    let logueado = false;
    let session = false

    let valSession = localStorage.getItem("session");
    if (valSession) {
      session = JSON.parse(valSession);
      if (session){
        if (session.estado === true){
          logueado = true;
        }
      }
    }
    
    let platos = false
    let valPlatos = localStorage.getItem("pedidos")
    if (valPlatos) {platos = JSON.parse(valPlatos)}

    function toggleMenu(){
      if(menu == true){
        setMenu(false);
      } else {
        setMenu(true);
      }
    }


    function logout(){
      session.estado = false;
      localStorage.setItem("session", JSON.stringify(session));
      obj++;
      setObj(obj);
      history.push("/")
      setMenu(false);
    }

    useEffect(()=>{
      if(platos.length > 0){
        document.querySelector(".imgCar").src=carrito1;
      } else {
        document.querySelector(".imgCar").src=carrito;
      }

    if(session){
      if (session.estado === true){
         if(menu === true){
           document.querySelector("#arrowMenu").style.transform="rotate(0deg)";
        } else {
          document.querySelector("#arrowMenu").style.transform="rotate(90deg)";
        }
      }
    }

     if(menu == true){
        document.querySelector("#btnHistory").addEventListener("click", ()=>{
          history.push("/reservaciones");
          setMenu(false);
        });

        document.querySelector("#cerrarSesion").addEventListener("click", ()=>{
          logout();
          setMenu(false);
        })
        document.querySelector("#btnAdmin").addEventListener("click", ()=>{
          history.push("/admin");
          setMenu(false);
        });
        document.querySelector("#fondoCerrarMenu").addEventListener("click", ()=>{
          setMenu(false)
        });
      }
    })

    return (
      <div>
        { menu &&
          <div>
            <div id="fondoCerrarMenu"></div>
            <div className="MenuOpcionesCont">
              <div className="opcionPerfilMenu">
                <img style={{height:"10vh"}} src={Profile}/>
                <div>
                  <h3 style={{margin:"0px", fontSize:"23px", color:"#430202"}}>{session && session.user.name}</h3>
                  <p  style={{margin:"0px", fontSize:"15px", color:"#929292"}}>{session && session.user.email}</p>
                </div>
              </div>
              <div id="btnAdmin" style={{display:(session && session.user.rol == "admin") ? "flex" : "none"}} className="opcionesNavMenu">Administración</div>
              <div id="btnHistory" className="opcionesNavMenu">Historial de reservas</div>
              <div id="cerrarSesion" className="opcionesNavMenu">Cerrar sesión</div>
            </div>
          </div>
        }
        <input id="btnActualizar" onClick={()=>{obj++; setObj(obj)}} style={{display:"none"}}/>
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
           <Link to="/reserva" >RESERVAS</Link>
            <Link className="pocoMargin" to="/carrito">
              <img className="imgCar" src={carrito} />
            </Link>
            <b style={{margin:"0px", cursor:"pointer"}}>
              
              {logueado ? 
                <b onClick={()=>toggleMenu()}>
                  {session.user.name}
                  <img id="arrowMenu" src={Arrow}/>
                </b>
            : 
                <Link className="pocoMargin" to="/login">INICIAR SESION</Link>
            }
            </b>

          </div>
        </div>
      </div>
    );
}

export default Navbar;
