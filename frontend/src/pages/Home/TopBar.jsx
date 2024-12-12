import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./topbar.css";

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in based on the presence of a token
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token to log out
    setIsLoggedIn(false);
    navigate("/"); // Navigate back to the home page after logout
  };

  return (
    <div className="topbar">
      <div className="logo">
        <p className="logoname">Ceylon Real Cosmetic</p>
      </div>
      <div className="navname">
        <p className="nav">Home</p>
        <p className="nav">Products</p>
        <p className="nav">Location</p>
        <p className="nav">Contact Us</p>

        {!isLoggedIn ? (
          <>
            <Link to="/login" className="login">Login</Link>
            <Link to="/register" className="login">Sign Up</Link>
          </>
        ) : (
          <p className="logout" onClick={handleLogout}>
            Logout
          </p>
        )}
      </div>

    </div>
  );
};

export default Main;
