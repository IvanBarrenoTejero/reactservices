import React, { Component } from "react";
import axios from "axios";

export default class ComponentServiceSuppliers extends Component {
  state = {
    customers: [],
    customerActual: null,
  };
  url = "https://services.odata.org/V4/Northwind/Northwind.svc/Customers";
  loadCustomers = () => {
    console.log("Antes del servicio");
    axios.get(this.url).then((response) => {
      console.log("Leyendo servicio");
      //LOS DATOS DEL SERVICIO CON AXIOS SIEMPRE VIENEN
      //DENTRO DE LA PROPIEDAD data.
      this.setState({
        customers: response.data.value,
      });
    });
    console.log("Despues del servicio");
  };

  componentDidMount = () => {
    this.loadCustomers();
  };

  buscarCustomer = (id) => {
    return this.state.customers.find((customer) => customer.CustomerID === id);
  };

  render() {
    return (
      <div>
        <h1>Service Api Customers</h1>
        <input
          onChange={(event) => {
            const customer = this.buscarCustomer(event.target.value);

            this.setState({
              customerActual: customer,
            });
          }}
        />
        {this.state.customerActual && (
          <h4 style={{ color: "blue" }}>
            Contacto: {this.state.customerActual.ContactName}, Título:{" "}
            {this.state.customerActual.ContactTitle}
          </h4>
        )}
      </div>
    );
  }
}
