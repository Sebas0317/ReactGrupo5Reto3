import React from "react";
import Cumple from "../assets/serv_cumple.png"
import Aniversarios from "../assets/serv_aniversario.png"
import Infantil from "../assets/serv_infantil.png"
import Propuestas from "../assets/serv_propuesta.png"
import Despedidas from "../assets/serv_despedida.png"
import Amigos from "../assets/serv_amigos.png"
import json from "../json/datos.json"
import ico_basura from "../assets/car-ico-basura.png"
import ico_edit from "../assets/ad-ser-edit.png"

class Admin_Services extends React.Component{
  render(){
    let servicios = [Cumple, Aniversarios, Infantil, Propuestas, Despedidas, Amigos]
    return(
      <main>
        <div className="container-fluit pt-4 my-5">
          <div className="row mt-5 mx-0 p-0">
            <div className="col-sm-12 top-serv ps-5 pe-1">
              <p className="title-Adserv">
                Gestión de servicios
              </p>
            </div>
          </div>
          <div className="row services g-3 m-0 py-4 px-5">
            {json.servicios.map((servicio, index)=>{
              return (
                <div className="col-sm-6">
                  <div className="row service m-0 p-0">
                    <div className="col-sm-6 p-0 img-serv">
                      <img src={servicios[index]} alt="img-servicio" />
                    </div>
                    <div className="col-sm-6 d-grid gap-2 m-0 p-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <h3 className="m-0">{servicio.nombre}</h3> 
                        <div className="d-flex justify-content-end">
                          <img 
                            src={ico_edit}
                            type="button" 
                            alt="img_edit" 
                            width="22" 
                            height="22" 
                            className="mx-2"
                          />
                          <img 
                            src={ico_basura}
                            type="button" 
                            alt="img_trash" 
                            width="22" 
                            height="22" 
                          />
                        </div>
                      </div>
                      <p>{servicio.descripcion}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="row gestion-ser p-5">
            <a type="button" className="btn">
              Agregar servicio
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default Admin_Services;