import React,{useEffect, useState} from "react";
import "./menu.css";

//Imagenes
import carrito from "../assets/carrito.svg"
import mas from "../assets/mas1.svg"

function MenuContainer({plato, id, res, sum, abr}) {

  let cant = 1;

  // // SUMAR CANTIDAD 
  function sumar (){
    let valor = document.querySelector("#valor"+id);
    cant++
    valor.textContent = cant;
  }

  // RESTAR CANTIDAD 

  function restar (){
    let valor = document.querySelector("#valor"+id);
    if (cant > 1){
      cant--
      valor.textContent=cant;
    }
  }


  // // MODAL | ABRIR Y CERRAR

  // let modal = document.querySelector(".modall");
  // let modal1 = document.querySelector(".confirmacion");
  // let unidades = document.querySelector(".unidades");
  // let precio = document.querySelector(".precio");
  // let btnOk = document.querySelector(".btnOk");
  // let uniText = document.querySelector(".unidadText");

  // //modal.addEventListener("click", ()=>{
  // //  quitar();
  // //})/


  // function abrir (num) {
  //   let val = cant["cant"+num];
  //   if (val != 1) {
  //     uniText.textContent = "unidades";
  //   } else {
  //     uniText.textContent = "unidad";
  //   }
  //   unidades.textContent = val;
  //   precio.textContent = new Intl.NumberFormat().format(25000*val);

  //   btnOk.setAttribute("onclick", `guardar(${num}, ${val})`)

  //   modal.classList.remove("quitar");
  //   modal1.classList.remove("quitar");
  // }

  // function quitar (){
  //   modal.classList.add("quitar");
  //   modal1.classList.add("quitar"); 
  // }

  // // GUARDAR EN CARRITO

  // function guardar (num, val){
  //   quitar();
  //   carrito.setAttribute("src", "../assets/carrito1.png");
  //   localStorage.setItem(`Plato${num}`, 25000*cant["cant"+num]);
  // }

    return (
      <div className="item">
        <img src={plato} />
        <div className="descripcion">
          <h1 className="titleItem">Lorem ipsum dolor sit amet conse.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
          </p>
          <h2 className="titlePrecio">$25.000</h2>
        </div>
        <div className="cantidad">
          <h5 className="titleCant">CANTIDAD</h5>
          <div className="botones">
            <button onClick={()=>restar()} id="btnMenos5" className="buttonMenos">
              <div className="btnMenos"></div>
            </button>
            <p id={"valor"+id} className="valor">1</p>
            <button onClick={()=>sumar()} className="buttonMas">
              <img className="imgMas" src={mas} />
            </button>
          </div>
          <button onClick={()=>alert("abrir")} className="btnAgregar">
            <img src={carrito} />
            <p>AÑADIR AL CARRITO</p>
          </button>
        </div>
      </div>
    );
}

export default MenuContainer;