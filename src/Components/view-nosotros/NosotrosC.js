import React, { useState,useEffect } from "react";
import Loading1 from "../modal/loading1";
import Loading from "../modal/loading";
import Modal from "../modal/modal.js";
import imgDefault from "../assets/nosotros.png"

export default function NosotrosC() {

  let [modal1, setModal1] = useState(false)
  let [load, setLoad] = useState(false);
  let [load1, setLoad1] = useState(true);
  let [id, setId] = useState(0)
  let [descripcion, setDescripcion] = useState("")
  let [img, setImg] = useState("")

  //Obtener información
  let [info, setInfo] = useState([]);
  function fetchData() {
    fetch("https://avilap.herokuapp.com/api/nosotros")
      .then((response) => response.json())
      .then((data) => {
        setInfo(data[0]);
        setLoad1(false);
      })
      .catch((err)=>{
        setLoad1(false);
      })
  }

  useEffect(()=>{
    fetchData();
	});

  //Editar información
  function editarInfo(id) {
    setLoad(true);
    let datos = {
      id: id,
      titulo: info.titulo,
      descripcion: descripcion,
      img: img.length==0 ? imgDefault : img
    };

    fetch("https://avilap.herokuapp.com/api/nosotros", {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(datos)
    })
      .then(response => {
        if (response.ok)
          console.log('Bien:' + response.text())
        else
          console.log(response.status)
      })
      .then(data => {
        setLoad(false);
        setModal1(false);
      });
  }

  let session = JSON.parse(localStorage.getItem("session"));

  return (
    <div className="row my-5 mx-0">
      {modal1 &&
        <Modal isVisible={true} setVisible={() => setModal1(false)}>
          <div className="styleModal">
            <div className="modalservice">
              <input
                type="text"
                className="form-control mt-3"
                value={img}
                onChange={(e)=>setImg(e.target.value)}
              />
              <textarea
                cols="50"
                rows="5"
                className="form-control mt-3"
                value={descripcion}
                onChange={(e)=>setDescripcion(e.target.value)}
              ></textarea>
              <div className="btns">
                <button className="closeModal">Cancelar</button>
                <button className="btnOk-ser" onClick={() => editarInfo(id)}>
                  Actualizar
                </button>
              </div>
            </div>
          </div>
        </Modal>
      }
      <div className="col-sm-6 p-0">
        { load1 &&
          <Loading1 isVisible={true} />
        }
        { load &&
          <Loading isVisible={true} />
        }
        <div className="photo-nos float-end" style={{backgroundImage:`url(${info.img})`}}/>
      </div>
      <div className="col-sm-6 history-nos p-0 m-0">
        <div className="top-nos mt-5 ms-3 me-1">
          <p className="lh-1">
            <span className="title2-nos">NUESTRA</span>
            <br />
            <span className="title-nos">Historia</span>
          </p>
        </div>
        <div>
          { load1 &&
            <Loading1 isVisible={true} />
          }
          { load &&
            <Loading isVisible={true} />
          }
          <p className="text-nos mx-4">
            {info.descripcion}
          </p>
        </div>

        { session && session.estado && session.user.rol == "admin" &&
          <button 
            className="btn btn-sm text-white mx-4" 
            style={{backgroundColor:'#FF3B04'}}
            onClick={()=>{
              setId(info.id); 
              setDescripcion(info.descripcion); 
              setImg(info.img);
              setModal1(true)
            }}>
            Editar información
          </button>
        }
        
      </div>
    </div>
  );
}