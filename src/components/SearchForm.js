// SearchForm.js
import React, { useState } from 'react';

function SearchForm({ onSearch, onWinePairingSearch, clearData  }) { 
  const [query, setQuery] = useState(''); //set var to store the search query

  //function to handle recipe search submit
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query); //call "onSearch" passed as prop with "query" as argument
    clearData(); // Clear data function
  };

  //function to handle wine pairing submit
  const handleWinePairingSearch = (e) => {
    e.preventDefault();
    onWinePairingSearch(query); //call "onWinePairingSearch" function as prop with "query" as argument
    clearData(); // Clear data function
  };

  return (
    <form className="search-container">
      <input //form input data/values
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes...Enter entree for wine pairing..."
      />
      <button type="submit" onClick={handleSubmit}>Search</button> {/*btn for recipe search*/}
      <button type="submit" onClick={handleWinePairingSearch}>Search Wine Pairing</button> {/*btn for wine pairing search*/}
    </form>
  );
}

export default SearchForm;