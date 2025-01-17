import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <p>Welcome to the Home page</p>
      <button onClick={() => navigate("/login")}>Login</button>
    </>
  );
};

export default Home;
