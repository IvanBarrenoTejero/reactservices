import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class MenuComponent extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/tabla/5">Tabla multiplicar</NavLink>
          </li>
          <li>
            <NavLink to="/collatz/5">Collatz </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
