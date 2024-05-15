//RecipeList.js
import React from 'react';
import RecipeItem from './RecipeItem'; //Import the 'RecipeItem' component
import WinePairing from './Wine'; //Import the 'WinePairing' component

function RecipeList({ recipes, winePairingData }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (<RecipeItem key={index} recipe={recipe} /> ))} {/* Map over the recipes array and render a RecipeItem component for each recipe */}
      {winePairingData && <WinePairing winePairingData={winePairingData} />} {/*render winepairing component if available*/}
    </div>
  );
}

export default RecipeList; //Export the RecipeList component as the default export
