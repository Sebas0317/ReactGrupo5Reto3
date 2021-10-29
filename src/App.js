import React from "react";
import Layout from "./Components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "./Components/inicio"
import Reserva from "./Components/reserva";
import Services_Container from './Components/view-services/Services_Container';
import Carrito_Container from './Components/view-carrito/Carrito_Container';
import Contacto from "./Components/contacto";
import Menu from "./Components/view-menu/Menu";
import Pagina404 from "./Components/pagina404";

function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Switch>
        <Route exact path="/" component={Inicio}/>
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/Carrito" component={Carrito_Container} />
        <Route exact path="/reserva" component={Reserva}/>
        <Route exact path="/contacto" component={Contacto}/>
        <Route exact component={Pagina404}/>
      </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
