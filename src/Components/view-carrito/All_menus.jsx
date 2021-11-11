import React, { useState } from "react";
import Menu_carrito from "./Menu_carrito";
import Modal from "../modal/modal";

function All_menus (){

  let [modal, setModal] = useState(false);
  let [number, setNumber] = useState(false);
  let [del, setDel] = useState(false);
  let list = []
  let val = localStorage.getItem('pedidos')
  if (val) {
    list = JSON.parse(val);
  }

  function eliminar(e) {
    let list = JSON.parse(localStorage.getItem("pedidos"));
    let id = list.findIndex(obj => obj.Nombre == e);
    list.splice(id, 1);
    localStorage.setItem("pedidos", JSON.stringify(list));
    document.querySelector(".closeModal").click();
    if(list.length == 0){
      document.querySelector("#btnActualizar").click();
    }
  }

  return(
    <div className="col-sm-8 menus-car" id="lista_menus">
        <Modal isVisible={modal} setVisible={()=>setModal(false)}>
          <div className="styleModal">
            <h3 className="text-center">
              Eliminar menú
            </h3>
            <h5 className="mt-2 text-center">
              ¿Desea eliminar el menú {number && number} del carrito?
            </h5>
            <div className="btns">
              <button className="closeModal">CANCELAR</button>
              <button onClick={()=>eliminar(number)} className="btnOk">Ok</button>
            </div>
          </div>
        </Modal>
      {list.length ? 
        list.map((menu,index)=>{
          return (
            <Menu_carrito 
              nombre={menu['Nombre']} 
              precio={menu['Precio']}
              total={menu['Total']}
              foto={menu['Foto']}
              cant ={eval(menu['Total'] + "/" + menu['Precio'])}
              id={index}
              abr={(e)=>{setNumber(menu["Nombre"]); setModal(true)}}
              del={del}
              del1={()=>{setDel([0, false])}}
            />
          )
        }) :
        <h2> No hay menús en el carrito </h2>
      }
    </div>
  );
}

export default All_menus;