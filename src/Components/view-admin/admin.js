import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import Services from "../view-services/Admin_Services";
import verPass from "../assets/verPass.svg";
import verPass1 from "../assets/verPassNone.svg";
import "../styles/admin.css";

export default function Admin (){
	const history = useHistory();

	let [servicios, setServicios] = useState(false);
	let [menu, setMenu] = useState(false);
	let [reservas, setReservas] = useState(false);
	let [usuarios, setUsuarios] = useState(true);
	let [redi, setRedi] = useState("a");

	let session = JSON.parse(localStorage.getItem("session"));

	if(session){
		if (session.estado !== true) {
			history.push("/login");
		}
	}

	let users = JSON.parse(localStorage.getItem("users"));

	useEffect(()=>{
		if (session.user.rol == "admin") {
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
		} else {
			setTimeout(()=>{
				setRedi("Redirigiendo..");
			}, 2000);
			setTimeout(()=>{
				history.push("/");
			}, 3200);
		}
	});

	let img = [false, false, false, false];
	function verPassFunct(e){
		let inputPass = document.querySelector("#inputPassAdmin"+e);
		let imgVerPass = document.querySelector("#imgVerPass"+e);

		if (inputPass.type == "text") {
			inputPass.type="password";
		} else if (inputPass.type == "password"){
			inputPass.type="text";
		}


		if (img[e] == false) {
			imgVerPass.src = verPass1;
			img[e] = true;
		} else {
			imgVerPass.src = verPass;
			img[e] = false;
		}

	}

	if (session.user.rol == "admin") {
		return (
			<div className="adminCont">
					<div className="navAdmin">
						<div id="btnUsuarios" className="opcionAdmin seleccion"><span>Editar usuarios</span></div>
						<div id="btnServicios" className="opcionAdmin marginTop"><span>Editar servicios</span></div>
						<div id="btnMenu" className="opcionAdmin"><span>Editar menu</span></div>
						<div id="btnReservas" className="opcionAdmin"><span>Editar reservas</span></div>
					</div>
					<div style={{display:"flex", width:"100%", height:"100vh"}}>
						{ servicios &&
							<div className="parteAdmin">
								<input type="button" onClick={()=>history.push("/gestionservicios")} value="Ir a la seccion editar servicios"/>
							</div>
						}
						{ reservas &&
							<div className="parteAdmin">
							<	p>Reservas</p>
							</div>

						}
						{ menu &&
							<div className="parteAdmin">
								<input type="button" onClick={()=>history.push("/gestionmenu")} value="Ir a la seccion editar menu"/>
							</div>

						}
						{ usuarios &&
							<div className="parteAdmin">
								<div className="casillasAdmin">
									<div className="contCasilla">
										<div className="casillaAdmin" id="contCasillaTop">Nombre</div>
										<div className="casillaAdmin" id="contCasillaTop">Correo</div>
										<div className="casillaAdmin" id="contCasillaTop">Contraseña</div>
										<div className="casillaAdmin" id="contCasillaTop">rol</div>
									</div>
								{ (users) && users.map((user, index)=>{
									return (
										<div className="contCasilla">
											<div className="casillaAdmin"><p>{user.name}</p></div>
											<div className="casillaAdmin"><p>{user.user}</p></div>
											<div className="casillaAdmin"><input value={user.pass} id={"inputPassAdmin"+index} type="password"/><img id={"imgVerPass"+index} onClick={()=>verPassFunct(index)} src={verPass}/></div>
											<div className="casillaAdmin"><p>{user.rol}</p></div>
										</div>
									)
								})
								}
								</div>
							</div>

						}
					</div>
				</div>

		)
	} else {
		return (
			<div style={{height:"100vh", width:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
				<h4>No tienes privilegios para estar en este lugar</h4>
				<p>{redi}</p>
			</div>
		)
	}
	
}