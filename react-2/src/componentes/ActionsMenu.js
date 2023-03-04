import React from "react";

function ActionsMenu() {
  return (
    <div className="actions-menu">
      <h1>Pacientes</h1>
      <div className="actions-menu-content">
        <button
          type="button"
          className="btn btn-dark"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Agregar
        </button>
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Ups!</strong> Algo salio mal, por favor vuelve a intentarlo
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  );
}

export default ActionsMenu;
