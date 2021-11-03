import React, { Component } from 'react'
import Carousel from "../view-inicio/carousel"
import Nosotros from "./view-inicio/ourPurpose"
import "./inicio.css"
import Eventos from "./view-inicio/events"
import Comentarios from './view-inicio/commentaries'
class Inicio extends Component {
    render() {
        return (
            <>
                <Carousel />
                <Nosotros />
                <Recomendaciones />
                <Eventos />
                <Comentarios />
            </>
        )
    }
}

export default Inicio;