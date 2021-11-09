import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import Services from "../view-services/Admin_Services";
import "../styles/admin.css";
import Modal from "../modal/modal";

//Imagenes
import verPass from "../assets/verPass.svg";
import verPass1 from "../assets/verPassNone.svg";
import deleteImg from "../assets/car-ico-basura.png";
import editImg from "../assets/ad-ser-edit.png";
import addUsuario from "../assets/addUser.svg";


export default function Admin (){
	const history = useHistory();

	let [servicios, setServicios] = useState(false);
	let [menu, setMenu] = useState(false);
	let [reservas, setReservas] = useState(false);
	let [usuarios, setUsuarios] = useState(true);
	let [redi, setRedi] = useState("");
	let [modal, setModal] = useState(false);
	let [modalDel, setModalDel] = useState(false);

	let session = JSON.parse(localStorage.getItem("session"));

	if(session){
		if (session.estado !== true) {
			history.push("/login");
		}
	}

	function redirigir (){
		setTimeout(()=>{
			setRedi("Redirigiendo..");
		}, 2000);
		setTimeout(()=>{
			history.push("/");
		}, 3200);
	}

	let users = JSON.parse(localStorage.getItem("users"));

	useEffect(()=>{
		if (session) {
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
				redirigir();
			}
		} else {
			redirigir();
		}	
	});

	let img = [];
	if (users) {
		for (let i = 0; i < users.length; i++) {
			img.push(false);
		}
	}
	
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
	let [idUser, setIdUser] = useState(false);
	function deleteUser (){
		users.splice(idUser, 1);
		localStorage.setItem("users", JSON.stringify(users));
		if (redi == "") {
			setRedi("aaa");
		} else if (redi == "aaa"){
			setRedi("eee");
		} else if (redi == "eee"){
			setRedi("");
		}
		document.querySelector(".closeModal").click()
	}

	

	function addUser (){
		let form = document.querySelector("form.modalUserAdmin");
		if (form.name.value && form.email.value && form.pass.value && (form.rol.value != "Selecciona un rol")) {
			users.push({name:form.name.value, user:form.email.value, pass:form.pass.value, rol:form.rol.value.toLowerCase()});
			localStorage.setItem("users", JSON.stringify(users));
			document.querySelector(".closeModal").click();
		}
	}

if (session) {
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
							{ modal &&	
								<Modal isVisible={modal} setVisible={()=>setModal(false)}>
									<form className="modalUserAdmin">
										<h3>Añade un nuevo usuario</h3>
										<label>Nombre</label>
										<input name="name" className="inputUserModalAdmin" type="text" placeholder="Escribe el nombre"/>
										<label>Correo</label>
										<input name="email" className="inputUserModalAdmin" type="text" placeholder="Escribe el correo electronico"/>
										<label>Contraseña</label>
										<input name="pass" className="inputUserModalAdmin" type="password" placeholder="Escribe la contraseña"/>
										<div className="selectAdminUser">
											<label>Rol</label>
											<select name="rol" id="">
												<option disabled selected>Selecciona un rol</option>
												<option>Cliente</option>
												<option>Admin</option>
											</select>
										</div>
										<div className="contBtnsAdmin">
											<input className="closeModal btnCancelAdminUser" style={{backgroundColor:"#8E8E8E", marginRight:"5px"}} value="Cancelar"/>
											<input className="btnSuccesAdminUser" type="button" onClick={()=>addUser()} value="Añadir usuario"/>
										</div>
									</form>
								</Modal>
							}
							{ modalDel &&
								<Modal isVisible={true} setVisible={()=>setModalDel(false)}>
									<div style={{display:"flex", flexDirection:"column", backgroundColor:"#fff", padding:"20px", justifyContent:"center"}}>
										<h4>¿Estas seguro que deseas eliminar este usuario?</h4>
										<div className="contBtnsAdmin">
											<input className="btnSuccesAdminUser closeModal" value="Cancelar" style={{marginRight:"15px"}}/>
											<input className="btnCancelAdminUser" onClick={()=>deleteUser()} value="Eliminar"/>
										</div>
									</div>
								</Modal>
							}
								<div className="menuUsersAdmin">
										<button onClick={()=>setModal(true)} type="button">
											<p>Agregar usuario</p>
											<img src={addUsuario}/>
										</button>
								</div>
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
											<div className="casillaAdmin"><input value={user.pass} id={"inputPassAdmin"+index} type="password"/><img id={"imgVerPass"+index} style={{opacity:user.user == "admin@salysalsa.co" && "0.2"}} onClick={()=>{user.user != "admin@salysalsa.co" && verPassFunct(index)}} src={verPass}/></div>
											<div className="casillaAdmin"><p style={{marginLeft:"auto"}}>{user.rol}</p><img style={{marginLeft:"20%", width:"9%", height:"auto", opacity:(user.user == "admin@salysalsa.co") && "0.1"}} src={editImg}/><img onClick={()=>{user.user != "admin@salysalsa.co" && setModalDel(true); setIdUser(index)}} style={{marginLeft:"2%", width:"9%", opacity:(user.user == "admin@salysalsa.co") && "0.1"}} src={deleteImg}/></div>
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
} else {
	redirigir();
	return (
		<div style={{height:"100vh", width:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
				<h4>Logueate primero..</h4>
				<p>{redi}</p>
		</div>
	)
}
}