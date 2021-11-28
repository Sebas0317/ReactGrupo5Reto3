import React, { Component, useEffect } from "react";
import "../styles/nosotros.css";
import Personal1 from "../assets/cliente1.png";
import Personal2 from "../assets/cliente2.png";
import Personal3 from "../assets/cliente3.png";
import Personal4 from "../assets/cliente4.png";
import ico_edit from "../assets/ad-ser-edit.svg";
import Modal from "../modal/modal.js";
import { useState } from "react";
import "../styles/admin.css";
import imgDefault from "../assets/menu_pl1.png";
let session = JSON.parse(localStorage.getItem("session"));

export default function NosotrosC() {
  let [modal, setModal] = useState(false);
  let [descRest, setDescRest] = useState("");
  let [title, setTitle] = useState("");
  let [url, setUrl] = useState("");
  let [history, setHistory] = useState([]);
  let [idEdit, setIdEdit] = useState(null);
  function fetchData() {
    fetch("https://avilap.herokuapp.com/api/nosotros")
      .then((response) => response.json())
      .then((data) => {
        setHistory(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  //Editar history
  function editHistory() {
    console.log({idEdit,title,descRest,url})
    let datos = {
      id: idEdit,
      titulo: title,
      descripcion: descRest,
      img: url == "" ? imgDefault : null,
    };

    fetch("https://avilap.herokuapp.com/api/nosotros", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Bien:" + response.text());
        } else {
          console.log(response.status);
        }
      })
      .then((data) => {
        setModal(false);
      });
  }

  return (
    <div className="contenedorNos">
      {modal && (
        <Modal isVisible={true} setVisible={() => setModal(false)}>
          <div className="styleModal">
            <div className="modalcomentaries">
              <input
                type="text"
                className="form-control"
                placeholder="Titulo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                className="form-control mt-3"
                placeholder="url image"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <textarea
                id=""
                cols="30"
                rows="5"
                className="form-control mt-3"
                placeholder="Escribe tu comentario"
                value={descRest}
                onChange={(e) => setDescRest(e.target.value)}
              ></textarea>
              <div className="btns">
                <button className="closeModal">Cancelar</button>
                <button className="btnOk-ser" onClick={()=>editHistory()}>Agregar historia</button>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <div className="container-fluid p-0">
        <div className="row my-5 mx-0">
          <div className="col-sm-6 p-0">
            <div className="photo-nos float-end" />
          </div>
          <div className="col-sm-6 history-nos p-0 m-0">
            <div className="top-nos mt-5 ms-3 me-1">
              <p className="lh-1">
                {history.length ? (
                  history.map((element) => {
                    return (
                      <div id={element.id}>
                        <span className="title2-nos">
                          {element.titulo.split(" ")[0]}
                        </span>
                        <br />
                        <span className="title-nos">Historia</span>
                      </div>
                    );
                  })
                ) : (
                  <h1>No title</h1>
                )}
              </p>
            </div>
            {session && session.estado && session.user.rol == "admin" && (
              <div style={{ marginLeft: "15px", marginBottom: "5px" }}>
                {history.length ? (
                  <button style={{ all: "unset", cursor: "pointer" }}>
                    {history.map((element)=>{
                      return(
                        <img
                        src={ico_edit}
                        id="editarBtn"
                        alt="img_edit"
                        width="25"
                        height="25"
                        onClick={() => {
                          setIdEdit(element.id)
                          setModal(true);
                        }}
                      />
                      )
                    })}

                  </button>
                ) : (
                  <h1>Theres nothing</h1>
                )}
              </div>
            )}

            {history.length ? (
              history.map((element) => {
                return <p className="text-nos mx-4">{element.descripcion}</p>;
              })
            ) : (
              <h2>No hay platos</h2>
            )}
          </div>
        </div>
        <div className="row personal-nos gy-5 px-5 m-0">
          <div className="col-sm-4">
            <img className="rounded-circle" src={Personal1} alt="personal1" />
            <h3>Pedro Romero</h3>
            <h6>Chef Ejecutivo</h6>
          </div>
          <div className="col-sm-4">
            <img className="rounded-circle" src={Personal4} alt="personal2" />
            <h3>Brenda Mendoza</h3>
            <h6>Chef Pastelera</h6>
          </div>
          <div className="col-sm-4">
            <img className="rounded-circle" src={Personal3} alt="personal3" />
            <h3>Laura Acosta</h3>
            <h6>Administradora</h6>
          </div>
          <div className="col-sm-4">
            <img className="rounded-circle" src={Personal3} alt="personal4" />
            <h3>María Márquez</h3>
            <h6>Auxiliar de cocina</h6>
          </div>
          <div className="col-sm-4">
            <img className="rounded-circle" src={Personal2} alt="personal5" />
            <h3>Juan Pérez</h3>
            <h6>Mesero</h6>
          </div>
          <div className="col-sm-4">
            <img className="rounded-circle" src={Personal4} alt="personal6" />
            <h3>María Torres</h3>
            <h6>Cajera</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
