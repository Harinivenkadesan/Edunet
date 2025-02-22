import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "../assets/erasebg-transformed.webp"; // Adjust the path if needed

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Recipes Logo" className="logo" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/add-recipe">Add Recipe</Link>
        <Link to="/recipe-list">Recipe List</Link>
      </div>
    </nav>
  );
};

export default Navbar;
