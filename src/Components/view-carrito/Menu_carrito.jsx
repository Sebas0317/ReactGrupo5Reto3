import React, {useState, useEffect} from "react";
import ico_mas from "../assets/mas1.svg"
import ico_basura from "../assets/car-ico-basura.svg"

function Menu_carrito ({nombre, precio, total, foto, cant, id, abr, sum, res}){

  let list = JSON.parse(localStorage.getItem('pedidos'));
  let [Newcant, setNewcant] = useState(cant);
  let [sinPlatos, setSinPlatos] = useState(false);


  // CALCULAR TOTAL DE PEDIDO 

  
  return(
      <div className="menu-car d-flex">
        <div className="col-sm-4 p-3 img-car">
          <img src={foto} alt="img_menu" />
        </div>
        <div className="col-sm-8 p-3 d-flex">
          <div className="pe-4">
            <div className="d-flex title-menu-car">
              <h3>{nombre}</h3>
              <h3 className="price-car">
                $ {Intl.NumberFormat().format(precio)} /
                $ {Intl.NumberFormat().format(precio*cant)} 
                </h3>
            </div>
            <p className="text-car">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Cupiditate, quisquam laborum? Culpa laboriosam similique 
              odio quidem aspernatur minima sint vitae repudiandae? Non 
              tate eos vel doloremque ratione facilis illum eum.
            </p>
            <div className="botones-car">
              <button onClick={()=>res(id)} className="buttonMenos-car">
                <div className="btnMenos"></div>
              </button>
              <p className={"valor-car"}>{cant}</p>
              <button onClick={()=>sum(id)} className="buttonMas-car">
                <img src={ico_mas} alt="mas"/>
              </button>
            </div>
          </div>
          <div className="d-flex pt-1">
            <img 
              src={ico_basura}
              type="button" 
              alt="img_trash" 
              width="25" 
              height="25" 
              onClick={()=>abr()}
            />
          </div>
        </div>
      </div>
  );
}

export default Menu_carrito;