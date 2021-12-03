import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

import "../styles/admin.css";
import Modal from "../modal/modal";
import Admin_Services from "../view-services/Admin_Services";
import Admin_Menu from "../view-menu/Admin_Menu";
import Admin_Coments from "../comments/Admin_Coments";
import Admin_Footer from "../footer/admin-footer";
import Loading from "../modal/loading";
import Loading1 from "../modal/loading1";
import Admin_Reservas from "../view-reserva/Admin_Reservas";
import Admin_solicitudes from "../view-contacto/Admin_solicitudes";
import Admin_Empleados from "../view-nosotros/Admin_Empleados";

//Imagenes
import deleteImg from "../assets/car-ico-basura.svg";
import editImg from "../assets/ad-ser-edit.svg";
import addUsuario from "../assets/addUser.svg";
import Search from "../assets/userSearch.svg";

export default function Admin (){
	const history = useHistory();

	let [servicios, setServicios] = useState(false);
	let [menu, setMenu] = useState(false);
	let [reservas, setReservas] = useState(false);
	let [footer, setFooter] = useState(false);
	let [comentarios, setComentarios] = useState(false);
	let [solicitudes, setSolicitudes] = useState(false);
	let [usuarios, setUsuarios] = useState(true);
	let [redi, setRedi] = useState("");
	let [load, setLoad] = useState(false);
	let [load1, setLoad1] = useState(false);
	let [users, setUsers] = useState([]);
	let [obj, setObj] = useState(0);
	let [modal, setModal] = useState(false);
	let [modalDel, setModalDel] = useState(false);
	let [modalUpd, setModalUpd] = useState(false);
	let [buscar, setBuscar] = useState("");
	let [tipo, setTipo] = useState("nombre");
	let [nosotros, setNosotros] = useState(false);

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


	function searchUser(e, tipo){
		let x = 0;
		if (tipo == "nombre") {
			x = 0
		} else if (tipo == "correo") {
			x = 3;
		} else {
			x = "error";
		}

		let val = [];
		for (let i = 0; i < users.length; i++){
			if (x == 0) {
				val.push(users[i].name)
			} else {
				val.push(users[i].email)
			}
		}

		function buscar(e){
			return val.filter(function(a){
				return a.toLowerCase().indexOf(e.toLowerCase()) > -1;
			});
		}

		let result = buscar(e);
		let obj = [];

		for(let i =0; i < users.length; i++){
			let a = users.filter((user, index) => {
				let o = false;
				if (x == 0) {
					o = user.name == result[i];
				} else {
					o = user.email == result[i]; 
				}
				return o;
			});

			if (a.length != 0) {
				obj.push(a[0]);
			}
		}

		let resultado = false;
		if (obj.length != 0) {
			resultado = obj;
			if (x == "error") {
				resultado = "Error en el segundo parametro";
			}
		}

		return resultado
	}

	function searching(){
		if (buscar.length != 0) {
			let result = searchUser(buscar, tipo.toLowerCase());
			users = result;
		}
	}

	searching();

	useEffect(()=>{
		document.title="Gestión de usuarios";
		if (session) {
			if (session.user.rol == "admin") {
				let btnServicios = document.querySelector("#btnServicios");
				let btnUsuarios = document.querySelector("#btnUsuarios"); 
				let btnMenu = document.querySelector("#btnMenu");
				let btnReservas = document.querySelector("#btnReservas");
				let btnComentarios = document.querySelector("#btnComentarios");
				let btnFooter = document.querySelector("#btnFooter");
				let btnInfo = document.querySelector("#btnInfo");
				let btnNosotros = document.querySelector("#nosotrosAdminOpcion");
				let btnSolicitudes = document.querySelector("#btnSolicitudes");

				btnServicios.addEventListener("click", ()=>{
					setMenu(false);
					setReservas(false);
					setNosotros(false);
					setUsuarios(false);
					setFooter(false);
					setServicios(true);
					setComentarios(false);
					setSolicitudes(false);
					btnUsuarios.classList.remove("seleccion");
					btnFooter.classList.remove("seleccion");
					btnServicios.classList.add("seleccion");
					btnMenu.classList.remove("seleccion");
					btnReservas.classList.remove("seleccion");
					btnComentarios.classList.remove("seleccion");
					btnInfo.classList.remove("seleccion");
					btnNosotros.classList.remove("seleccion");
					btnSolicitudes.classList.remove("seleccion");
				});
				btnUsuarios.addEventListener("click", ()=>{
					setMenu(false);
					setReservas(false);
					setNosotros(false);
					setUsuarios(true);
					setSolicitudes(false);
					setFooter(false);
					setServicios(false);
					setComentarios(false);
					btnUsuarios.classList.add("seleccion");
					btnServicios.classList.remove("seleccion");
					btnFooter.classList.remove("seleccion");
					btnComentarios.classList.remove("seleccion");
					btnMenu.classList.remove("seleccion");
					btnReservas.classList.remove("seleccion");
					btnInfo.classList.remove("seleccion");
					btnNosotros.classList.remove("seleccion");
					btnSolicitudes.classList.remove("seleccion");

				});
				btnMenu.addEventListener("click", ()=>{
					setMenu(true);
					setReservas(false);
					setUsuarios(false);
					setFooter(false);
					setServicios(false);
					setNosotros(false);
					setSolicitudes(false);
					setComentarios(false);
					btnMenu.classList.add("seleccion");
					btnComentarios.classList.remove("seleccion");
					btnServicios.classList.remove("seleccion");
					btnFooter.classList.remove("seleccion");
					btnUsuarios.classList.remove("seleccion");
					btnReservas.classList.remove("seleccion");
					btnInfo.classList.remove("seleccion");
					btnSolicitudes.classList.remove("seleccion");
					btnNosotros.classList.remove("seleccion");
				});
				btnReservas.addEventListener("click", ()=>{
					setMenu(false);
					setReservas(true);
					setUsuarios(false);
					setServicios(false);
					setFooter(false);
					setSolicitudes(false);
					setComentarios(false);
					setNosotros(false);
					btnMenu.classList.remove("seleccion");
					btnServicios.classList.remove("seleccion");
					btnComentarios.classList.remove("seleccion");
					btnFooter.classList.remove("seleccion");
					btnUsuarios.classList.remove("seleccion");
					btnSolicitudes.classList.remove("seleccion");
					btnReservas.classList.add("seleccion");
					btnInfo.classList.remove("seleccion");
					btnNosotros.classList.remove("seleccion");
				});
				btnComentarios.addEventListener("click", ()=>{
					setMenu(false);
					setReservas(false);
					setUsuarios(false);
					setSolicitudes(false);
					setServicios(false);
					setFooter(false);
					setComentarios(true);
					setNosotros(false);
					btnMenu.classList.remove("seleccion");
					btnServicios.classList.remove("seleccion");
					btnFooter.classList.remove("seleccion");
					btnComentarios.classList.add("seleccion");
					btnSolicitudes.classList.remove("seleccion");
					btnUsuarios.classList.remove("seleccion");
					btnReservas.classList.remove("seleccion");
					btnInfo.classList.remove("seleccion");
					btnNosotros.classList.remove("seleccion");
				});
				btnFooter.addEventListener("click", ()=>{
					setMenu(false);
					setReservas(false);
					setUsuarios(false);
					setServicios(false);
					setFooter(true);
					setSolicitudes(false);
					setComentarios(false);
					setNosotros(false);
					btnMenu.classList.remove("seleccion");
					btnServicios.classList.remove("seleccion");
					btnFooter.classList.add("seleccion");
					btnComentarios.classList.remove("seleccion");
					btnSolicitudes.classList.remove("seleccion");
					btnUsuarios.classList.remove("seleccion");
					btnReservas.classList.remove("seleccion");
					btnInfo.classList.add("seleccion");
					btnNosotros.classList.remove("seleccion");
				});
				btnNosotros.addEventListener("click", ()=>{
					setMenu(false);
					setReservas(false);
					setUsuarios(false);
					setServicios(false);
					setFooter(false);
					setSolicitudes(false);
					setComentarios(false);
					setNosotros(true);
					btnMenu.classList.remove("seleccion");
					btnSolicitudes.classList.remove("seleccion");
					btnServicios.classList.remove("seleccion");
					btnFooter.classList.remove("seleccion");
					btnComentarios.classList.remove("seleccion");
					btnUsuarios.classList.remove("seleccion");
					btnReservas.classList.remove("seleccion");
					btnInfo.classList.add("seleccion");
					btnNosotros.classList.add("seleccion");
				});
				btnSolicitudes.addEventListener("click", ()=>{
					setMenu(false);
					setReservas(false);
					setUsuarios(false);
					setServicios(false);
					setFooter(false);
					setSolicitudes(true);
					setComentarios(false);
					setNosotros(false);
					btnMenu.classList.remove("seleccion");
					btnSolicitudes.classList.add("seleccion");
					btnServicios.classList.remove("seleccion");
					btnFooter.classList.remove("seleccion");
					btnComentarios.classList.remove("seleccion");
					btnUsuarios.classList.remove("seleccion");
					btnReservas.classList.remove("seleccion");
					btnInfo.classList.remove("seleccion");
					btnNosotros.classList.remove("seleccion");
				});
			}else {
				redirigir();
			}
		} else {
			redirigir();
		}
	}, []);

	let notiSolicitudes = 0;
	let [notiComentarios, setNotiComentarios] = useState(0);
	let [solicitudesInfo, setSolicitudesInfo] = useState(0);

	useEffect(()=>{
		setLoad1(true);
		setUsers([]);
		fetch("https://avilap.herokuapp.com/api/users",{
			method:"GET"
		})
		.then((response)=>{
			if (response.ok) {
				response.json()
				.then((res)=>{
					setUsers(res);
					setLoad1(false);
				});
			}
		})
		.catch((err)=>{
			setLoad(false);
			console.log(err);
		});

		fetch("https://avilap.herokuapp.com/api/comentarios",{
			method:"GET"
		})
		.then((response)=>{
			if (response.ok) {
				response.json()
				.then((res)=>{
					setNotiComentarios(res.length);
				});
			}
		})
		.catch((err)=>{
			console.log(err);
		});

		fetch("https://avilap.herokuapp.com/api/solicitudes",{
			method:"GET"
		})
		.then((response)=>{
			if (response.ok) {
				response.json()
				.then((res)=>{
					setSolicitudesInfo(res.length);
				});
			}
		})
		.catch((err)=>{
			console.log(err);
		});
	}, [obj]);

	let [idUser, setIdUser] = useState(false);
	function deleteUser (){
		setLoad(true);
		document.querySelector(".closeModal").click();
		let url = "https://avilap.herokuapp.com/api/users/"+idUser;
		fetch(url,{
			method:"DELETE",
			headers:{"Content-Type":"application/json; charset=utf-8"}
		})
		.then((response)=>{
			if(response.ok){
				setLoad(false);
				obj++;
				setObj(obj);
			}
		})
		.catch((err)=>{
			setLoad(false);
			alert("Ha ocurrido un error, Disculpanos..");
		});
	}

	function addUser (){
		let form = document.querySelector("form.modalUserAdmin");
		if (form.name.value && form.email.value && form.pass.value && (form.rol.value != "Selecciona un rol")) {
			setLoad(true);
			let user = {email:form.email.value, name:form.name.value, pass:form.pass.value, rol:form.rol.value.toLowerCase()};
			document.querySelector(".closeModal").click();
			fetch("https://avilap.herokuapp.com/api/users",{
				method:"POST",
				headers:{"Content-Type":"application/json; charset=utf-8"},
				body:JSON.stringify(user)
			})
			.then((response)=>{
				if(response.ok){
					setLoad(false);
					obj++;
					setObj(obj);
				}
			})
			.catch((err)=>{
				setLoad(false);
				alert("Ha ocurrido un error, Disculpanos..");
			});
		}
	}

	let [name, setName] = useState("");
	let [email, setEmail] = useState("");
	let [pass, setPass] = useState("");
	let [rol, setRol] = useState("");

	function updateUser(){
		setLoad(true);
		let user = {id:idUser, name:name, email:email, pass:pass, rol:rol};
		fetch("https://avilap.herokuapp.com/api/users",{
			method:"PUT",
			headers:{"Content-Type":"application/json; charset=utf-8"},
			body:JSON.stringify(user)
		})
		.then((response)=>{
			if(response.ok){
				setLoad(false);
				setModalUpd(false);
				obj++;
				setObj(obj);
			}
		})
		.catch((err)=>{
			setLoad(false);
			alert("Ha ocurrido un error, Disculpanos..");
		});
	}


	let [typeUser, setTypeUser] = useState("todos");

	function verUsuarios(rol){
		if (typeUser == "todos") {
			return true;
		} else if (rol == typeUser){
			return true;
		} else {
			return false;
		}
	}

	let [activeOpcion, setActiveOpcion] = useState(false);
	useEffect(()=>{
		document.querySelector("#btnInfo").addEventListener("mouseover", ()=>{
			setActiveOpcion(true);
		});
		document.querySelector("#btnInfo").addEventListener("mouseleave", ()=>{
			setActiveOpcion(false);
		});
		
	})

if (session) {
	if (session.user.rol == "admin") {
		return (
			<div className="adminCont">
					<div className="navAdmin">
						<div id="btnUsuarios" className="opcionAdmin seleccion">
							<i className="fas fa-users-cog me-2"></i><span>Gestión de usuarios</span>
						</div>
						<div id="btnReservas" className="opcionAdmin">
							<i className="fas fa-receipt me-2"></i> <span>Gestión de reservas</span>
						</div>
						<div id="btnInfo" className="opcionAdmin">
							<i className="fas fa-pager me-2"></i> <span>Gestión de información</span>
									<div className="btnInformacionAdmin" style={{display:activeOpcion ? "flex" : "none"}}>
										<div id="btnFooter" className="opcionAdminInfo">
											<span>Footer</span>		
										</div>
										<div id="nosotrosAdminOpcion" className="opcionAdminInfo">
											<span>Gestión de empleados</span>		
										</div>
									</div>
						</div>
						<div id="btnMenu" className="opcionAdmin">
							<i className="fas fa-utensils me-2"></i> <span>Gestión de menú</span>
						</div>
						<div id="btnServicios" className="opcionAdmin">
							<i className="fas fa-glass-cheers me-2"></i> <span>Gestión de servicios</span>
						</div>
						<div id="btnComentarios" className="opcionAdmin">
							<i className="fas fa-comment-dots me-2"></i> <span>Gestión de comentarios</span>
							{ notiComentarios > 0 &&
							   <span id="notificacionDiv"><b>{notiComentarios}</b></span>
							}
						</div>
						<div id="btnSolicitudes" className="opcionAdmin">
							<i class="fas fa-envelope me-2"></i> <span>Solicitudes</span> 
							{ solicitudesInfo > 0 &&
							   <span id="notificacionDiv"><b>{solicitudesInfo}</b></span>
							}
						</div>
					</div>
					<div style={{ display:"flex", width:"100%"}}>
						{ servicios &&
							<div className="parteAdmin">
								<Admin_Services/>
							</div>
						}
						{ reservas &&
							<div className="parteAdmin">
								<Admin_Reservas />
							</div>

						}
						{ nosotros &&
							<div className="parteAdmin">
								<Admin_Empleados/>
							</div>

						}
						{ comentarios &&
							<div className="parteAdmin">
							<Admin_Coments/>
							</div>
						}

						{ menu &&
							<div className="parteAdmin">
								<Admin_Menu/>
							</div>

						}
						{ footer &&
							<div className="parteAdmin">
								<Admin_Footer/>
							</div>

						}
						{ solicitudes &&
							<div className="parteAdmin">
								<Admin_solicitudes/>
							</div>
						}
						{ usuarios &&
							<div className="parteAdmin"style={{paddingTop:"9%"}}>
							{ modal &&	
								<Modal isVisible={modal} setVisible={()=>setModal(false)}>
									<form className="modalUserAdmin" id="modalUserAdmin">
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
												<option>Empleado</option>
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
							{ modalUpd &&	
								<Modal isVisible={true} setVisible={()=>setModalUpd(false)}>
									<form className="modalUserAdmin" id="modalUserUpdAdmin">
										<h3>Actualizar usuario</h3>
										<label>Nombre</label>
										<input name="name" value={name} onChange={(e)=>setName(e.target.value)} className="inputUserModalAdmin" type="text" placeholder="Escribe el nombre"/>
										<label>Correo</label>
										<input name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="inputUserModalAdmin" type="text" placeholder="Escribe el correo electronico"/>
										<label>Contraseña</label>
										<input name="pass" value={pass} onChange={(e)=>setPass(e.target.value)} className="inputUserModalAdmin" type="password" placeholder="Escribe la contraseña"/>
										<div className="selectAdminUser">
											<label>Rol</label>
											<select name="rol" id="" onChange={(e)=>setRol(e.target.value)}>
												<option selected>{rol && rol == "cliente" ? "Cliente" : rol == "admin" ? "Admin"  : "Empleado"}</option>
												{rol && rol != "cliente" && <option>Cliente</option>}
												{rol && rol != "admin" && <option>Admin</option>}
												{rol && rol != "empleado" &&  <option>Empleado</option>}
											</select>
										</div>
										<div className="contBtnsAdmin">
											<input className="closeModal btnCancelAdminUser" style={{backgroundColor:"#8E8E8E", marginRight:"5px"}} value="Cancelar"/>
											<input className="btnSuccesAdminUser" type="button" onClick={()=>updateUser()} value="Actualizar usuario"/>
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
										<div className="menuUsersAdmin_sub">
											<div className="searchContAdmin mb-3">
												<img src={Search}/>
												<input onChange={(e)=>setBuscar(e.target.value)} placeholder="Busca un usuario"/>
												<select name="" id="" onChange={(e)=>setTipo(e.target.value)}>
													<option>Nombre</option>
													<option>Correo</option>
												</select>
											</div>
										</div>
										<div style={{display:"flex", width:"99%", justifyContent:"space-between", alignItems:"flex-end", marginTop:"1%"}}>
											<button className="addUserBtn" onClick={()=>setModal(true)} type="button">
												<p>Añadir</p>
												<img src={addUsuario}/>
											</button>
											<div >
												<select name="" id="" onChange={(e)=>setTypeUser(e.target.value.toLowerCase())}>
													<option selected>Todos</option>
													<option>Empleado</option>
													<option>Cliente</option>
													<option>Admin</option>
												</select>
											</div>
										</div>
								</div>
								<Loading isVisible={load}/>
								<div className="casillasAdmin">
									<div className="contCasilla">
										<div className="casillaAdmin" id="contCasillaTop"style={{width:"5%"}}>ID</div>
										<div className="casillaAdmin" id="contCasillaTop">Nombre</div>
										<div className="casillaAdmin" id="contCasillaTop">Correo</div>
										<div className="casillaAdmin" id="contCasillaTop">Contraseña</div>
										<div className="casillaAdmin" id="contCasillaTop">Rol</div>
									</div>
								{ (users) && users.map((user, index)=>{
									return (
										<div className="contCasilla" style={{display: verUsuarios(user.rol) ? "flex" : "none"}}>
											<div className="casillaAdmin" style={{width:"5%"}}><p>{user.id}</p></div>
											<div className="casillaAdmin"><p>{user.name}</p></div>
											<div className="casillaAdmin"><p>{user.email}</p></div>
											<div className="casillaAdmin"><input value={user.pass} id={"inputPassAdmin"+index} type="password"/></div>
											<div style={{display:"flex", justifyContent:"flex-end"}} className="casillaAdmin">
												<p>{user.rol.charAt(0).toUpperCase()+user.rol.slice(1)}</p>
												<img onClick={()=>{setModalUpd(true); setIdUser(user.id); setName(user.name); setEmail(user.email); setPass(user.pass); setRol(user.rol)}} style={{marginLeft:"20%", width:"9%", height:"auto", opacity:(user.user == "admin@salysalsa.co") && "0.1"}} src={editImg}/>
												<img onClick={()=>{user.email != "admin@salysalsa.co" && setModalDel(true); setIdUser(user.id)}} style={{marginLeft:"2%", width:"9%", opacity:(user.email == "admin@salysalsa.co") && "0.1"}} src={deleteImg}/>
											</div>
										</div>
									)
								})
								}
								{ load1 &&
									<Loading1 isVisible={true}/>
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