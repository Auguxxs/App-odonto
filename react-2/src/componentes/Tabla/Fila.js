import React from "react";
import BotonAccion from "../BotonAccion";

function Fila({ paciente, index }) {
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{paciente.nombre}</td>
      <td>{paciente.apellido}</td>
      <td>{paciente.documento}</td>
      <td>{paciente.obrasocial}</td>
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
