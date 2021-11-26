import React, { useEffect, useState, } from "react";
import { Link } from "react-router-dom";
import Comentario from "./Comment";
import Modal from "../modal/modal.js";
import Loading1 from "../modal/loading1";
import Loading from "../modal/loading";


function All_comments() {
    
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [comentario, setComentario] = useState("");
  const [load, setLoad] = useState(false);
  const [load1, setLoad1] = useState(false);

  //Obtener comentarios
  let [listComentarios, setListComentarios] = useState([]);
  function fetchData() {
    fetch("https://avilap.herokuapp.com/api/comentarios")
      .then((response) => response.json())
      .then((data) => {
        setListComentarios(data);
        setLoad1(false);
      })
      .catch((err)=>{
        setLoad1(false);
      })
  }

  useEffect(()=>{
    setLoad1(true);
    fetchData();
  },[]);

  //Agregar comentario
  function addComentario() {
    setLoad(true);
    let datos = {
      usuario: name,
      comentario: comentario,
      fecha: new Date().toLocaleDateString()
    };

    fetch("https://avilap.herokuapp.com/api/comentarios", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(datos)
    })
      .then(response => {
        if (response.ok){
          console.log('Bien:' + response.text());
        }  
        else{
          console.log(response.status)
        }
      })
      .then(data => {
        setLoad(false);
        setModal(false);
        fetchData()
      });
  }
  
  let session = JSON.parse(localStorage.getItem("session"));

  return (
    <div className="row testimony m-0">
      {modal && (
        <Modal isVisible={true} setVisible={() => setModal(false)}>
          <div className="styleModal">
            <div className="modalcomentaries">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                placeholder="Quién comenta"
              />
              <textarea
                onChange={(e) => setComentario(e.target.value)}
                id=""
                cols="30"
                rows="5"
                className="form-control mt-3"
                placeholder="Escribe tu comentario"
              ></textarea>
              <div className="btns">
                <button className="closeModal">Cancelar</button>
                <button className="btnOk-ser" onClick={() => addComentario()}>
                  Agregar comentario
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {listComentarios.length > 0 ?
        <div id="controls" className="carousel carousel-dark slide" data-bs-ride="carousel">
          { load1 &&
            <Loading1 isVisible={true}/>
          }
          { load &&
            <Loading isVisible={true}/>
          }
          <div className="carousel-inner">
            {listComentarios.map((comentario, index) => {
              return (
                <Comentario
                  act={index == 0 ? "carousel-item active" : "carousel-item"}
                  user={comentario.usuario}
                  comentario={comentario.comentario}
                  fecha={comentario.fecha}
                />
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#controls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#controls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      :
        <p style={{ fontSize: "30px", fontFamily: "Branding", textAlign:'center', marginTop:'20px'}}>
          Sin comentarios, ¿por qué no agregas uno?
        </p>
      }

      <div className="row gestion-ser pb-5">
        <div>
          <a type="button" onClick={() => setModal(true)} className="btn mx-2">
            Agregar comentario
          </a>

          { session && session.estado && session.user.rol == "admin" &&
            <Link
              type="button"
              className="btn mx-2"
              to="/gestioncomentarios"
            >
              Gestionar Comentarios
            </Link>
          }
        </div>
      </div>
    </div>
  );
}

export default All_comments;
