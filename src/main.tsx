import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Presentation from "./pages/Presentation";
import Tutorial from "./pages/Tutorial";
import CodeExplanation from "./pages/CodeExplanation";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/Group-A-PostgreSQL">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/code" element={<CodeExplanation />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
