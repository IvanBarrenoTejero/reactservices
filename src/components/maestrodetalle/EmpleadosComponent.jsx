import axios from "axios";
import React, { Component } from "react";
import Global from "../../Global";

export default class EmpleadosComponent extends Component {
  componentDidMount = () => {
    this.loadEmpleados();
  };

  state = {
    empleados: [],
  };

  loadEmpleados = () => {
    let id = this.props.iddepartamento;
    let request = "api/empleados/empleadosdepartamento/" + id;
    axios.get(Global.urlApiEmpleados + request).then((response) => {
      console.log("Leyendo empleados");
      this.setState({
        empleados: response.data,
      });
    });
  };

  componentDidUpdate = (oldProps) => {
    console.log("Current: " + this.props.iddepartamento);
    console.log("Old: " + oldProps.iddepartamento);
    if (oldProps.iddepartamento !== this.props.iddepartamento) {
      this.loadEmpleados();
    }
  };

  render() {
    return (
      <div>
        <h1>Empleados Component</h1>
        <ul>
          {this.state.empleados.map((emp, index) => {
            return (
              <li key={index}>
                {emp.apellido}, Oficio: {emp.oficio}
              </li>
            );
          })}
        </ul>
        <h2>{this.state.texto}</h2>
      </div>
    );
  }
}
