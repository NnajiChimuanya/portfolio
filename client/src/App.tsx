import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./app.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
