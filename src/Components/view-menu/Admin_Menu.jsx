import React, { Component, useState } from "react";
import "../styles/admin.css";
import ico_basura from "../assets/car-ico-basura.png";
import ico_edit from "../assets/ad-ser-edit.png";
import Modal from "../modal/modal.js";

//Imagenes del menu
import plato1 from "../assets/menu_pl1.png"
import plato2 from "../assets/menu_pl2.jpg"
import plato3 from "../assets/menu_pl3.png"
import plato4 from "../assets/menu_pl4.png"
import plato5 from "../assets/menu_pl5.png"
import plato6 from "../assets/menu_pl6.png"
import plato7 from "../assets/menu_pl7.png"
import plato8 from "../assets/menu_pl8.jpeg"
import plato9 from "../assets/menu_pl9.jpeg"
import plato10 from "../assets/menu_pl10.jpg"
import plato11 from "../assets/menu_pl11.jpeg"
import plato12 from "../assets/menu_pl12.jpg"

function Admin_Menu(){
  
  let platos = [
    plato1, plato2, plato3, 
    plato4, plato5, plato6, 
    plato7, plato8, plato9, 
    plato10, plato11, plato12
  ];
  let listPlatos = []
  let val = localStorage.getItem('platos')
  if (val) { listPlatos = JSON.parse(val) }

  let [modal, setModal] = useState(false)
  let [modal1, setModal1] = useState(false)
  let [modal2, setModal2] = useState(false)
  let [idPlato, setIdPlato] = useState(0)
  let [nomPlato, setNomPlato] = useState("")
  let [descriPlato, setDescriPlato] = useState("")
  let [precioPlato, setPrecioPlato] = useState(0)

  function eliminar(e) {
    listPlatos.splice(e,1);
    localStorage.setItem('platos', JSON.stringify(listPlatos));
    setModal2(false);
  }

  function editPlato(e) {
    listPlatos[e].nombre = nomPlato
    listPlatos[e].descripcion = descriPlato
    listPlatos[e].precio = precioPlato
    localStorage.setItem('platos', JSON.stringify(listPlatos));
    setModal(false);
  }

  function addPlato() {
    let objPlato = {nombre:nomPlato, descripcion:descriPlato, precio:precioPlato}
    listPlatos.push(objPlato)
    localStorage.setItem('platos', JSON.stringify(listPlatos));
    setModal1(false);
  }

  function actDatos(i,n,d,p){
    setIdPlato(i)
    setNomPlato(n)
    setDescriPlato(d)
    setPrecioPlato(p)
  }
  
  return (
    <div className="contenedorPlatos">
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
        {listPlatos.length ? 
          listPlatos.map((plato, index)=>{
            return (
              <div className="col-sm-6 d-flex mb-4 item-Ad">
                <img className="w-50 h-100" src={platos[index]} alt="img-plato"/>
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
                          actDatos(index, plato.nombre, plato.descripcion, plato.precio);
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
                          actDatos(index, plato.nombre);
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
      <div className="row gestion-menu p-5">
        <a type="button" className="btn" onClick={()=>setModal1(true)}>
          Agregar menú
        </a>
      </div>
    </div>
  );
}

export default Admin_Menu;
