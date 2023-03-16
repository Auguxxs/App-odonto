import React, { Component } from "react";
import Nav from "./componentes/Nav";
import ActionsMenu from "./componentes/ActionsMenu";
import Tabla from "./componentes/Tabla";
import Modal from "./componentes/Modal";
import { listarEntidad } from "./servicio";

class Pagina extends Component {
  constructor(props) {
    super();
    this.state = {
      mostrarModal: false,
      entidades: [],
    };
  }

  cambiarModal = () => {
    this.setState({ mostrarModal: !this.state.mostrarModal });
  };

  listar = async () => {
    const { entidad } = this.props;
    const entidades = await listarEntidad({ entidad });
    this.setState({ entidades });
  };

  componentDidMount() {
    this.listar();
  }

  // el render siempre va ultimo

  render() {
    const { titulo = "pagina sin titulo" } = this.props;
    return (
      <div className="container">
        <Nav />
        <ActionsMenu cambiarModal={this.cambiarModal} titulo={titulo} />
        <Tabla entidades={this.state.entidades} />
        {this.state.mostrarModal && <Modal cambiarModal={this.cambiarModal} />}
      </div>
    );
  }
}

export default Pagina;
