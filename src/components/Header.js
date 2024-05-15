// Header.js
import React, { useState } from 'react';
import logo from '../imgs/logo.jpg'; // Import the logo image
import Modal from './Modal'; //Import modal component


function Header({ onRandomRecipe, randomRecipe }) {
  const [showModal, setShowModal] = useState(false); //modal state var to control visibility

  //function to handle generating a random recipe
  const handleGenerateRandomRecipe = async () => {
    try {
      await onRandomRecipe(); //call function passed as prop
      setShowModal(true); //showing modal after genereating recipe
    } catch (error) {
      console.error('Error generating random recipe:', error);
    }
  };

  //basic function to close modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="header">
      <a href="/" className="logo"> {/*rendering logo*/}
          <img src={logo} alt="Logo" /> {/* Render an image tag with the src attribute set to the imported logo image and alt attribute set to 'Logo' */}
      </a>
      <h1 className="title">The Culinary Quest</h1>
      <button className="random-recipe-gen" onClick={handleGenerateRandomRecipe} >Random Recipe</button> {/*random recipe gen btn*/}
      {showModal && <Modal recipeRan={randomRecipe} onClose={closeModal} />} {/*conditional rendering the modal*/}
    </div>
  );
}

export default Header; //exporting component as default export