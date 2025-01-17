import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import Signin from "../views/Signin";
const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
