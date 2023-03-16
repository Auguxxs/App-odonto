import React from "react";
import "./ActionsMenu.css";
import Alert from "../Alert";

function ActionsMenu({ cambiarModal = () => {}, titulo }) {
  return (
    <div className="actions-menu">
      <h1>{titulo} </h1>
      <div className="actions-menu-content">
        <button
          type="button"
          className="btn btn-dark"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          onClick={cambiarModal}
        >
          Agregar
        </button>
        {<Alert />}
      </div>
    </div>
  );
}

export default ActionsMenu;
