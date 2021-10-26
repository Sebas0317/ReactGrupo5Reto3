import React from "react";
import { Carousel } from "react-bootstrap";
import './principalCarousel.css';
import fotoc from "./Components/assets/foto1.png";
import logo from "./assets/logo.png";

class carousel extends React.Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={fotoc}
                            alt="First slide"
                            
                        />
                        <Carousel.Caption className="carousel-caption">
                            <img src={logo} className="img-fluid w-25"  id="logo_principal" alt="Logo Slide One" />
                            <h1 id="first_capt"> <b>Sal&Salsa</b> </h1>
                            <p id="text_first_capt">lorem</p>
                            <button type="button" id="first_btn"> <b>Ver menú</b></button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={fotoc}
                            alt="Second slide"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <img src={logo} className="img-fluid w-25" id="pizza_carousel" alt="Logo Slide Two" />
                            <h1 id="second_capt"> <b> lorem </b> </h1>
                            <p id="text_second_capt"> lorem</p>
                            <button type="button" id="second_btn"> <b>Ver menú</b></button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={fotoc}
                            alt="Third slide"
                        />
                        <Carousel.Caption className="carousel-caption">
                            <img src={logo} className="img-fluid w-25" id="pizza_carousel_two" alt="Logo SLide Three" />
                            <h1 id="third_capt"> <b> lorem </b> </h1>
                            <p id="text_third_capt"> lorem</p>
                            <button type="button" id="third_btn"> <b>Reserva</b></button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        );
    }
}

export default carousel;