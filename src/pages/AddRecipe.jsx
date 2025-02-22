import React, { useState } from "react";
import "./AddRecipe.css";

const AddRecipe = ({ addRecipe }) => {
  const [recipe, setRecipe] = useState({
    title: "",
    image: null,
    ingredients: "",
    procedure: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleImageChange = (e) => {
    setRecipe({ ...recipe, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(recipe);
    setRecipe({ title: "", image: null, ingredients: "", procedure: "" });
  };

  return (
    <div className="add-recipe-container">
      <h2>Add a New Recipe</h2>
      <form className="add-recipe-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Recipe Title"
          value={recipe.title}
          onChange={handleChange}
          required
        />
        <input type="file" accept="image/*" onChange={handleImageChange} required />
        <textarea
          name="ingredients"
          placeholder="Ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
          required
        ></textarea>
        <textarea
          name="procedure"
          placeholder="Procedure"
          value={recipe.procedure}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
