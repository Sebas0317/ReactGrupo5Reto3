import React, {useState} from "react";

//Imagenes
import carrito from "../assets/carrito.svg"
import mas from "../assets/mas1.svg"

function MenuContainer({foto, nombre, descripcion, precio, act}) {

  let [cant, setCant] = useState(1);

  // SUMAR CANTIDAD 
  function sumar (){
    cant++
    setCant(cant)
  }

  // RESTAR CANTIDAD 

  function restar (){
    if (cant > 1){
      cant--
      setCant(cant)
    }
  }

  return (
    <div className="item">
      <img src={foto} alt="img-plato"/>
      <div className="descripcion">
        <h1 className="titleItem">{nombre}</h1>
        <p>
          {descripcion}
        </p>
        <h2 className="titlePrecio"> $ {Intl.NumberFormat().format(precio)}</h2>
      </div>
      <div className="cantidad">
        <h5 className="titleCant">CANTIDAD</h5>
        <div className="botones">
          <button onClick={()=>restar()} className="buttonMenos">
            <div className="btnMenos"></div>
          </button>
          <p id={"valor"} className="valor">{cant}</p>
          <button onClick={()=>sumar()} className="buttonMas">
            <img className="imgMas" src={mas} alt="Boton mas" />
          </button>
        </div>
        <button onClick={()=>act(nombre,precio,cant,foto)} className="btnAgregar">
          <img src={carrito} alt="imagen carrito"/>
          <p>AÑADIR AL CARRITO</p>
        </button>
      </div>
    </div>
    );
}

export  default MenuContainer ;