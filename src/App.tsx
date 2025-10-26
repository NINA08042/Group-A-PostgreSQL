import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Presentation from "./pages/Presentation";
import Tutorial from "./pages/Tutorial";
import CodeExplanation from "./pages/CodeExplanation";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/code" element={<CodeExplanation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
