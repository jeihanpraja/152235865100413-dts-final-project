import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";

function App() {
  //ganti title Web App
  useEffect(() => {
    document.title = "Final Project - Jeihan";
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
