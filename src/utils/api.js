// api.js

const API_KEY = 'a46cd4546f5a42b1bd0f89c174ad3908'; //making API key a const for multi-function use

//Search Recipe API call
export async function searchRecipes(query) {
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&addRecipeInformation=true&number=25`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }
  return await response.json();
}


//Random Recipe API call
export async function generateRandomRecipe() {
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=1`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch random recipe');
  }
  return await response.json();
}

// Wine Pairing API call
export async function getWinePairing(query) {
  const url = `https://api.spoonacular.com/food/wine/pairing?food=${query}&apiKey=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch wine pairing data');
  }
  return await response.json();
}