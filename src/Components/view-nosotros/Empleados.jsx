import React, { useState,useEffect } from "react";
import Loading1 from "../modal/loading1";
import Loading from "../modal/loading";
import Modal from "../modal/modal.js";
import { Link } from "react-router-dom";

export default function Empleados() {

  let [load, setLoad] = useState(false);
  let [load1, setLoad1] = useState(true);

  //Obtener información
  let [listEmpleados, setListEmpleados] = useState([]);
  function fetchData() {
    fetch("https://avilap.herokuapp.com/api/empleados")
      .then((response) => response.json())
      .then((data) => {
        setListEmpleados(data);
        setLoad1(false);
      })
      .catch((err)=>{
        setLoad1(false);
      })
  }

  useEffect(()=>{
    fetchData();
	});

  let session = JSON.parse(localStorage.getItem("session"));

  return (
    <div className="row personal-nos gy-5 px-5 m-0">
      { load1 &&
        <Loading1 isVisible={true}/>
      }
      { load &&
        <Loading isVisible={true}/>
      }
      {listEmpleados.length ?
        listEmpleados.map((empleado)=>{
          return (
            <div className="col-sm-4">
              <img
                className="rounded-circle"
                src={empleado.img}
                alt="img-personal"
              />
              <h3>{empleado.name}</h3>
              <h6>{empleado.cargo}</h6>
            </div>
          )
        }):
        <h2 style={{fontFamily:'Branding',color:'#4f2c38'}}>No hay empleados registrados</h2>
      }
      { session && session.estado && session.user.rol == "admin" &&
        <div className="my-2" >
          <Link 
            type="button" 
            className="btn btn-sm text-white mt-4" 
            to="gestionempleados"
            style={{backgroundColor:'#FF3B04', width:'10rem'}}>
            Gestión de empleados
          </Link>
        </div>
      }
    </div>
  );
}