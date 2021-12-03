import React, { useState,useEffect } from "react";
import Loading1 from "../modal/loading1";
import Loading from "../modal/loading";
import Personal from "../assets/cliente1.png";
import Modal from "../modal/modal.js";

export default function Admin_Empleados() {

  let [modal1, setModal1] = useState(false)
  let [modal2, setModal2] = useState(false)
  let [modal3, setModal3] = useState(false)
  let [load, setLoad] = useState(false);
  let [load1, setLoad1] = useState(true);
  let [id, setId] = useState(0)
  let [name, setName] = useState("")
  let [cargo, setCargo] = useState("")
  let [img, setImg] = useState("")
  let [email, setEmail] = useState("")
  let [pass, setPass] = useState("")
  let [descripcion, setDescripcion] = useState("")

  //Obtener empleados
  let [listEmpleados, setListEmpleados] = useState([]);
  function fetchData() {
    fetch("https://avilap.herokuapp.com/api/empleados")
      .then((response) => response.json())
      .then((data) => {
        setListEmpleados(data);
        setLoad1(false);
      })
      .catch((err)=>{
        setLoad1(false);
      })
  }

  useEffect(()=>{
    document.title='Gestión de empleados';
    fetchData();
	});

  //Eliminar empleado
  function eliminar(id) {
    setLoad(true);
    fetch("https://avilap.herokuapp.com/api/empleados/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setLoad(false);
        setModal2(false);
      });
  }

  //Actualizar
  function actualizar(id) {
    setLoad(true);
    let datos = {
      id: id,
      email: email,
      name: name,
      pass: pass,
      rol: 'empleado',
      img: img.length == "" ? Personal : img,
      descripcion: descripcion,
      cargo: cargo,
    };

    fetch("https://avilap.herokuapp.com/api/empleados", {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(datos)
    })
      .then(response => {
        if (response.ok){
          console.log('Bien:' + response.text());
          setLoad(false);
          setImg("");
        } 
        else{
          console.log(response.status)
        }
      })
      .then(data => {
        setModal3(false);
        setLoad(false);
      });
  }

  //Agregar Empleado
  function addEmpleado (){
    setLoad(true);
    let datos = {
      email: email,
      name: name,
      pass: pass,
      rol: 'empleado',
      img: img.length == "" ? Personal : img,
      descripcion: descripcion,
      cargo: cargo,
    };

    fetch("https://avilap.herokuapp.com/api/empleados", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(datos)
    })
    .then(response => {
      if (response.ok){
        console.log('Bien:' + response.text());
        setLoad(false);
        setImg("");
      }
      else{
        console.log(response.statusText);
      }
    })
    .then(data => {
      setModal1(false);
      setLoad(false);
    })
    .catch((err)=>{
      setModal1(false);
      setLoad(false);
    });
  }

  return (
    <div className="container-fluid pt-5 mb-5">
      {modal1 &&
        <Modal isVisible={true} setVisible={() => setModal1(false)}>
          <div className="styleModal">
            <div className="modalservice">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre de empleado"
                onChange={(e) => {setName(e.target.value)}}
              />
              <input
                type="email"
                className="form-control mt-3"
                placeholder="Correo electrónico"
                onChange={(e) => {setEmail(e.target.value)}}
              />
              <div className="d-flex mt-3">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Cargo"
                  onChange={(e) => {setCargo(e.target.value)}}
                />
                <input
                  type="password"
                  className="form-control ms-2"
                  placeholder="Contraseña"
                  onChange={(e) => {setPass(e.target.value)}}
                />
              </div>
              <input
                type="text"
                className="form-control mt-3"
                placeholder="Link de foto"
                onChange={(e) => {setImg(e.target.value)}}
              />
              <textarea
                cols="30"
                rows="2"
                className="form-control mt-3"
                placeholder="Descripción de empleado"
                onChange={(e) => {setDescripcion(e.target.value)}}
              ></textarea>
              <div className="btns">
                <button className="closeModal">Cancelar</button>
                <button className="btnOk-ser" onClick={() => addEmpleado()}>
                  Agregar
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
              Eliminar empleado
            </h3>
            <h5 className="mt-2 text-center">
              ¿Desea eliminar el empleado {name}?
            </h5>
            <div className="btns">
              <button className="closeModal">CANCELAR</button>
              <button onClick={()=>eliminar(id)} className="btnOk">Ok</button>
            </div>
          </div>
        </Modal>
      }
      {modal3 &&
        <Modal isVisible={true} setVisible={() => setModal3(false)}>
          <div className="styleModal">
            <div className="modalservice">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => {setName(e.target.value)}}
              />
              <input
                type="text"
                className="form-control mt-3"
                value={cargo}
                onChange={(e) => {setCargo(e.target.value)}}
              />
              <input
                type="text"
                className="form-control mt-3"
                value={img}
                onChange={(e) => {setImg(e.target.value)}}
              />
              <div className="btns">
                <button className="closeModal">Cancelar</button>
                <button className="btnOk-ser" onClick={() => actualizar(id)}>
                  Actualizar
                </button>
              </div>
            </div>
          </div>
        </Modal>
      }
      <div className="row mt-5 mx-0 p-0">
        <div className="col-sm-12 ps-5">
          <p style={{fontFamily:'Branding',fontSize:'4rem',color:'#4f2c38'}}>Gestión de empleados</p>
        </div>
      </div>
      <div className="row px-5">
        { load1 &&
          <Loading1 isVisible={true}/>
        }
        { load &&
          <Loading isVisible={true}/>
        }
        {listEmpleados.length ?
          <table class="table table-hover text-center align-middle">
            <thead style={{backgroundColor:'#310101',color:'white'}}>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Cargo</th>
                <th scope="col">Foto</th>
                <th scope="col">Gestión</th>
              </tr>
            </thead>
            <tbody className="border">
              {listEmpleados.map((empleado)=>{
                return (
                  <tr className="m-0 " style={{alignSelf:'center'}}>
                    <th scope="row">{empleado.name}</th>
                    <td>{empleado.cargo}</td>
                    <td>
                      <img
                        className="rounded-circle"
                        src={empleado.img}
                        alt="img-personal"
                        width="70px"
                        height="70px"
                      />
                    </td>
                    <td>
                      <i 
                        type="button"
                        title="Editar" 
                        className="fas fa-pen" 
                        style={{fontSize:'18px'}}
                        onClick={()=>{
                          setId(empleado.id);setName(empleado.name);
                          setCargo(empleado.cargo);setImg(empleado.img);
                          setEmail(empleado.email);setPass(empleado.pass);
                          setDescripcion(empleado.descripcion);setModal3(true)
                        }}>
                      </i>
                      <i 
                        type="button"
                        title="Eliminar" 
                        className="fas fa-trash ms-3" 
                        style={{fontSize:'18px'}}
                        onClick={()=>{
                          setId(empleado.id);setName(empleado.name);
                          setModal2(true)
                        }}>
                      </i>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          :
          <h2 style={{fontFamily:'Branding',color:'#4f2c38'}}>No hay empleados registrados</h2>
        }
      </div>
      <div className="row gestion-ser pt-4">
        <a type="button" onClick={()=>setModal1(true)} className="btn">
          Agregar empleado
        </a>
      </div>
    </div>
  );
}