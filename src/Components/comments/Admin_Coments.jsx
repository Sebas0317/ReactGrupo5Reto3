import React, { useEffect, useState } from "react";
import json from "../json/datos.json";
import cliente1 from "../assets/cliente1.png";
import cliente2 from "../assets/cliente2.png";
import cliente3 from "../assets/cliente3.png";
import Modal from "../modal/modal.js";
import ico_basura from "../assets/car-ico-basura.svg";
import ico_edit from "../assets/ad-ser-edit.svg";

//agregar funcion de Admin_Coments con el modal

function Admin_Coments() {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  let [obj, setObj] = useState("aaa");

  let name = false;
  let description = false;

  const [comentario, setComentario] = useState("");

  let infocomentaries = false;

  //localStorage
  if (!localStorage.getItem("comentarios")) {
    localStorage.setItem("comentarios", JSON.stringify(json.comentarios));
    infocomentaries = json.comentarios;
  } else {
    infocomentaries = JSON.parse(localStorage.getItem("comentarios"));
  }

  function eliminarComentarios(props) {
    infocomentaries.splice(props, 1);
    localStorage.setItem("comentarios", JSON.stringify(infocomentaries));
    if (obj === "aaa") {
      setObj("eee");
    } else if (obj === "eee") {
      setObj("ooo");
    } else if (obj === "ooo") {
      setObj("aaa");
    }
    setModal2(false);
  }

  function actualizarComentario() {
    infocomentaries[comentario].usuario = name;
    infocomentaries[comentario].comentarioText = description;
    localStorage.setItem("comentarios", JSON.stringify(infocomentaries));
    setModal(false);
  }

  function addComentario() {
    infocomentaries.push({usuario: name, comentarioText:description });
    localStorage.setItem("comentarios", JSON.stringify(infocomentaries));
    setModal1(false);
  }

  return (
    <main>
      {modal && (
        <Modal isVisible={true} setVisible={() => setModal(false)}>
          <div className="styleModal">
            <div className="modalcomentaries">
              <input
                type="text"
                className="form-control"
                placeholder={comentario && infocomentaries[comentario].usuario}
                onChange={(e) => {
                  name = e.target.value;
                }}
              />
              <textarea
                placeholder={comentario && infocomentaries[comentario].comentarioText}
                onChange={(e) => {
                  description = e.target.value;
                }}
                id=""
                cols="30"
                rows="5"
                className="form-control mt-3"
              ></textarea>
              <div className="btns">
                <button className="closeModal">Cancelar</button>
                <button
                  className="btnOk-ser"
                  onClick={() => actualizarComentario()}
                >
                  Actualizar comentario
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
      {modal1 && (
        <Modal isVisible={true} setVisible={() => setModal1(false)}>
          <div className="styleModal">
            <div className="modalcomentaries">
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  name = e.target.value;
                }}
                placeholder="Quien Comenta"
              />
              <textarea
                onChange={(e) => {
                  description = e.target.value;
                }}
                id=""
                cols="30"
                rows="5"
                className="form-control mt-3"
                placeholder="Describe tu comentario"
              ></textarea>
              <div className="btns">
                <button className="closeModal">Cancelar</button>
                <button className="btnOk-ser" onClick={() => addComentario()}>
                  Agregar servicio
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
      {modal2 && (
        <Modal isVisible={true} setVisible={() => setModal2(false)}>
          <div className="styleModal">
            <h3 className="text-center">Eliminar comentario</h3>
            <h5 className="mt-2 text-center">
            ¿Desea eliminar el servicio {infocomentaries[comentario]}?
            </h5>
            <div className="btns">
              <button className="closeModal">CANCELAR</button>
              <button
                onClick={() => eliminarComentarios(comentario)}
                className="btnOk"
              >
                Ok
              </button>
            </div>
          </div>
        </Modal>
      )}

      <div className="container-fluit pt-4 my-5">
        <div className="row mt-5 mx-0 p-0">
          <div className="col-sm-12 top-serv ps-5 pe-1">
            <p className="title-Adserv">Gestión de comentarios</p>
          </div>
        </div>
        <div className="row services g-3 m-0 py-4 px-5">
          {json.comentarios.map((comentarios, index) => {
            return (
              <div className="col-sm-6 d-flex mb-4 item-Ad">
                <div className="context-Ad">
                  <div className="d-flex align-items-center justify-content-between">
                    <h2 className="titleItem">{comentarios.usuario}</h2>
                    <div className="d-flex justify-content-end">
                      <img
                        src={ico_edit}
                        type="button"
                        id="editarBtn"
                        alt="img_edit"
                        width="25"
                        height="25"
                        className="mx-2"
                        onClick={() => {
                          setComentario(index);
                          setModal(true);
                        }}
                      />
                      <img
                        src={ico_basura}
                        type="button"
                        id="eliminarBtn"
                        alt="img_trash"
                        width="25"
                        height="25"
                        onClick={()=>{setComentario(index);setModal2(true)}}
                      />
                    </div>
                  </div>
                  <p>{comentarios.comentarioText}</p>
                </div>
                
              </div>
            );
          })}
          {infocomentaries.length == 0 && (
            <p style={{ fontSize: "30px", fontFamily: "Branding" }}>
              Sin Comentarios, ¿por qué no agregas uno?
            </p>
          )}
        </div>
        <div className="row gestion-com p-5">
          <a type="button" onClick={() => setModal(true)} className="btn">
            Agregar comentarios
          </a>
        </div>
      </div>
    </main>
  );
}

export default Admin_Coments;
