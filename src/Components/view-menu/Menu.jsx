import React, { useState } from "react";
import MenuContainer from "./MenuContainer";
import Social from "../social/Social"
import Modal from "../modal";
import "../styles/menu.css";
import json from "../json/datos.json"

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


function Menu () {

  let [modal, setModal] = useState(false);
  let [nombre, setNombre] = useState("");
  let [precio, setPrecio] = useState(0);
  let [cant, setCant] = useState(1);
  let [foto, setFoto] = useState("");
  let platos = [plato1, plato2, plato3, plato4, plato5, plato6, plato7, plato8, plato9, plato10, plato11, plato12];
  
  function guardar() {
    let Obj_Plato = {Nombre: nombre, Precio: precio, Total: precio*cant, Foto: foto};
    let list = []

    if (localStorage.getItem('Platos')) {
      list = JSON.parse(localStorage.getItem('Platos'));
      let index = list.findIndex(plato => plato['Nombre'] === nombre);
      index == -1 ? list.push(Obj_Plato) : list[index] = Obj_Plato;
      localStorage.setItem('Platos', JSON.stringify(list));

    }else{
      list.push(Obj_Plato);
      localStorage.setItem('Platos', JSON.stringify(list));
    }
    document.querySelector(".closeModal").click();
  }

  function actDatos(n,p,c,f){
    setNombre(n)
    setPrecio(p)
    setCant(c)
    setFoto(f)
    setModal(true)
  }

  return (
    <div className="contenedorPlatos">
      <Social />
      {
        modal &&
        <Modal isVisible={modal} setVisible={()=>setModal(false)}>
          <div className="styleModal">
            <h3 className="text-center">
              Añadirás a tu carrito {cant} 
              <span> {cant==1 ? "unidad" : "unidades"} </span>
              del plato {nombre}
            </h3>
            <h5 className="mt-2 text-center">
              Total: $
              <span className="precio">
                {new Intl.NumberFormat().format(precio*cant)}
              </span>
            </h5>
            <div className="btns">
              <button className="closeModal">CANCELAR</button>
              <button onClick={()=>guardar()} className="btnOk">Ok</button>
            </div>
          </div>
        </Modal>

      }
      <p className="title">Haz tu pedido</p>
      <div className="platos">
        {json.platos.map((plato, index)=>{
          return (
            <MenuContainer 
              foto={platos[index]} 
              nombre={plato.nombre}
              descripcion={plato.descripcion}
              precio={plato.precio}
              act={(n,p,c,f)=>{actDatos(n,p,c,f)}}
            />
          )
        })}
      </div>
    </div>
  );
}

export default Menu;