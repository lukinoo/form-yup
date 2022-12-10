import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalStyle } from "./config";
import { ValidationContext } from "./Context/ValidationContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ValidationContext>
        <GlobalStyle />
        <App />
      </ValidationContext>
    </BrowserRouter>
  </React.StrictMode>
);
