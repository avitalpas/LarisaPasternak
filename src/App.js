import React from "react";
import "./App.css";
import { Home } from "./comp/Home.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
  );
}

export default App;
