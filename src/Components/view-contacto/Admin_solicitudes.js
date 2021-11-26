import {useEffect, useState} from "react";
import BorrarImg from "../assets/car-ico-basura.svg";
import Loading1 from "../modal/loading1";

export default function Admin_solicitudes (){

	let [data, setData] = useState([]);
	let [load1, setLoad1] = useState(true);

	useEffect(()=>{
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
	}, [])

	console.log(data);

	return (
		<div className="AdminSolicitudes">			
			<h1 className="title-Adserv">Solicitudes</h1>
			{ load1 &&
				<Loading1 isVisible={true}/>
			}
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