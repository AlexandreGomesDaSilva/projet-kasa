import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Logement from "./pages/Logement";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
