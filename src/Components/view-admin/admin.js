import {useState, useEffect} from "react";
import Services from "../view-services/Admin_Services";
import "../styles/admin.css";

export default function Admin (){
	let [servicios, setServicios] = useState(true);
	let [menu, setMenu] = useState(false);
	let [reservas, setReservas] = useState(false);
	let [usuarios, setUsuarios] = useState(false);

	useEffect(()=>{
		document.querySelector("#btnServicios").addEventListener("click", ()=>{
			setServicios(true);
		});
	});

	let session = JSON.parse(localStorage.getItem("session"));
	if (session.user.rol == "admin") {
		return (
			<div className="adminCont">
					<div className="navAdmin">
						<div id="btnServicios" className="opcionAdmin seleccion marginTop"><span>Editar servicios</span></div>
						<div className="opcionAdmin "><span>Editar menu</span></div>
						<div className="opcionAdmin"><span>Editar reservas</span></div>
						<div className="opcionAdmin"><span>Editar usuarios</span></div>
					</div>
					<div style={{display:"flex", width:"100%", height:"100vh"}}>
						
					</div>
				</div>

		)
	} else {
		return (
			<div style={{height:"100vh", width:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}><h4>No tienes permiso para estar en este lugar :(</h4></div>
		)
	}
	
}