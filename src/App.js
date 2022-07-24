import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
