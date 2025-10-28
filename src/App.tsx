import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Presentation from "./pages/Presentation";
import Tutorial from "./pages/Tutorial";
import CodeExplanation from "./pages/CodeExplanation";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/code-explanation" element={<CodeExplanation />} />
        <Route path="*" element={<Welcome />} />
      </Routes>
      <Footer />
    </>
  );
}
