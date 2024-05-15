//RecipeItem.js
import React, { useState } from 'react'; // Import React and useState hook from 'react' library

function RecipeItem({ recipe }) { // Define the functional component RecipeItem and destructure the recipe prop

  // Function to strip HTML tags from the summary, preserving <a> tags
  const stripHtmlTags = (html) => {
    const div = document.createElement('div'); // Create a temporary div element
    div.innerHTML = html; // Set the innerHTML of the div to the provided HTML content
    // Remove all nodes from the div except <a> and <b> tags
    div.querySelectorAll(':not(a):not(b)').forEach((node) => node.remove());
    return div.innerHTML; // Return the innerHTML of the div with preserved <a> and <b> tags
  };

  // Function to toggle expanded state
  const [expanded, setExpanded] = useState(false); // Define expanded state variable and setExpanded function using useState hook, initialized to false
  const toggleExpanded = () => { // Define a function toggleExpanded to toggle the expanded state
    setExpanded(!expanded); // Toggle the expanded state
  };

  // Check if recipe exists before rendering
  if (!recipe) {
    return null; // Return null if recipe is null
  }
  
  return (
    <div className="recipe-item">
      <h3><a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer"> {recipe.title} </a> {/* Render a link to the recipe source URL in title*/}
      </h3>
      <img src={recipe.image} alt={recipe.title} /> {/* Render the recipe image with alt attribute set to the recipe title */}

      {/* Render a paragraph with class 'summary'. If expanded is true, add 'expanded' class */}
      <p className={`summary ${expanded ? 'expanded' : ''}`} 
        onClick={toggleExpanded} dangerouslySetInnerHTML={{ __html: stripHtmlTags(recipe.summary) }} /> {/* Render summary with preserved <a> tags */}
    </div>
  );
}

export default RecipeItem; // Export the RecipeItem component as the default export