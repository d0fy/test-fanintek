import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "tippy.js/dist/tippy.css"; // optional
import { BrowserRouter } from "react-router-dom";

// bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
