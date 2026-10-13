import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MenuComponent from "./components/MenuComponent";
import Router from "./components/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <div style={{ margin: "auto", width: "50%" }}>
      <Router />
    </div>
  </BrowserRouter>,
);

reportWebVitals();
