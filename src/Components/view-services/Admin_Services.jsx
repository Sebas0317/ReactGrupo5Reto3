import React, { useEffect, useState } from "react";
import ico_basura from "../assets/car-ico-basura.svg";
import ico_edit from "../assets/ad-ser-edit.svg";
import imgDefault from "../assets/serv_amigos.png";
import Modal from "../modal/modal.js";


function Admin_Services() {

  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  let [idServicio, setIdServicio] = useState(0)
  let [name, setName] = useState("")
  let [description, setDescriServ] = useState("")
  let [imgServicio, setImgServicio] = useState("")
  let [obj, setObj] = useState("aaa");

  //Obtener Servicios
  let [infoservices, setInfoservices] = useState([]);
  function fetchData() {
    fetch("https://avilap.herokuapp.com/api/servicios")
      .then((response) => response.json())
      .then((data) => {
        setInfoservices(data);
      });
  }

  useEffect(()=>{
    document.title = 'Sevicios';
    fetchData();
  });

  //Eliminar servicio
  function eliminarServicios(id) {
    fetch("https://avilap.herokuapp.com/api/servicios/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setModal2(false);
      });

    // if(obj == "aaa"){
    //   setObj("eee");
    // } else if(obj == "eee"){
    //   setObj("ooo");
    // } else if (obj == "ooo"){
    //   setObj("aaa");
    // }
  }

  //Actualizar
  function actualizarServicio(id) {
    let datos = {
      id: id,
      nombre: name,
      descripcion: description,
      imagen: imgServicio=="" ? imgDefault : imgServicio
    };

    fetch("https://avilap.herokuapp.com/api/servicios", {
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
        setModal(false);
      });
  }

  //Agregar Servicio
  function addServicio (){
    let datos = {
      nombre: name,
      descripcion: description,
      imagen: imgServicio=="" ? imgDefault : imgServicio
    };

    fetch("https://avilap.herokuapp.com/api/servicios", {
      method: "POST",
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
        setModal1(false);
      });
  }

  function actDatos(i,n,d,f){
    setIdServicio(i)
    setName(n)
    setDescriServ(d)
    setImgServicio(f)
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
                value={name}
                onChange={(e) => {setName(e.target.value)}}
              />
              <input
                type="text"
                className="form-control mt-3"
                value={imgServicio}
                onChange={(e) => {setImgServicio(e.target.value)}}
              />
              <textarea
                id=""
                cols="30"
                rows="5"
                className="form-control mt-3"
                value={description}
                onChange={(e) => {setDescriServ(e.target.value)}}
              ></textarea>
              <div className="btns">
                <button className="closeModal">Cancelar</button>
                <button className="btnOk-ser" onClick={() => actualizarServicio(idServicio)}>
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
                onChange={(e) => {setName(e.target.value)}}
                placeholder="Nombra tu servicio"
              />
              <input
                type="text"
                className="form-control mt-3"
                placeholder="Link de imagen"
                onChange={(e) => {setImgServicio(e.target.value)}}
              />
              <textarea
                cols="30"
                rows="5"
                className="form-control mt-3" 
                onChange={(e) => {setDescriServ(e.target.value)}}
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
      {
        modal2 &&
        <Modal isVisible={true} setVisible={()=>setModal2(false)}>
          <div className="styleModal">
            <h3 className="text-center">
              Eliminar servicio
            </h3>
            <h5 className="mt-2 text-center">
              ¿Desea eliminar el servicio {name}?
            </h5>
            <div className="btns">
              <button className="closeModal">CANCELAR</button>
              <button onClick={()=>eliminarServicios(idServicio)} className="btnOk">Ok</button>
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
          {infoservices.map((servicio) => {
            return (
              <div className="col-sm-6">
                <div className="row service m-0 p-0">
                  <div className="col-sm-6 p-0 img-serv">
                    <img src={servicio.imagen} alt="img-servicio" />
                  </div>
                  <div className="col-sm-6 d-grid gap-2 m-0 p-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <h3 className="m-0" id="nombreServicioh3">
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
                          onClick={()=>{
                            actDatos(servicio.id, servicio.nombre, servicio.descripcion, servicio.imagen);
                            setModal(true)
                          }}
                        />
                        <img
                          src={ico_basura}
                          type="button"
                          id="eliminarBtn"
                          alt="img_trash"
                          width="22"
                          height="22"
                          onClick={()=>{
                            actDatos(servicio.id, servicio.nombre);
                            setModal2(true)}
                          }
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
            <p style={{ fontSize: "30px", fontFamily:"Branding" }}>
              Sin servicios, ¿por qué no agregas uno?
            </p>
            )
          }
        </div>
        <div className="row gestion-ser pt-4">
          <a type="button" onClick={()=>setModal1(true)} className="btn">
            Agregar servicio
          </a>
        </div>
      </div>
    </main>
  );
}

export default Admin_Services;