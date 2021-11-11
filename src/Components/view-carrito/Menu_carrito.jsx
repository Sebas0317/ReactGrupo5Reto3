import React, {useState, useEffect} from "react";
import ico_mas from "../assets/mas1.svg"
import ico_basura from "../assets/car-ico-basura.png"

function Menu_carrito ({nombre, precio, total, foto, cant, id, abr, del, del1}){

  let list = JSON.parse(localStorage.getItem('pedidos'));
  let [Newcant, setNewcant] = useState(cant);
  let [active, setActive] = useState(true);
  let [sinPlatos, setSinPlatos] = useState(false);

  function devolverID (){
    list =  JSON.parse(localStorage.getItem('pedidos'));
    let id = list.findIndex(obj => obj.Nombre == nombre);

    return id;
  }

  // SUMAR Y RESTAR CANTIDAD 
  function sumar_restar(e){
    e=='s' ? Newcant++ : Newcant--
    if (Newcant <= 0){
      setActive(false);
      let id = devolverID();
      list.splice(id,1);
      localStorage.setItem('pedidos', JSON.stringify(list));
      if(list.length == 0){
        document.querySelector("#btnActualizar").click();
        setSinPlatos(true);
      }
    }else{
      setNewcant(Newcant);
      let id = devolverID();
      list[id].Total = precio*Newcant;
      localStorage.setItem('pedidos', JSON.stringify(list));
    }
  }

  if(del[1] === true){
    let listt = JSON.parse(localStorage.getItem('pedidos'));
    let id = listt.findIndex(obj => obj.Nombre == nombre);
    if (del[0] == id){   
      listt.splice(id, 1);
      localStorage.setItem('pedidos', JSON.stringify(listt)); 
    }
  }

  // CALCULAR TOTAL DE PEDIDO 
  useEffect(()=>{
		if(list.length){
      let sum = list.reduce((a, b) => a + b.Total,0)
      let pricetotal = document.querySelector('.total-car')
      pricetotal.innerHTML = Intl.NumberFormat().format(sum)
    }
  });
  
  return(
    active ?
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
                $ {Intl.NumberFormat().format(precio*Newcant)} 
                </h3>
            </div>
            <p className="text-car">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Cupiditate, quisquam laborum? Culpa laboriosam similique 
              odio quidem aspernatur minima sint vitae repudiandae? Non 
              tate eos vel doloremque ratione facilis illum eum.
            </p>
            <div className="botones-car">
              <button onClick={()=>sumar_restar('r')} className="buttonMenos-car">
                <div className="btnMenos"></div>
              </button>
              <p className={"valor-car"}>{Newcant}</p>
              <button onClick={()=>sumar_restar('s')} className="buttonMas-car">
                <img src={ico_mas} alt="mas" />
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
              onClick={()=>abr(devolverID())}
            />
          </div>
        </div>
      </div> : <h2 style={{display:sinPlatos ? "flex" : "none"}}>No hay menus en el carrito</h2>
  );
}

export default Menu_carrito;