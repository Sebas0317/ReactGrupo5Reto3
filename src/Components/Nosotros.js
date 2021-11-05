import React, { Component } from 'react'
import NosotrosC from "./view-nosotros/NosotrosC.js"
import Comentarios from "./view-inicio2/commentaries"

class Nosotros extends Component {
    render() {
        return (
            <>
            <NosotrosC />
            <Comentarios /> 
            </>
        )
    }
}

export default Nosotros;
