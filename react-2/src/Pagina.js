import React from "react";
import Nav from "./componentes/Nav";
import ActionsMenu from "./componentes/ActionsMenu";
import Tabla from "./componentes/Tabla";

function Pagina() {
  return (
    <div className="container">
      <Nav />
      <ActionsMenu />
      <Tabla />
    </div>
  );
}

export default Pagina;
