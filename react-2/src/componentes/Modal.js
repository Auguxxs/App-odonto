import React from "react";

function Modal() {
  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">
              Nuevo paciente
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    placeholder="Nombre"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="apellido"
                    className="form-control"
                    placeholder="Apellido"
                  />
                </div>
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Documento"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="exampleFormControlSelect1">Obra Social</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>Ioscor</option>
                  <option>Osecac</option>
                  <option>Isunne</option>
                  <option>Osde</option>
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Cerrar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              id="btn-guardar"
            >
              Crear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
