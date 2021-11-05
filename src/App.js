import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout";
import Inicio from "./Components/view-inicio/Inicio_Container"
import Reserva from "./Components/reserva";
import Services_Container from './Components/view-services/Services_Container';
import Admin_Services from './Components/view-services/Admin_Services';
import Carrito_Container from './Components/view-carrito/Carrito_Container';
import Contacto from "./Components/contacto";
<<<<<<< HEAD
import Menu from "./Components/view-menu/Menu.jsx";
=======
import Menu from "./Components/view-menu/Menu";
import Login from "./Components/login";
>>>>>>> c664cd191cf498a2124321d92f92cd2bf9eb5ee2
import Pagina404 from "./Components/pagina404";
import Nosotros from './Components/Nosotros.js';

function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Switch>
        <Route exact path="/" component={Inicio}/>
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/carrito" component={Carrito_Container} />
        <Route exact path="/servicios" component={Services_Container}/>
        <Route exact path="/gestionservicios" component={Admin_Services}/>
        <Route exact path="/reserva" component={Reserva}/>
        <Route exact path="/contacto" component={Contacto}/>
<<<<<<< HEAD
        <Route exact path="/nosotros" component={Nosotros}/>
=======
        <Route exact path="/login" component={Login}/>
>>>>>>> c664cd191cf498a2124321d92f92cd2bf9eb5ee2
        <Route exact component={Pagina404}/>
      </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
