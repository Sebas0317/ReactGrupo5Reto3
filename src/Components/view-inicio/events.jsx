import React from "react";
import Card from "./eventCards";
import "./events.css"
import ico1 from "../assets/ico1.png";
import ico2 from "../assets/ico2.png";
import ico3 from "../assets/ico3.png";
import ico4 from "../assets/ico4.png";


class Eventos extends React.Component {
    render() {
        return (
            <div className="contenedor-eventos mt-5">
                <Card
                    titulo="lorem"
                    texto=" lorem"
                    imagen={ico1}
                />
                <Card
                    titulo="lorem"
                    texto=" lorem"
                    imagen={ico2}
                />
                <Card
                    titulo="lorem"
                    texto=" lorem."
                    imagen={ico3}
                />
                <Card
                    titulo="Lorem"
                    texto=" lorem"
                    imagen={ico4}
                />

            </div>
        );
    }
}

export default Eventos;