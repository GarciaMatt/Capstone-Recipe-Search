// WinePairing.js
import React from 'react';

function WinePairing({ winePairingData }) {
    const { pairedWines, pairingText, productMatches } = winePairingData; //de-structuring data to access the desired properties


  return (
    <div className="wine-pairing-container">
      <h1 className="wine-pairing-header">Wine Pairing Suggestions:</h1>
      <p className="pairing-text">{pairingText}</p>
      <p className="paired-wines"><strong>Paired Wines:</strong> {pairedWines.join(', ')}</p>
      <h2 className="product-matches-header">Product Matches:</h2>
      <div className="product-matches">
        {productMatches.map((product, index) => (
          <div key={index} className="product-match">
            <h3>
              <a href={product.link} target="_blank" rel="noopener noreferrer">{product.title}</a>
            </h3>
            <img src={product.imageUrl} alt={product.title} />
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default WinePairing; //Export component as default export