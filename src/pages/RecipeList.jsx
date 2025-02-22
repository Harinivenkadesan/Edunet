import React from "react";
import "./RecipeList.css";

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list-container">
      <h2>Recipe List</h2>
      <div className="recipe-grid">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
