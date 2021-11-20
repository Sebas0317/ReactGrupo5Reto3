import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout";
import Inicio from "./Components/view-inicio/Inicio_Container"
import Reserva from "./Components/view-reserva/reserva";
import Services_Container from './Components/view-services/Services_Container';
import Admin_Services from './Components/view-services/Admin_Services';
import Admin_Menu from './Components/view-menu/Admin_Menu';
import Carrito_Container from './Components/view-carrito/Carrito_Container';
import Contacto from "./Components/view-contacto/contacto";
import Menu from "./Components/view-menu/Menu";
import Pagina404 from "./Components/pagina404";
import Nosotros from "./Components/view-nosotros/Nosotros"
import Login from "./Components/view-login/login";
import Register from "./Components/view-register/register";
import Admin from "./Components/view-admin/admin";
import History from "./Components/view-history/history";

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
        <Route exact path="/gestionmenu" component={Admin_Menu}/>
        <Route exact path="/reserva" component={Reserva}/>
        <Route exact path="/contacto" component={Contacto}/>
        <Route exact path="/nosotros" component={Nosotros}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/admin" component={Admin}/>
        <Route exact path="/history" component={History}/>
        <Route exact component={Pagina404}/>
      </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
