import React from "react";
import "./ourPurpose.css";
import fondo from "./assets/foto1.png"
import fondo2 from "./assets/foto2.png"
class nosotros extends React.Component {
    render() {
        return (
            <div className="nuestra_propuesta">
                <div className="nosotros">
                    <img src={fondo2} className="img-fluid w-100" id="nosotros" alt="nosotros"/>

                    <h1><b>Nuestra propuesta</b></h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum natus placeat, consectetur ab corporis consequuntur dolores dolore minima ex cumque perferendis sequi culpa iste alias quod eius. Voluptates, vel odio? </p>

                </div>
            </div>
        );
    }
}

export default nosotros;