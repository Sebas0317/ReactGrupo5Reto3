import React, { useState } from "react";
import Menu_carrito from "./Menu_carrito";
import Modal from "../modal";

function All_menus (){

  let [modal, setModal] = useState(false);
  let [number, setNumber] = useState(0);
  let list = []
  let val = localStorage.getItem('Platos')
  if (val) {list = JSON.parse(val);}

  function eliminar(e) {
    list.splice(e,1);
    localStorage.setItem('Platos', JSON.stringify(list));
    window.location.reload(false);
  }

  return(
    <div className="col-sm-8 menus-car" id="lista_menus">
      {
        modal &&
        <Modal isVisible={modal} setVisible={()=>setModal(false)}>
          <div className="styleModal">
            <h3 className="text-center">
              Eliminar menú
            </h3>
            <h5 className="mt-2 text-center">
              ¿Desea eliminar el menú {list[number]['Nombre']} del carrito?
            </h5>
            <div className="btns">
              <button className="closeModal">CANCELAR</button>
              <button onClick={()=>eliminar(number)} className="btnOk">Ok</button>
            </div>
          </div>
        </Modal>
      }
      {list.length ? 
        list.map((menu,index)=>{
          return (
            <Menu_carrito 
              nombre={menu['Nombre']} 
              precio={menu['Precio']}
              total={menu['Total']}
              foto={menu['Foto']}
              cant ={eval(menu['Total'] + "/" + menu['Precio'])}
              id={index++}
              abr={(e)=>{setNumber(e); setModal(true)}}
            />
          )
        }) :
        <h2> No hay menús en el carrito </h2>
      }
    </div>
  );
}

export default All_menus;