import {useEffect, useState} from "react";
import Loading1 from "../modal/loading1";
import Msg from "../modal/mensaje";
import Modal from "../modal/modal.js";

export default function Admin_solicitudes (){

	let [data, setData] = useState([]);
	let [load1, setLoad1] = useState(true);
	let [modalMsg, setModalMsg] = useState(false);
	let [modal, setModal] = useState(false);
	let [id, setId] = useState(0)
  let [cliente, setCliente] = useState("")

	//Obtener solicitudes
	useEffect(()=>{
		document.title='Gestión de solicitudes';
		fetch("https://avilap.herokuapp.com/api/solicitudes",{
			method:"GET"
		})
		.then((response)=>{
			if (response.ok) {
				response.json()
				.then((res)=>{
					setData(res);
					setLoad1(false);
				});
			}
		})
		.catch((err)=>{
			console.log(err);
			setLoad1(false);
		});
	})

	//Eliminar solicitud
  function eliminar(id) {
    fetch("https://avilap.herokuapp.com/api/solicitudes/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setModal(false);
      });
  }

	console.log(data);

	return (
		<div className="AdminSolicitudes">		
			{
        modal &&
        <Modal isVisible={true} setVisible={()=>setModal(false)}>
          <div className="styleModal">
            <h3 className="text-center">
              Eliminar menú
            </h3>
            <h5 className="mt-2 text-center">
              ¿Desea eliminar la reserva del cliente {cliente}?
            </h5>
            <div className="btns">
              <button className="closeModal">CANCELAR</button>
              <button onClick={()=>eliminar(id)} className="btnOk">Ok</button>
            </div>
          </div>
        </Modal>
      }	
			<h1 className="title-Adserv">Solicitudes</h1>
			{ load1 &&
				<Loading1 isVisible={true}/>
			}
			{ modalMsg &&
				<Msg isVisible={true} tipo={true}>
					<span>Eliminado correctamente</span>
				</Msg>
			}	
		    <div className="AdminContSoli ps-5 pb-5">
				{data.map((solicitud)=>{
					return(
						<div className="AdminSolicitud" style={{minWidth:'18rem'}}>
							<div className="AdminSoliContNombre px-3">
							 	<p className="m-0 p-0"><b>{solicitud.nombre}</b></p>
								<i 
									type="button"
									title="Eliminar" 
									className="fas fa-trash" 
									style={{fontSize:'15px'}}
									onClick={()=>{setId(solicitud.id);setCliente(solicitud.nombre);setModal(true)}}
									>
								</i>
							</div>
							<div className="p-3" style={{fontSize:'small'}}>
								<p>Asunto: <b>{solicitud.asunto}</b></p>
								<p>Telefono: <b>{solicitud.telefono}</b></p>
								<p>Mensaje: <b>{solicitud.mensaje}</b></p>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}