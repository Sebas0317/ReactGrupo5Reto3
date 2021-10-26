import React from "react";
import { Carousel } from "react-bootstrap";
import "./commentaries.css"
import cliente from './assets/cliente1.png';


class Comentarios extends React.Component {
    render() {
        return (
            <div className="testimonios">
                <Carousel>
                    <Carousel.Item interval={1000}>
                       
                        <Carousel.Caption className="carousel-caption">
                            <img src={cliente} className="cliente img-fluid" alt="Cliente 1" style={{ width: '15vw' }} />
                            <p className="text_testimonio"> "Ha sido una de las experiencias más deliciosas en mi vida, las pizzas son fantasticas y
                                la atención al cliente es fenomenal"</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        
                        <Carousel.Caption className="carousel-caption">
                            <img src={cliente} className="cliente img-fluid" alt="Cliente 1" style={{ width: '15vw' }} />
                            <p className="text_testimonio"> "Que rico es comer en un lugar donde la atención es excelente y donde cada
                                uno de los productos son de alta calidad"</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        
                        <Carousel.Caption className="carousel-caption">
                            <img src={cliente} className="cliente img-fluid" alt="Cliente 1" style={{ width: '15vw' }}/>
                            <p className="text_testimonio"> "La comida es excelente, la presentación muy agradable y el cartoon party es
                                una cosa loca, 100% recomendado"</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Comentarios;