import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddRecipe from "./pages/AddRecipe";
import dummyRecipes from "./dummyData"; // Import dummy data
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  const [recipes, setRecipes] = useState(dummyRecipes); // Load dummy data initially

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home recipes={recipes} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-recipe" element={<AddRecipe addRecipe={addRecipe} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
