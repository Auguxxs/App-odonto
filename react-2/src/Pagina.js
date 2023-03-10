import React, { Component } from "react";
import Nav from "./componentes/Nav";
import ActionsMenu from "./componentes/ActionsMenu";
import Tabla from "./componentes/Tabla";
import Modal from "./componentes/Modal";

class Pagina extends Component {
  constructor(props) {
    super();
    this.state = {
      mostrarModal: false,
    };
  }

  cambiarModal = () => {
    this.setState({ mostrarModal: !this.state.mostrarModal });
  };
  // el render siempre va ultimo
  render() {
    return (
      <div className="container">
        <Nav />
        <ActionsMenu cambiarModal={this.cambiarModal} />
        <Tabla />
        {this.state.mostrarModal && <Modal cambiarModal={this.cambiarModal} />}
      </div>
    );
  }
}

export default Pagina;
