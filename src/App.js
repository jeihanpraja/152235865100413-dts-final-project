import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import DetailPage from "./containers/DetailPage";
import FilterPage from "./containers/FilterPage";

import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import SearchPage from "./containers/SearchPage";

function App() {
  //ganti title Web App
  useEffect(() => {
    document.title = "Final Project - Jeihan";
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:idMeal" element={<DetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
