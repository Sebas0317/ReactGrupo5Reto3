import {useEffect, useState} from "react";

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
			<h1>Solicitudes</h1>
		    <div className="AdminContSoli">
				{data.map((solicitud)=>{
					return(
						<div className="AdminSolicitud">
							<p>Nombre: {solicitud.nombre}</p>
							<p>Asunto: {solicitud.asunto}</p>
							<p>Telefono: {solicitud.telefono}</p>
							<p>Mensaje: {solicitud.mensaje}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}