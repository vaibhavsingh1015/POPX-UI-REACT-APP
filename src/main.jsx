// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";
import Welcome from "./assets/Welcome";
import Login from "./assets/Login";
import Register from "./assets/Register";
import Settings from "./assets/Settings";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
        <div className="bg-white shadow rounded-3 overflow-auto" style={{width: '375px', height: '100vh'}}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  </React.StrictMode>
);
