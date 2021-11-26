import React, { useEffect, useState } from "react";
import "../styles/footerAdmin.css"
import Ok from "../assets/ok.png";

export default function Admin_Footer() {

  let [footerInfo, setFooterInfo] = useState([]);
  let [restaurante, setRestaurante] = useState("");
  let [direccion, setDireccion] = useState("");
  let [email, setEmail] = useState("");
  let [telefono, setTelefono] = useState("");
  let [obj, setObj] = useState(0);
  let [modal, setModal] = useState(false);

 useEffect(()=>{
  fetch("https://avilap.herokuapp.com/api/footer", {
    method:"GET"
  })
  .then((response)=>response.json())
  .then((data)=>{
    setRestaurante(data[0].restaurante);
    setDireccion(data[0].direccion);
    setEmail(data[0].email);
    setTelefono(data[0].telefono);
  })
  .catch((err)=>{
    console.log(err)
  })
 },[]);


 function actualizar(){
    let data = {id:1, restaurante:restaurante, direccion:direccion, email:email, telefono:telefono};
    fetch("https://avilap.herokuapp.com/api/footer", {
      method:"PUT",
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify(data)
    })
    .then((response)=>{
      if(response.ok){
        setModal(true);
        setTimeout(()=>{
          setModal(false);
        }, 2000)
      } else {
        console.log(response)
      }
    })
    .catch((err)=>{
      console.log(err)
    });
 }

  return (
    //map the footerInf
    <div className="container-fluit pt-4 my-5">
      <div style={{display:modal ? "flex" : "none"}} className="modalAdminFooter">
        <span>Actualizado correctamente</span>
        <img src={Ok} />
      </div>
      <div className="row mt-5 mx-0 p-0">
        <div className="col-sm-12 top-serv ps-5 pe-1">
          <p className="title-InfoFoo">Gestión de Footer</p>
        </div>
        <div className="d-block align-items-center justify-content-between px-5">
          <div className="d-flex justify-content-end flex-column infoFoo">
            <input className="inputAdminFooter" value={restaurante} onChange={(e)=>setRestaurante(e.target.value)}/>
            <input className="inputAdminFooter" value={direccion} onChange={(e)=>setDireccion(e.target.value)}/>
            <input className="inputAdminFooter" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input className="inputAdminFooter" value={telefono} onChange={(e)=>setTelefono(e.target.value)} /> 
          </div>
        </div>
        <div className="row gestion-foo pt-4">
          <button type="button" className="btn" onClick={()=>actualizar()}>
            Actualizar información
          </button>
          
        </div>
      </div>
    </div>
  );
}
