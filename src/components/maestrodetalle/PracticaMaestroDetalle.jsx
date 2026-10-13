import React, { Component } from "react";
import Global from "../../Global";
import axios from "axios";
import DatosCoche from "./DatosCoche";

export default class PracticaMaestroDetalle extends Component {
  cocheIdSeleccionado = React.createRef();
  urlCoches = Global.urlApiCoches;

  state = {
    coches: [],
    idCocheSeleccionado: null,
  };

  loadCoches = () => {
    let request = "api/Coches/";
    axios.get(this.urlCoches + request).then((response) => {
      this.setState({
        coches: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadCoches();
  };

  cargarId = (event) => {
    event.preventDefault();
    let id = this.cocheIdSeleccionado.current.value;
    this.setState({
      idCocheSeleccionado: id,
    });
  };

  render() {
    return (
      <div>
        <h1>PracticaMaestroDetalle</h1>
        <form>
          <label>Seleccione el coche</label>
          <select ref={this.cocheIdSeleccionado}>
            {this.state.coches.map((coche, index) => {
              return (
                <option key={index} value={coche.idCoche}>
                  Conductor: {coche.conductor} Modelo: {coche.modelo}
                </option>
              );
            })}
          </select>
          <button onClick={this.cargarId}>Mostrar datos</button>
        </form>
        {this.state.idCocheSeleccionado != null && (
          <DatosCoche
            idCocheSeleccionado={this.state.idCocheSeleccionado}
          ></DatosCoche>
        )}
      </div>
    );
  }
}
