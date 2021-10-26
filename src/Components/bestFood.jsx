import React from "react";
import Card from "./foodCard";
import { Button } from "react-bootstrap";
import "./bestFood.css";
import food from "./assets/bestfood.jpeg";

class recomendaciones extends React.Component {
    render() {
        return (
            <div>
                <h1 className="text-center mt-4"> RECOMENDADOS DEL CHEF </h1>
                <div className="contenedor_recomendaciones mt-5">
                    <Card id="cards" titulo="Lorem" imagen={food} />
                    <Card id="cards" titulo="Lorem" imagen={food} />
                    <Card id="cards" titulo="Lorem" imagen={food} />
                </div>                
                <Button 
                className="d-block mx-auto mt-5 fw-bold fs-5"  
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href='/menu';
                    }}
                variant="outline-dark" id="btn_mas"> Más productos</Button>
            </div>
        );
    }
}

export default recomendaciones;