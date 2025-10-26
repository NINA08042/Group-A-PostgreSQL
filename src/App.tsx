import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Presentation from "./pages/Presentation";
import Tutorial from "./pages/Tutorial";
import CodeExplanation from "./pages/CodeExplanation";

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>Group A: PostgreSQL</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/presentation">Presentation</Link></li>
          <li><Link to="/tutorial">Tutorial</Link></li>
          <li><Link to="/code">Code Explanation</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/code" element={<CodeExplanation />} />
      </Routes>

      <footer>© 2025 Group A | PostgreSQL Learning Hub</footer>
    </div>
  );
}
