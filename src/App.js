import React from "react";
import Layout from "./Components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "./Components/inicio"
import Services_Container from './Components/view-services/Services_Container';
import Carrito_Container from './Components/view-carrito/Carrito_Container';
import Menu from "./Components/view-menu/Menu";

function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Switch>
        <Route exact path="/inicio" component={Inicio}/>
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/Carrito" component={Carrito_Container} />
      </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
