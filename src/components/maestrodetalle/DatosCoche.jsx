import axios from "axios";
import React, { Component } from "react";
import Global from "../../Global";

export default class DatosCoche extends Component {
  urlCoches = Global.urlApiCoches;
  state = {
    datosCoche: {},
  };

  buscarCochePorId = () => {
    let request = "api/Coches/FindCoche/";
    axios
      .get(this.urlCoches + request + this.props.idCocheSeleccionado)
      .then((response) => {
        this.setState({
          datosCoche: response.data,
        });
      });
  };

  componentDidMount = () => {
    this.buscarCochePorId();
  };

  render() {
    return (
      <div>
        <p>id coche: {this.state.datosCoche.idCoche}</p>;
      </div>
    );
  }
}
