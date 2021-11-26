import React, { Component, useState, useEffect } from "react";
import "../styles/admin.css";
import ico_basura from "../assets/car-ico-basura.svg";
import ico_edit from "../assets/ad-ser-edit.svg";
import Modal from "../modal/modal.js";
import imgDefault from "../assets/menu_pl1.png";
import Loading1 from "../modal/loading1";
import Loading from "../modal/loading";

function Admin_Menu(){

  let [modal, setModal] = useState(false)
  let [modal1, setModal1] = useState(false)
  let [modal2, setModal2] = useState(false)
  let [idPlato, setIdPlato] = useState(0)
  let [nomPlato, setNomPlato] = useState("")
  let [descriPlato, setDescriPlato] = useState("")
  let [precioPlato, setPrecioPlato] = useState(0)
  let [imgPlato, setImgPlato] = useState("");
  let [imgPlato1, setImgPlato1] = useState("");
  let [obj, setObj] = useState(0);
  let [load, setLoad] = useState(false);
  let [load1, setLoad1] = useState(false);


  //Obtener Platos
  let [listPlatos, setListPlatos] = useState([]);
  function fetchData() {
    fetch("https://avilap.herokuapp.com/api/platos")
      .then((response) => response.json())
      .then((data) => {
        setListPlatos(data);
        setLoad1(false);
      })
      .catch((err)=>{
        setLoad1(false);
      })
  }

 
  useEffect(()=>{
    document.title = 'Menú';
    setLoad1(true);
    fetchData();
	},[obj]);

  useEffect(()=>{
    document.title = 'Gestión menú';
  },[])
  
  //Eliminar plato
  function eliminar(id) {
    setLoad(true);
    fetch("https://avilap.herokuapp.com/api/platos/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setLoad(false);
        setModal2(false);
        obj++;
        setObj(obj);
      });
  }

  //Editar plato
  function editPlato(id) {
    setLoad(true);
    let datos = {
      id: id,
      nombre: nomPlato,
      descripcion: descriPlato,
      precio: precioPlato.toString(),
      imagen: imgPlato1 =="" ? imgDefault : imgPlato
    };

    fetch("https://avilap.herokuapp.com/api/platos", {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(datos)
    })
      .then(response => {
        if (response.ok){
          console.log('Bien:' + response.text())
        }
        else{
          console.log(response.status)
        }
      })
      .then(data => {
        setLoad(false);
        setImgPlato1("");
        setModal(false);
        obj++;
        setObj(obj);
      });
  }

  function addPlato() {
    setLoad(true);
    let datos = {
      nombre: nomPlato,
      descripcion: descriPlato,
      precio: precioPlato.toString(),
      imagen: imgPlato1 =="" ? imgDefault : imgPlato
    };

    fetch("https://avilap.herokuapp.com/api/platos", {
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
        setImgPlato1("");
        setModal1(false);
        obj++;
        setObj(obj);
      });
  }

  function actDatos(i,n,d,p,f){
    setIdPlato(i)
    setNomPlato(n)
    setDescriPlato(d)
    setPrecioPlato(p)
    setImgPlato(f)
  }
  
  return (
    <div className="contenedorPlatos w-100">
      {modal &&
        <Modal isVisible={true} setVisible={() => setModal(false)}>
          <div className="styleModal">
            <div className="modalservice">
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control me-2"
                  value={nomPlato}
                  onChange={(e)=>setNomPlato(e.target.value)}
                />
                <input
                  type="number"
                  className="form-control ms-2"
                  value={precioPlato}
                  onChange={(e)=>setPrecioPlato(e.target.value)}
                />
              </div>
              <input
                type="text"
                className="form-control mt-3"
                value={imgPlato}
                onChange={(e)=>setImgPlato(e.target.value)}
              />
              <textarea
                cols="30"
                rows="5"
                className="form-control mt-3"
                value={descriPlato}
                onChange={(e)=>setDescriPlato(e.target.value)}
              ></textarea>
              <div className="btns">
                <button className="closeModal">Cancelar</button>
                <button className="btnOk-ser" onClick={() => editPlato(idPlato)}>
                  Actualizar menú
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
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Nombre de menú"
                  onChange={(e)=>setNomPlato(e.target.value)}
                />
                <input
                  type="number"
                  className="form-control ms-2"
                  placeholder="Precio de menú"
                  onChange={(e)=>setPrecioPlato(e.target.value)}
                />
              </div>
              <input
                type="text"
                className="form-control mt-3"
                placeholder="Link de imagen"
                onChange={(e)=>setImgPlato1(e.target.value)}
              />
              <textarea
                cols="30"
                rows="5"
                className="form-control mt-3"
                placeholder="Descripcion de menú"
                onChange={(e)=>setDescriPlato(e.target.value)}
              ></textarea>
              <div className="btns">
                <button className="closeModal">Cancelar</button>
                <button className="btnOk-ser" onClick={()=>addPlato()}>
                  Agregar menú
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
              Eliminar menú
            </h3>
            <h5 className="mt-2 text-center">
              ¿Desea eliminar el menú {nomPlato}?
            </h5>
            <div className="btns">
              <button className="closeModal">CANCELAR</button>
              <button onClick={()=>eliminar(idPlato)} className="btnOk">Ok</button>
            </div>
          </div>
        </Modal>
      }
      <p className="title-AdMenu">Gestión de menús</p>
      <div className="row m-0">
       { load1 &&
          <Loading1 isVisible={true}/>
       }
       { load &&
          <Loading isVisible={true}/>
       }
        {listPlatos.length ? 
          listPlatos.map((plato)=>{
            return (
              <div className="col-sm-6 d-flex mb-4 item-Ad">
                <img className="w-50 h-100" src={plato.imagen} alt="img-plato"/>
                <div className="descripcion-Ad">
                  <div className="d-flex align-items-center justify-content-between">
                    <h2 className="titleItem">{plato.nombre}</h2>
                    <div className="d-flex justify-content-end">
                      <img
                        src={ico_edit}
                        type="button"
                        id="editarBtn"
                        alt="img_edit"
                        width="25"
                        height="25"
                        className="mx-2"
                        onClick={()=>{
                          actDatos(plato.id, plato.nombre, plato.descripcion, plato.precio, plato.imagen);
                          setModal(true)
                        }}
                      />
                      <img
                        src={ico_basura}
                        type="button"
                        id="eliminarBtn"
                        alt="img_trash"
                        width="25"
                        height="25"
                        onClick={()=>{
                          actDatos(plato.id, plato.nombre);
                          setModal2(true)
                        }}
                      />
                    </div>
                  </div>
                  <p>
                    {plato.descripcion}
                  </p>
                  <h3 className="titlePrecio"> $ {Intl.NumberFormat().format(plato.precio)}</h3>
                </div>
              </div>
            )
          }):
          <h2 className="text">No hay menús disponibles</h2>
        }
      </div>
      <div className="row gestion-menu pt-4">
        <a type="button" className="btn" onClick={()=>setModal1(true)}>
          Agregar menú
        </a>
      </div>
    </div>
  );
}

export default Admin_Menu;
