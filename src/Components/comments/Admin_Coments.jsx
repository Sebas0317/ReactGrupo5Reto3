import React, { useEffect, useState, } from "react";
import { useHistory } from "react-router";
import Modal from "../modal/modal.js";
import ico_basura from "../assets/car-ico-basura.svg";

//agregar funcion de Admin_Coments con el modal

function Admin_Coments() {

  const [modal, setModal] = useState(false);
  const [idComentario, setIdComentario] = useState(0)
  const [name, setName] = useState("");
  let [obj, setObj] = useState(0);

  //Obtener comentarios
  let [listComentarios, setListComentarios] = useState([]);
  function fetchData() {
    fetch("https://avilap.herokuapp.com/api/comentarios")
      .then((response) => response.json())
      .then((data) => {
        setListComentarios(data);
      })
      .catch((err)=>{
        console.log('Bien')
      })
  }

  useEffect(()=>{
    document.title = 'Gestión de comentarios';
    fetchData();
  });


  //Eliminar comentario
  function eliminarComentario(id) {
    fetch("https://avilap.herokuapp.com/api/comentarios/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setModal(false);
      });
  }

  let history = useHistory();
  let session = JSON.parse(localStorage.getItem("session"));
  if (session.user.rol != "admin" || session.estado === false) {
    history.push("/");
  }
  
  return (
    <main>
      {modal && (
        <Modal isVisible={true} setVisible={() => setModal(false)}>
          <div className="styleModal">
            <h3 className="text-center">Eliminar comentario</h3>
            <h5 className="mt-2 text-center">
            ¿Desea eliminar el comentario de {name}?
            </h5>
            <div className="btns">
              <button className="closeModal">CANCELAR</button>
              <button
                onClick={() => eliminarComentario(idComentario)}
                className="btnOk"
              >
                Ok
              </button>
            </div>
          </div>
        </Modal>
      )}

      <div className="container-fluid pt-5 mb-5">
        <div className="row mt-5 mx-0 p-0">
          <div className="col-sm-12 top-serv ps-5 pe-1">
            <p className="title-Adserv">Gestión de comentarios</p>
          </div>
        </div>
        <div className="row services g-3 m-0 px-5">
          {listComentarios.map((comentarios) => {
            return (
              <div className="col-sm-6 d-flex mb-2 item-Ad">
                <div className="context-Ad p-3" style={{backgroundColor:'#e6e0e2'}}>
                  <div className="d-flex align-items-center justify-content-between">
                    <h2 className="titleItem">{comentarios.usuario}</h2>
                    <div className="d-flex justify-content-end">
                      <img
                        src={ico_basura}
                        type="button"
                        id="eliminarBtn"
                        alt="img_trash"
                        width="25"
                        height="25"
                        onClick={()=>{
                          setName(comentarios.usuario);
                          setIdComentario(comentarios.id);
                          setModal(true)
                        }}
                      />
                    </div>
                  </div>
                  <p>{comentarios.comentario}</p>
                  <p>{comentarios.fecha}</p>
                </div>
              </div>
            );
          })}
          {listComentarios.length == 0 && (
            <p style={{ fontSize: "30px", fontFamily: "Branding"}}>
              Sin comentarios
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

export default Admin_Coments;