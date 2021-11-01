import React, {useState} from "react";
import "./menu.css";

//Imagenes
import carrito from "../assets/carrito.svg"
import mas from "../assets/mas1.svg"

function MenuContainer({plato, id, abr}) {

  let [cant, setCant] = useState(1);

  // // SUMAR CANTIDAD 
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
            <p id={"valor"+id} className="valor">{cant}</p>
            <button onClick={()=>sumar()} className="buttonMas">
              <img className="imgMas" src={mas} />
            </button>
          </div>
          <button onClick={()=>abr(cant)} className="btnAgregar">
            <img src={carrito} />
            <p>AÑADIR AL CARRITO</p>
          </button>
        </div>
      </div>
    );
}

export default MenuContainer;