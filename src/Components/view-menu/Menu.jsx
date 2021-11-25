import React, { useEffect, useState } from "react";
import MenuContainer from "./MenuContainer";
import Social from "../social/Social"
import Modal from "../modal/modal";
import "../styles/menu.css";
import { Link } from "react-router-dom";
import Loading1 from "../modal/loading1";

function Menu () {

  let [modal, setModal] = useState(false);
  let [nombre, setNombre] = useState("");
  let [precio, setPrecio] = useState(0);
  let [cant, setCant] = useState(1);
  let [foto, setFoto] = useState("");
  let [load, setLoad] = useState(false);
  let [listPlatos, setListPlatos] = useState([]);
  let [obj, setObj] = useState(false);

  function fetchData() {

    fetch("https://avilap.herokuapp.com/api/platos", {
      method:"GET"
    })
    .then((response) => response.json())
    .then((data) => {
      setLoad(false);
      setListPlatos(data);
    })
    .catch(()=>{
      setLoad(false);
    });
  }

  useEffect(()=>{
    document.title = 'Menú';
    setLoad(true);
    fetchData();
	}, [obj]);

  function guardar() {
    let Obj_Plato = {Nombre: nombre, Precio: precio, Total: precio*cant, Foto: foto};
    let list = []

    if (localStorage.getItem('pedidos')) {
      list = JSON.parse(localStorage.getItem('pedidos'));
      let index = list.findIndex(plato => plato['Nombre'] === nombre);
      index == -1 ? list.push(Obj_Plato) : list[index] = Obj_Plato;
      localStorage.setItem('pedidos', JSON.stringify(list));

    }else{
      list.push(Obj_Plato);
      localStorage.setItem('pedidos', JSON.stringify(list));
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

  let session = JSON.parse(localStorage.getItem("session"));
  
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
      { load &&
        <Loading1 isVisible={true}/>
      }
        {listPlatos.length ?
          listPlatos.map((plato)=>{
            return (
              <MenuContainer 
                foto={plato.imagen}
                nombre={plato.nombre}
                descripcion={plato.descripcion}
                precio={plato.precio}
                act={(n,p,c,f)=>{actDatos(n,p,c,f)}}
              />
            )
          }):
          <h2 className="text">No hay menús disponibles</h2>
        }
      </div>

      { session && session.estado && session.user.rol == "admin" &&
        <div className="row gestion-menu">
          <Link type="button" className="btn" to="gestionmenu">
            Gestionar menús
          </Link>
        </div>
      }
    </div>
  );
}

export default Menu;