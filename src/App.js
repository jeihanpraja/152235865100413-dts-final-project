import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./authentication/firebase";
import "./App.css";
import ProtectedComponent from "./components/ProtectedComponent";
import DetailPage from "./containers/DetailPage";
import FilterPage from "./containers/FilterPage";

import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import SearchPage from "./containers/SearchPage";

function App() {
  //ambil state user dari firebase
  const [user, loading] = useAuthState(auth);

  //ganti title Web App
  useEffect(() => {
    document.title = "Final Project - Jeihan";
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/detail/:idMeal"
          element={
            <ProtectedComponent user={user} loading={loading}>
              <DetailPage />
            </ProtectedComponent>
          }
        />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Page Not Found!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
