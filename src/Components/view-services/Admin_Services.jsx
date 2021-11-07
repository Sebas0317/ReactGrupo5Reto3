import React, { useEffect, useState } from "react";
import Cumple from "../assets/serv_cumple.png";
import Aniversarios from "../assets/serv_aniversario.png";
import Infantil from "../assets/serv_infantil.png";
import Propuestas from "../assets/serv_propuesta.png";
import Despedidas from "../assets/serv_despedida.png";
import Amigos from "../assets/serv_amigos.png";
import json from "../json/datos.json";
import ico_basura from "../assets/car-ico-basura.png";
import ico_edit from "../assets/ad-ser-edit.png";
import Modal from "../modal/modal.js";


function Admin_Services() {

  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [servicio, setServicio] = useState("");

  let servicios = [
    Cumple,
    Aniversarios,
    Infantil,
    Propuestas,
    Despedidas,
    Amigos,
  ];

  let infoservices = false;

  if (!localStorage.getItem("servicios")) {
    localStorage.setItem("servicios", JSON.stringify(json.servicios));
    infoservices = json.servicios;
  } else {
    infoservices = JSON.parse(localStorage.getItem("servicios"));
  }

  function eliminarServicios(props) {
    infoservices.splice(props, 1);
    localStorage.setItem("servicios", JSON.stringify(infoservices));
    window.location.reload(false);
  }

  function actualizarServicio() {
    infoservices[servicio].nombre = name;
    infoservices[servicio].descripcion = description;
    localStorage.setItem("servicios", JSON.stringify(infoservices));
    setModal(false);
  }

  function addServicio (){
    infoservices.push({nombre:name, descripcion:description});
    localStorage.setItem("servicios", JSON.stringify(infoservices));
    setModal1(false);
  }

  return (
    <main>
      {modal &&
        <Modal isVisible={true} setVisible={() => setModal(false)}>
          <div className="styleModal">
            <div className="modalservice">
              <input
                type="text"
                className="form-control"
                placeholder={infoservices[servicio].nombre}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombra tu servicio"
              />
              <textarea
                placeholder={infoservices[servicio].descripcion}
                onChange={(e) => setDescription(e.target.value)}
                id=""
                cols="30"
                rows="5"
                className="form-control mt-3"
                placeholder="Describe tu servicio"
              ></textarea>
              <div className="btns">
                <button className="closeModal">Cancelar</button>
                <button className="btnOk-ser" onClick={() => actualizarServicio()}>
                  Actualizar servicio
                </button>
              </div>
            </div>
          </div>
        </Modal>
      }
      {
        modal1 && 
         <Modal isVisible={true} setVisible={() => setModal1(false)}>
          <div className="styleModal">
            <div className="modalservice">
              <input
                type="text"
                className="form-control" 
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombra tu servicio"
              />
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                id=""
                cols="30"
                rows="5"
                className="form-control mt-3" 
                placeholder="Describe tu servicio"
              ></textarea>
              <div className="btns">
                <button className="closeModal">Cancelar</button>
                <button className="btnOk-ser" onClick={() => addServicio()}>
                  Agregar servicio
                </button>
              </div>
            </div>
          </div>
        </Modal>
      }
      <div className="container-fluit pt-4 my-5">
        <div className="row mt-5 mx-0 p-0">
          <div className="col-sm-12 top-serv ps-5 pe-1">
            <p className="title-Adserv">Gestión de servicios</p>
          </div>
        </div>
        <div className="row services g-3 m-0 py-4 px-5">
          {infoservices.map((servicio, index) => {
            return (
              <div className="col-sm-6">
                <div className="row service m-0 p-0">
                  <div className="col-sm-6 p-0 img-serv">
                    <img src={servicios[index]} alt="img-servicio" />
                  </div>
                  <div className="col-sm-6 d-grid gap-2 m-0 p-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <h3
                        className="m-0"
                        id="nombreServicioh3"
                        onChange={(e) => {}}
                      >
                        {servicio.nombre}
                      </h3>
                      <div className="d-flex justify-content-end">
                        <img
                          src={ico_edit}
                          type="button"
                          id="editarBtn"
                          alt="img_edit"
                          width="22"
                          height="22"
                          className="mx-2"
                          onClick={() => {
                            setServicio(index);
                            setModal(true);
                          }}
                        />
                        <img
                          src={ico_basura}
                          type="button"
                          id="eliminarBtn"
                          alt="img_trash"
                          width="22"
                          height="22"
                          onClick={() => eliminarServicios(index)}
                        />
                      </div>
                    </div>
                    <p>{servicio.descripcion}</p>
                  </div>
                </div>
              </div>
            );
          })}
          {infoservices.length == 0 && 
            (
            <p style={{ fontSize: "30px", fontFamily:"Branding" }}>Sin servicios, ¿por qué no agregas uno?</p>
            )
          }
        </div>
        <div className="row gestion-ser p-5">
          <a type="button" onClick={()=>setModal1(true)} className="btn">
            Agregar servicio
          </a>
        </div>
      </div>
    </main>
  );
}

export default Admin_Services;