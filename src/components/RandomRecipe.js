import React, { useState } from 'react';

// Function to strip HTML tags from a string of HTML content
const stripHtmlTags = (html) => {
  // Create a temporary <div> element
  const div = document.createElement('div');
  // Set the inner HTML of the div to the provided HTML string
  div.innerHTML = html;
  // Remove all elements within the div except <a> and <b> tags
  div.querySelectorAll(':not(a):not(b)').forEach((node) => node.remove());
  // Return the inner HTML of the div, now stripped of unwanted tags
  return div.innerHTML;
};

// Functional component for displaying a random recipe
function RandomRecipe({ recipes, onClose }) {
  const [expanded, setExpanded] = useState(false);   // State variable to track whether the recipe summary is expanded or not
  
  // Function to toggle the expanded state
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  if (!recipes || recipes.length === 0) {   
    return <p>No random recipe available</p>;   // If no recipe is available, display a message
  }

  // Render the random recipe component
  return (
    <div className="modal-content">
      <span className="close" onClick={onClose}>&times;</span> {/* Close button */}
      <h2>Your Random Recipe:</h2>
      <div className="randomrecipe-content">
        <h3>
          <a href={recipes[0].sourceUrl} target="_blank" rel="noopener noreferrer"> {recipes[0].title} </a> {/* Recipe title with a link to the source */}
        </h3>
        <img src={recipes[0].image} alt={recipes[0].title} /> {/* Recipe image */}

        {/* Recipe summary; Clicking on the summary toggles its expanded state */}
        <p
          className={`summary ${expanded ? 'expanded' : ''}`} onClick={toggleExpanded} /* Render the summary as HTML, using the stripHtmlTags function to remove unwanted tags*/ dangerouslySetInnerHTML={{ __html: stripHtmlTags(recipes[0].summary) }}
        />
      </div>
    </div>
  );
}

export default RandomRecipe; // Eport the RandomRecipe component as the default export