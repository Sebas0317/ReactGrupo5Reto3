import React, { useState, useEffect } from "react";
import Menu_carrito from "./Menu_carrito";
import Modal from "../modal/modal";

function All_menus (){

  let [modal, setModal] = useState(false);
  let [obj, setObj] = useState(0);
  let [number, setNumber] = useState(0);
  let [del, setDel] = useState(false);
  let list = []
  let val = localStorage.getItem('pedidos');

  if (val) {
    list = JSON.parse(val);
  }

  function eliminar(id) {
    let list = JSON.parse(localStorage.getItem("pedidos"));
    list.splice(id, 1);
    localStorage.setItem("pedidos", JSON.stringify(list));
    document.querySelector(".closeModal").click();
    if(list.length == 0){
      document.querySelector("#btnActualizar").click();
    }
  }

  function abrir(id){
    setNumber(id);
    setModal(true);
  }

  function sumar(id){
    let plato = JSON.parse(localStorage.getItem("pedidos"));
    let val = plato[id].Precio;
    let total = plato[id].Total;
    let result = plato[id].Total + plato[id].Precio;
    list[id].Total = result;
    localStorage.setItem("pedidos", JSON.stringify(list));
    obj++
    setObj(obj);   
  }

  function restar(id){
    let plato = JSON.parse(localStorage.getItem("pedidos"));
    if (plato[id].Total != plato[id].Precio){
      let val = plato[id].Precio;
      let total = plato[id].Total;
      let result = plato[id].Total - plato[id].Precio;
      list[id].Total = result;
      localStorage.setItem("pedidos", JSON.stringify(list));
      obj++
      setObj(obj);
    } else {
      list.splice(id, 1);
      localStorage.setItem("pedidos", JSON.stringify(list));
      obj++
      setObj(obj);
    }
   
  }

  useEffect(()=>{
   if(list.length){
     let val = list.reduce((a, b) => a + b.Total,0);
     document.querySelector(".total-car").textContent=Intl.NumberFormat().format(val); 
   } else {
     document.querySelector(".total-car").textContent=0;
     document.querySelector("#btnActualizar").click();
   }
  });

  return(
    <div className="col-sm-8 menus-car" id="lista_menus">
       { modal &&
         <Modal isVisible={modal} setVisible={()=>setModal(false)}>
          <div className="styleModal">
            <h3 className="text-center">
              Eliminar menú
            </h3>
            <h5 className="mt-2 text-center">
              ¿Desea eliminar el menú {list.length && list[number].Nombre} del carrito?
            </h5>
            <div className="btns">
              <button className="closeModal">CANCELAR</button>
              <button onClick={()=>eliminar(number)} className="btnOk">Ok</button>
            </div>
          </div>
        </Modal>

       }
       <br id="btnActualizarMenu" style={{display:"none"}} onClick={()=>{obj++; setObj(obj)}}/>  
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
              abr={()=>abrir(index)}
              sum={(id)=>sumar(id)}
              res={(id)=>restar(id)}
            />
          )
        }) :
        <h2> No hay menús en el carrito </h2>
      }
    </div>
  );
}

export default All_menus;