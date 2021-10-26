import React, { Component } from 'react'
import Carousel from "./carousel"
import Nosotros from "./ourPurpose"
import "./inicio.css"
import Recomendaciones from "./bestFood"
import Eventos from "./events"
import Comentarios from './commentaries'
class inicio extends Component {
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

export default inicio;