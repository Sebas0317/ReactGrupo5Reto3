import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout";
import Inicio from "./Components/view-inicio/Inicio_Container"
import Reserva from "./Components/reserva";
import Services_Container from './Components/view-services/Services_Container';
import Admin_Services from './Components/view-services/Admin_Services';
import Admin_Menu from './Components/view-menu/Admin_Menu';
import Carrito_Container from './Components/view-carrito/Carrito_Container';
import Contacto from "./Components/contacto";
import Menu from "./Components/view-menu/Menu.jsx";
import Pagina404 from "./Components/pagina404";
import Nosotros from "./Components/view-nosotros/Nosotros"

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
<<<<<<< HEAD
        =======
       {/* <Route exact path="/login" component={Login}/>
>>>>>>> c664cd191cf498a2124321d92f92cd2bf9eb5ee2 */}

=======
        <Route exact path="/login" component={Login}/>
>>>>>>> e3627550cafadafd718f02faac6f3f326b46e1d5
        <Route exact component={Pagina404}/>
      </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
