import React from "react";
import "./ActionsMenu.css";
import Alert from "../Alert";
import { useState } from "react";

function ActionsMenu() {
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const alertSwitch = () => setMostrarAlerta(!mostrarAlerta);
  return (
    <div className="actions-menu">
      <h1>Pacientes</h1>
      <div className="actions-menu-content">
        <button
          type="button"
          className="btn btn-dark"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          onClick={alertSwitch}
        >
          Agregar
        </button>
        {mostrarAlerta && <Alert alertSwitch={alertSwitch} />}
      </div>
    </div>
  );
}

export default ActionsMenu;
