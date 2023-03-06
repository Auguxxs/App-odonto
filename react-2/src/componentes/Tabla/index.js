import React, { useState } from "react";
import Encabezado from "./encabezado";
import Fila from "./Fila";
import "./Tabla.css";

function Tabla() {
  const [pacientes, setPacientes] = useState([
    {
      nombre: "Augusto",
      apellido: "perez",
      documento: "40125456",
      obrasocial: "ioscor",
    },
    {
      nombre: "juan",
      apellido: "gonzalez",
      documento: "4515456",
      obrasocial: "ockak",
    },
  ]);
  const columnas = pacientes.length > 0 ? Object.keys(pacientes[0]) : [];

  return (
    <table className="table table-stripped table-hover">
      <Encabezado columnas={columnas} />
      <tbody id="lista-pacientes">
        {pacientes.map((paciente, index) => (
          <Fila mascota={paciente} index={index} />
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;
