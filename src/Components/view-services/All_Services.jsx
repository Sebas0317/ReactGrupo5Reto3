import React, { useState, useEffect } from "react";
import Service from "./Service";
import {Link} from "react-router-dom";


function All_Services() {
    
  let session = JSON.parse(localStorage.getItem("session"));

  //Obtener Servicios
  let [infoservices, setInfoservices] = useState([]);
  function fetchData() {
    fetch("https://avilap.herokuapp.com/api/servicios")
      .then((response) => response.json())
      .then((data) => {
        setInfoservices(data);
      })
      .catch(()=>{

      });
  }

  useEffect(()=>{
    document.title = 'Sevicios';
    fetchData();
  },[]);

  return (
    <>
      <div className="row services g-3 m-0 py-4 px-5">
        {infoservices.length ?
          infoservices.map((servicio) => {
            return (
              <Service
                imagen={servicio.imagen}
                nombre={servicio.nombre}
                descripcion={servicio.descripcion}
              />
            );
          }):
          <p style={{ fontSize: "30px", fontFamily:"Branding" }}>No hay servicios disponibles</p>
        }
      </div>

      { session && session.estado && session.user.rol == "admin" &&
        <div className="row gestion-ser pt-4">
          <Link type="button" className="btn" to="/gestionservicios">
            Gestionar Servicios
          </Link>
        </div>
      }
    </>
  );
}

export default All_Services;
