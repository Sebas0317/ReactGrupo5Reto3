import {useState, useEffect} from "react";
import Services from "../view-services/Admin_Services";
import "../styles/admin.css";

export default function Admin (){
	let [servicios, setServicios] = useState(true);
	let [menu, setMenu] = useState(false);
	let [reservas, setReservas] = useState(false);
	let [usuarios, setUsuarios] = useState(false);

	useEffect(()=>{
		let btnServicios = document.querySelector("#btnServicios");
		let btnUsuarios = document.querySelector("#btnUsuarios"); 
		let btnMenu = document.querySelector("#btnMenu");
		let btnReservas = document.querySelector("#btnReservas");

		btnServicios.addEventListener("click", ()=>{
			setMenu(false);
			setReservas(false);
			setUsuarios(false);
			setServicios(true);
			btnUsuarios.classList.remove("seleccion");
			btnServicios.classList.add("seleccion");
			btnMenu.classList.remove("seleccion");
			btnReservas.classList.remove("seleccion");
		});
		btnUsuarios.addEventListener("click", ()=>{
			setMenu(false);
			setReservas(false);
			setUsuarios(true);
			setServicios(false);
			btnUsuarios.classList.add("seleccion");
			btnServicios.classList.remove("seleccion");
			btnMenu.classList.remove("seleccion");
			btnReservas.classList.remove("seleccion");

		});
		btnMenu.addEventListener("click", ()=>{
			setMenu(true);
			setReservas(false);
			setUsuarios(false);
			setServicios(false);
			btnMenu.classList.add("seleccion");
			btnServicios.classList.remove("seleccion");
			btnUsuarios.classList.remove("seleccion");
			btnReservas.classList.remove("seleccion");
		});
		btnReservas.addEventListener("click", ()=>{
			setMenu(false);
			setReservas(true);
			setUsuarios(false);
			setServicios(false);
			btnMenu.classList.remove("seleccion");
			btnServicios.classList.remove("seleccion");
			btnUsuarios.classList.remove("seleccion");
			btnReservas.classList.add("seleccion");
		});
	});

	let session = JSON.parse(localStorage.getItem("session"));
	if (session.user.rol == "admin") {
		return (
			<div className="adminCont">
					<div className="navAdmin">
						<div id="btnServicios" className="opcionAdmin seleccion marginTop"><span>Editar servicios</span></div>
						<div id="btnMenu" className="opcionAdmin"><span>Editar menu</span></div>
						<div id="btnReservas" className="opcionAdmin"><span>Editar reservas</span></div>
						<div id="btnUsuarios" className="opcionAdmin"><span>Editar usuarios</span></div>
					</div>
					<div style={{display:"flex", width:"100%", height:"100vh"}}>
						{ servicios &&
							<div><p>Servicios</p></div>
						}
						{ reservas &&
							<div><p>Reservas</p></div>

						}
						{ menu &&
							<div><p>Menu</p></div>

						}
						{ usuarios &&
							<div><p>Usuarios</p></div>

						}
					</div>
				</div>

		)
	} else {
		return (
			<div style={{height:"100vh", width:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}><h4>No tienes permiso para estar en este lugar :(</h4></div>
		)
	}
	
}