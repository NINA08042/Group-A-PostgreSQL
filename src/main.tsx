import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/Group-A-PostgreSQL/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Group A：CW01 — PostgreSQL</title>
  </head>
  <body>
 <h1>Welcome to Group A: CW01 -- PostgreSQL</h1>
    <h2>Click the tab to start!</h2>
  </body>
</html>

