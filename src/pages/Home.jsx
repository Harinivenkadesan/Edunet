import React from "react";
import "./Home.css";

const Home = ({ recipes }) => {
  return (
    <div className="home-container">
      <h2>Welcome to Recipe Sharing</h2>
      <div className="recipe-grid">
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <div key={index} className="recipe-card">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
            </div>
          ))
        )  : (
            <div className="no-recipes-message">
            No recipes added yet. Start by adding one!
          </div>
          
        ) }
      </div>
    </div>
  );
};

export default Home;
