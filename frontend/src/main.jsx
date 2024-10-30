import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import VerifyContext from "../context/VerifyContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VerifyContext>
      <App />
    </VerifyContext>
  </React.StrictMode>
);
