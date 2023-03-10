import React from "react";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import Select from "../Select";
import Input from "../Input";
import "./Modal.css";

const tipoObraSocial = [
  { valor: "Ioscor", etiqueta: "Ioscor" },
  { valor: "Osecac", etiqueta: "Osecac" },
  { valor: "Isunne", etiqueta: "Isunne" },
  { valor: "Osde", etiqueta: "Osde" },
];

function Modal({ cambiarModal = () => {} }) {
  return (
    <>
      <div className="modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <ModalHeader cambiarModal={cambiarModal} />
            <div className="modal-body">
              <form id="form">
                <div className="form-row">
                  <div className="col">
                    <Select
                      options={tipoObraSocial}
                      nombreCampo="Obra social"
                    />
                  </div>
                </div>
                <Input tipo="text" nombreCampo="nombre" />
              </form>
            </div>
            <ModalFooter cambiarModal={cambiarModal} />
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
}

export default Modal;
