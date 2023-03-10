import React from "react";
import "./ModalFooter.css";

function ModalFooter({ cambiarModal = () => {} }) {
  return (
    <div className="modal-footer">
      <button
        onClick={cambiarModal}
        type="button"
        className="btn btn-secondary"
        data-dismiss="modal"
      >
        Cerrar
      </button>
      <button
        onClick={cambiarModal}
        type="button"
        className="btn btn-primary"
        data-dismiss="modal"
        id="btn-guardar"
      >
        Crear
      </button>
    </div>
  );
}

export default ModalFooter;
