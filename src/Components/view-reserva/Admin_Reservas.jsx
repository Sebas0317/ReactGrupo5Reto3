import React, { useEffect, useState } from "react";
import "../styles/reserva.css"
import Modal from "../modal/modal.js";
import Loading1 from "../modal/loading1";
import Loading from "../modal/loading";

export default function Admin_Reservas(){

  let [modal1, setModal1] = useState(false)
  let [modal2, setModal2] = useState(false)
  let [load, setLoad] = useState(false);
  let [load1, setLoad1] = useState(true);
  let [idReserva, setIdReserva] = useState(0)
  let [nomReserva, setNomReserva] = useState("")
  let [tel, setTel] = useState("");
	let [email, setEmail] = useState("");
	let [personas, setPersonas] = useState("");
	let [fecha, setFecha] = useState("");
	let [hora, setHora] = useState("");
	let [servicio, setServicio] = useState("");
	let [comentario, setComentario] = useState("");
  let [estadoReserva, setEstadoReserva] = useState("")
  let [obj, setObj] = useState(0);
	

  //Obtener Reservas
  let [reservas, setListReservas] = useState([]);
  function fetchData() {
    fetch("https://avilap.herokuapp.com/api/reservas")
      .then((response) => response.json())
      .then((data) => {
        setListReservas(data);
        setLoad1(false);
      })
      .catch((err)=>{
        setLoad1(false);
      })
  }

  useEffect(()=>{
    document.title = 'Gestión de reservas';
    // setLoad1(true);
    fetchData();
	},[obj]);

  //Eliminar reserva
  function eliminar(id) {
    setLoad(true);
    fetch("https://avilap.herokuapp.com/api/reservas/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setLoad(false);
        setModal2(false);
        obj++;
        setObj(obj);
      });
  }

  //Editar Reserva
  function editarReserva(id) {
    setLoad(true);
    let datos = {
      id: id,
      nombre: nomReserva,
      email: email,
      fecha: fecha,
      telefono: tel,
      hora: hora,
      servicio: servicio,
      personas: personas,
      mensaje: comentario,
      estado: estadoReserva
    };

    fetch("https://avilap.herokuapp.com/api/reservas", {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(datos)
    })
      .then(response => {
        if (response.ok)
          console.log('Bien:' + response.text())
        else
          console.log(response.status)
      })
      .then(data => {
        setLoad(false);
        setModal1(false);
        obj++;
        setObj(obj);
      });
  }

  return(
    <div className="container-fluid pt-5">
      {modal1 &&
        <Modal isVisible={true} setVisible={() => setModal1(false)}>
          <div className="styleModal">
            <div className="modalservice">
              <div className="d-flex py-2">
                <h5 className="label">Estado de la reserva : </h5>
                <select className="inputLargo servicio" onChange={(e)=>setEstadoReserva(e.target.value)}>
                  <option disabled selected>Seleccionar estado</option>
                  <option>En espera</option>
                  <option>Cancelada</option>
                  <option>Realizada</option>
                </select>
              </div>
              <div className="btns">
                <button className="closeModal">Cancelar</button>
                <button onClick={()=>editarReserva(idReserva)} className="btnOk-ser">
                  Actualizar estado
                </button>
              </div>
            </div>
          </div>
        </Modal>
      }
      {
        modal2 &&
        <Modal isVisible={true} setVisible={()=>setModal2(false)}>
          <div className="styleModal">
            <h3 className="text-center">
              Eliminar menú
            </h3>
            <h5 className="mt-2 text-center">
              ¿Desea eliminar la reserva del cliente {nomReserva}?
            </h5>
            <div className="btns">
              <button className="closeModal">CANCELAR</button>
              <button onClick={()=>eliminar(idReserva)} className="btnOk">Ok</button>
            </div>
          </div>
        </Modal>
      }
      <div className="row title-reservation pt-5 vstack">
        <h2 className="title-AdReservas ps-5">Gestión de reservas</h2>
      </div>
      <div className="row p-5 pt-4 g-4" >
        { load1 &&
          <Loading1 isVisible={true} />
        }
        { load &&
          <Loading isVisible={true} />
        }
        {
          reservas.length ?
            reservas.map((reserva)=>{
              return (
                <div className="col-sm-4">
                  <div className="card-reservations mb-3" style={{minWidth:'18rem'}}>
                    <div className="card-header">
                      <h6 className="m-0">{reserva.nombre}</h6>
                      <div className="d-flex">
                        <i 
                          type="button"
                          title="Editar" 
                          className="fas fa-pen" 
                          style={{fontSize:'15px'}}
                          onClick={()=>{
                            setIdReserva(reserva.id);
                            setNomReserva(reserva.nombre);
                            setEmail(reserva.email);
                            setFecha(reserva.fecha);
                            setTel(reserva.telefono);
                            setHora(reserva.hora);
                            setServicio(reserva.servicio);
                            setPersonas(reserva.personas);
                            setComentario(reserva.mensaje);
                            setEstadoReserva(reserva.estado);
                            setModal1(true)}}
                          >
                        </i>
                        <i 
                          type="button"
                          title="Eliminar" 
                          className="fas fa-trash ms-3" 
                          style={{fontSize:'15px'}}
                          onClick={()=>{
                            setIdReserva(reserva.id);setNomReserva(reserva.nombre);
                            setModal2(true)
                          }}>
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
                        <b>Solicitud especial :</b> {reserva.mensaje}
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
          <h4 style={{fontFamily:'Branding', fontSize:'35px', color:'#4f2c38'}} >No hay reservas</h4>
        }
      </div>
    </div>
  )
}