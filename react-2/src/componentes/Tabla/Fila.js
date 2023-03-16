import React from "react";
import BotonAccion from "../BotonAccion";

function Fila({ entidad, index }) {
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{entidad.nombre}</td>
      <td>{entidad.apellido}</td>
      <td>{entidad.documento}</td>
      <td>{entidad.obrasocial}</td>
      <td>
        <div class="btn-group" role="group" aria-label="Basic example">
          <BotonAccion tipo="editar" />
          <BotonAccion tipo="eliminar" />
        </div>
      </td>
    </tr>
  );
}

export default Fila;
