import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./config";
import { ValidationContext } from "./Context/ValidationContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ValidationContext>
      <GlobalStyle />
      <App />
    </ValidationContext>
  </React.StrictMode>
);
