// Modal.js
import React from 'react';
import RandomRecipe from './RandomRecipe'; // Assuming RandomRecipe is a component you want to display in the modal

function Modal({ recipeRan, onClose }) {
  const recipes = recipeRan ? recipeRan.recipes : []; //access recipe array directly

    return (
      <div className="modal">
        <RandomRecipe recipes={recipes} onClose={onClose} /> {/* Pass recipes array directly to RandomRecipe component */}
      </div>
    );
  }

export default Modal;