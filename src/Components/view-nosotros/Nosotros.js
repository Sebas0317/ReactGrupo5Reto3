import React, { Component } from 'react'
import NosotrosC from "./NosotrosC"
import Comentarios from "../comments/All_comments"
import Social from '../social/Social'

class Nosotros extends Component {
    render() {
        return (
            <>
            <Social />
            <NosotrosC />
            <Comentarios /> 
            </>
        )
    }
}

export default Nosotros;
