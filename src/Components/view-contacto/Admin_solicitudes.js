import {useEffect, useState} from "react";
import BorrarImg from "../assets/car-ico-basura.svg";

export default function Admin_solicitudes (){

	let [data, setData] = useState([]);

	useEffect(()=>{
		fetch("https://avilap.herokuapp.com/api/solicitudes",{
			method:"GET"
		})
		.then((response)=>{
			if (response.ok) {
				response.json()
				.then((res)=>{
					setData(res);
				});
			}
		})
		.catch((err)=>{
			console.log(err);
		});
	}, [])

	console.log(data);

	return (
		<div className="AdminSolicitudes">
			<h1 className="title-Adserv">Solicitudes</h1>
		    <div className="AdminContSoli">
				{data.map((solicitud)=>{
					return(
						<div className="AdminSolicitud">
							<div className="AdminSoliContNombre">
							 	<p>Nombre: <b>{solicitud.nombre}</b></p>
							 	<img src={BorrarImg}/>
							 </div>
							<p>Asunto: <b>{solicitud.asunto}</b></p>
							<p>Telefono: <b>{solicitud.telefono}</b></p>
							<p>Mensaje: <b>{solicitud.mensaje}</b></p>
						</div>
					)
				})}
			</div>
		</div>
	)
}