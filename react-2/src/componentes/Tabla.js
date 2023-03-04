import React from "react";

function Tabla() {
  <table className="table table-stripped table-hover">
    <thead className="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Documento</th>
        <th scope="col">Obra Social</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody id="lista-pacientes"></tbody>
  </table>;
}

export default Tabla;
