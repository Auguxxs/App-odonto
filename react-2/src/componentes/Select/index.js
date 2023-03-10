import React from "react";
import "./Select.css";

function Select({ options = [], nombreCampo = "vacio" }) {
  return (
    <>
      <label for="exampleFormControlSelect1">Obra Social</label>
      <select className="form-control" id="tipo">
        <option value="">Seleccione {nombreCampo} </option>
        {options.map(({ valor, etiqueta }, index) => (
          <option
            key={`${nombreCampo}-${index}-${valor}-${etiqueta}`}
            value={valor}
          >
            etiqueta{nombreCampo}{" "}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
