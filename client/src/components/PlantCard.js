import React, { useState } from "react";
import './style.css'; 

function PlantCard({ plant, addToCart }) {
  const [stock, setStock] = useState(true);

  const handleAddToCartClick = () => {
    // Call the addToCart function with the plant's data
    addToCart(plant);
  };

  return (
    <div className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      {stock ? (
        <button onClick={() => setStock(!stock)} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={() => setStock(!stock)}>Out of Stock</button>
      )}
      <button onClick={handleAddToCartClick}>Add to Cart</button>
    </div>
  );
}

export default PlantCard;

