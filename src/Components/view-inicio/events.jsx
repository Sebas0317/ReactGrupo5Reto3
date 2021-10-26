import React from "react";
import Card from "./eventCards";
import "./events.css"
import ico1 from "./Components/assets/ico1.png"
import ico2 from "./Components/assets/ico2.png"
import ico3 from "./Components/assets/ico3.png"
import ico4 from "./Components/assets/ico4.png"

class Eventos extends React.Component {
    render() {
        return (
            <div className="contenedor-eventos mt-5">
                <Card
                    titulo="Fiestas Temáticas"
                    texto=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                    incidunt enim sed mollitia tempore quisquam delectus esse fugit
                    nesciunt adipisci molestias sit ipsum assumenda, quidem illum
                    doloremque modi illo ullam!"
                    imagen={ico1}
                />
                <Card
                    titulo="Matrinomios"
                    texto=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                    incidunt enim sed mollitia tempore quisquam delectus esse fugit
                    nesciunt adipisci molestias sit ipsum assumenda, quidem illum
                    doloremque modi illo ullam!"
                    imagen={ico2}
                />
                <Card
                    titulo="Cenas Empresariales"
                    texto=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                    incidunt enim sed mollitia tempore quisquam delectus esse fugit
                    nesciunt adipisci molestias sit ipsum assumenda, quidem illum
                    doloremque modi illo ullam!"
                    imagen={ico3}
                />
                <Card
                    titulo="Cumpleaños"
                    texto=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                    incidunt enim sed mollitia tempore quisquam delectus esse fugit
                    nesciunt adipisci molestias sit ipsum assumenda, quidem illum
                    doloremque modi illo ullam!"
                    imagen={ico4}
                />

            </div>
        );
    }
}

export default Eventos;