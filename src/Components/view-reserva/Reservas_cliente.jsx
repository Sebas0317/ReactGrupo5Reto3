import React, { useEffect, useState } from "react";
import "../styles/reserva.css"
import Modal from "../modal/modal.js";
import Loading1 from "../modal/loading1";
import Loading from "../modal/loading";

export default function Reservas_cliente(){

  let [modal, setModal] = useState(false);
  let [idReserva, setIdReserva] = useState(0);
  let [load, setLoad] = useState(false);
  let [load1, setLoad1] = useState(true);

  //Obtener Reservas
  let [reservas, setListReservas] = useState([]);
  function fetchData() {
    fetch("https://avilap.herokuapp.com/api/reservas")
      .then((response) => response.json())
      .then((data) => {
        let session = JSON.parse(localStorage.getItem('session'))
        let list = []
        for (let i of data){
          if (i.email === session.user.email)
            list.push(i)
        }
        setListReservas(list);
        setLoad1(false);
      })
      .catch((err)=>{
        setLoad1(false);
      })
  }

  useEffect(()=>{
    document.title = 'Reservaciones';
    fetchData();
	});

  //Eliminar reserva
  function eliminar(id) {
    setLoad(true);
    fetch("https://avilap.herokuapp.com/api/reservas/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setLoad(false);
        setModal(false);
      });
  }

  return(
    <div className="container-fluid pt-5">
      {
        modal &&
        <Modal isVisible={true} setVisible={()=>setModal(false)}>
          <div className="styleModal">
            <h3 className="text-center">
              Eliminar menú
            </h3>
            <h5 className="mt-2 text-center">
              ¿Desea eliminar la reserva?
            </h5>
            <div className="btns">
              <button className="closeModal">CANCELAR</button>
              <button onClick={()=>eliminar(idReserva)} className="btnOk">Ok</button>
            </div>
          </div>
        </Modal>
      }
      <div className="row title-reservation pt-5 vstack">
        <h2 className="title-reservas ps-5">Reservaciones</h2>
      </div>
      <div className="row p-5 g-4" >
        { load1 &&
          <Loading1 isVisible={true} />
        }
        { load &&
          <Loading isVisible={true} />
        }
        {
          reservas.length > 0 ?
            reservas.map((reserva)=>{
              return (
                <div className="col-sm-3">
                  <div className="card-reservations mb-3" style={{minWidth:'18rem'}}>
                    <div className="card-header">
                      <h6 className="m-0">{reserva.nombre}</h6>
                      <div className="d-flex">
                        <i 
                          type="button"
                          title="Eliminar" 
                          className="fas fa-trash ms-3" 
                          style={{fontSize:'15px'}}
                          onClick={()=>{setIdReserva(reserva.id);setModal(true)}}
                          >
                        </i>
                        
                      </div>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        <b>Email :</b> {reserva.email}
                      </p>
                      <p className="card-text">
                        <b>Fecha :</b> {reserva.fecha}
                      </p>
                      <p className="card-text">
                        <b>Teléfono :</b> {reserva.telefono}
                      </p>
                      <p className="card-text">
                        <b>Hora :</b> {reserva.hora}
                      </p>
                      <p className="card-text">
                        <b>Servicio :</b> {reserva.servicio}
                      </p>
                      <p className="card-text">
                        <b>Número de personas :</b> {reserva.personas}
                      </p>
                      <p className="card-text">
                        <b>Solicitud especial :</b> {reserva.Mensaje}
                      </p>
                      <p className="card-text">
                        <b>Estado :</b> {reserva.estado}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })
          :
          <h4 style={{fontFamily:'Branding', height:'50vh'}} >No hay reservas</h4>
        }
      </div>
    </div>
  )
}