//App.js
import React, { useState } from 'react'; // Import React and useState hook from 'react' library
import Header from './components/Header'; // Import Header component from './Header' file
import SearchForm from './components/SearchForm'; // Import SearchForm component from './SearchForm' file
import RecipeList from './components/RecipeList'; // Import RecipeList component from './RecipeList' file
import WinePairing from './components/Wine'; // Import WinePairing component
import './App.css'; // Import the App.css file
import { searchRecipes, generateRandomRecipe, getWinePairing } from './utils/api'; // Import searchRecipes and generateRandomRecipe functions from './utils/api'


function App() { // Define the functional component App
    // State variables for recipes, random recipe, wine pairing data, loading state, and error state
  const [recipes, setRecipes] = useState([]);
  const [randomRecipe, setRandomRecipe] = useState(null);
  const [winePairingData, setWinePairingData] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to handle traditional recipe search
  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const data = await searchRecipes(query);
      setRecipes(data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle Wine Pairing search
  const handleWinePairingSearch = async (food) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getWinePairing(food);
      setWinePairingData(data); // Set wine pairing data
    } catch (error) {
      setError('Error fetching wine pairing data');
    } finally {
      setLoading(false);
    }
  };

  // Function to handle random recipe generation need to pass data down to a modal.js file
  const handleRandomRecipe = async () => {
    setLoading(true);
    setError(null);
  
    try {
      const data = await generateRandomRecipe();
      setRandomRecipe(data); // Adjust this line based on the structure of the API response
      console.log(data);
    } catch (error) {
      console.error('Error generating random recipe:', error);
    } finally {
      setLoading(false);
    }
  };

   // Function to clear recipes and wine pairing data
   const clearData = () => {
    setRecipes([]);
    setWinePairingData(null);
  };

  //render components
  return (
    <div className="App">
      <Header onRandomRecipe={handleRandomRecipe} randomRecipe={randomRecipe}/>
      <SearchForm onSearch={handleSearch} onWinePairingSearch={handleWinePairingSearch} clearData={clearData} />
      {loading && <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Loading...</p>}
      {error && <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Error: {error}</p>}
      <RecipeList recipes={recipes}/>
      {winePairingData && <WinePairing winePairingData={winePairingData} />} {/* Render WinePairing component if winePairingData is available */}
    </div>
  );
}

export default App; // Export the App component