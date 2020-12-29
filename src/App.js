import React, { Fragment } from "react";
import Header from "./components/Header";
import Carrousel from "./components/Carrousel";
import Paula from "./components/Paula";
import FarmaciasNoticias from "./components/FarmaciasNoticias";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Fragment>
        <Header />

        <Carrousel />

        <Paula />

        <FarmaciasNoticias />
      </Fragment>
    </div>
  );
}

export default App;
