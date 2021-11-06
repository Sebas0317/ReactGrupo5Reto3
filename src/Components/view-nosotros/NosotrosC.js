import React, { Component } from "react";
import "../styles/nosotros.css";
import Personal1 from "../assets/cliente1.png";
import Personal2 from "../assets/cliente2.png";
import Personal3 from "../assets/cliente3.png";
import Personal4 from "../assets/cliente4.png";

class NosotrosC extends Component {
  render() {
    return (
      <div className="contenedorNos">
      <div className="container-fluid p-0">
        <div className="row my-5 mx-0">
          <div className="col-sm-6 p-0">
            <div className="photo-nos float-end" />
          </div>
          <div className="col-sm-6 history-nos p-0 m-0">
            <div className="top-nos mt-5 ms-3 me-1">
              <p className="lh-1">
                <span className="title2-nos">NUESTRA</span>
                <br />
                <span className="title-nos">Historia</span>
              </p>
            </div>
            <div>
              <p className="text-nos mx-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                vitae similique illum id dolores quos non pariatur
                sapientevoluptates earum, atque numquam iure deleniti explicabo
                modi perspiciatis accusantium aliquam dolor!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
                dolorem officia voluptatum corrupti, quaerat cumque ducimus!
                Error repudiandae minus minima molestiae dolorem provident
                cupiditate voluptate, dolorum cum aperiam accusantium
                adipisci.vel harum dolores accusamus tenetur non ut aperiam amet
                totam consequuntur impedit. Perferendis, sint!
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                atque id tempore aut laudantium dolorum nesciunt obcaecati
                quidem, animi officiis sed. Libero sint corporis unde expedita
                maxime, iure possimus animi. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Incidunt, sint id at ipsa,
                quibusdam nesciunt aut voluptate similique quod eos nemo cumque
                cupiditate! Ea quasi soluta earum quo unde magnam.
              </p>
            </div>
          </div>
        </div>
        <div className="row personal-nos gy-5 px-5 m-0">
          <div className="col-sm-4">
            <img
              className="rounded-circle"
              src={Personal1}
              alt="personal1"
            />
            <h3>Pedro Romero</h3>
            <h6>Chef Ejecutivo</h6>
          </div>
          <div className="col-sm-4">
            <img
              className="rounded-circle"
              src={Personal4}
              alt="personal2"
            />
            <h3>Brenda Mendoza</h3>
            <h6>Chef Pastelera</h6>
          </div>
          <div className="col-sm-4">
            <img
              className="rounded-circle"
              src={Personal3}
              alt="personal3"
            />
            <h3>Laura Acosta</h3>
            <h6>Administradora</h6>
          </div>
          <div className="col-sm-4">
            <img
              className="rounded-circle"
              src={Personal3}
              alt="personal4"
            />
            <h3>María Márquez</h3>
            <h6>Auxiliar de cocina</h6>
          </div>
          <div className="col-sm-4">
            <img
              className="rounded-circle"
              src={Personal2}
              alt="personal5"
            />
            <h3>Juan Pérez</h3>
            <h6>Mesero</h6>
          </div>
          <div className="col-sm-4">
            <img
              className="rounded-circle"
              src={Personal4}
              alt="personal6"
            />
            <h3>María Torres</h3>
            <h6>Cajera</h6>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default NosotrosC;
