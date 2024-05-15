# The Culinary Quest - Capstone

# Description

The Culinary Quest is a local web application that allows users to search for recipes and get wine pairing suggestions. It also features a random recipe generator.

# Features

- Recipe Search: Users can search for recipes based on their query.
- Wine Pairing: Users can get wine pairing suggestions for specific dishes.
- Random Recipe Generator: Users can generate a random recipe displayed in a modal.

# Technologies Used

- React.js
- JavaScript
- HTML/CSS
- Spoonacular API
- Visual Studio Code

# Components

- App.js: Manages state and handles API calls. Renders the main components.
- Header.js: Displays the logo and title. Includes a button to generate a random recipe.
- SearchForm.js: Allows users to search for recipes and wine pairings.
- RecipeList.js: Displays a list of recipes based on the search query.
- WinePairing.js: Displays wine pairing suggestions.
- RandomRecipe.js: Displays a random recipe in a modal.

# Installation/Replication

- Create New React App with the command "npx create-react-app my-app" in your IDE of choice
- Register for a Spoonacular API Key at "https://spoonacular.com/food-api"
- Clone or copy this Repo in the newly created "src" file in your React App
- Replace the API key in "utils/api.js"
- Run a local instace of the site in your IDE with the command "npm start" (ensure you are running this command while in your project/app's directory)

# Usage

- Use the search form to find recipes and wine pairings by either typing in ingredients or an entree title. Then click the corresponding button.
- Click the "Random Recipe" button to generate and display a random recipe.
- View wine pairing suggestions along with product matches.

# License

This project is licensed under the MIT License.
