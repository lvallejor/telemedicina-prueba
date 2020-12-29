import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Carrousel from "./components/Carrousel";
import Paula from "./components/Paula";
import FarmaciasNoticias from "./components/FarmaciasNoticias";
import Buscar from "./components/Buscar";
import ListaBusqueda from "./components/ListaBusqueda";
import Producto from "./components/Producto";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Carrousel />
            <Paula />
            <FarmaciasNoticias />
          </Route>

          <Route path="/buscar">
            <Header />
            <Buscar />
          </Route>
          <Route path="/listabuscar">
            <Header />
            <ListaBusqueda />
          </Route>
          <Route path="/producto">
            <Header />
            <Producto />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
