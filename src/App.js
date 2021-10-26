import React from "react";
import Layout from "./Components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "./Components/inicio"
function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Switch>
        <Route exact path="/inicio" component={Inicio}/>
        
      </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
