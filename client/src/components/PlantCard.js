import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PlantCard.css"; 

function PlantCard({ plant, addToCart, currentUser }) {
  const [stock, setStock] = useState(true);
  const [quantity, setQuantity] = useState(1);
  console.log(currentUser)
  const handleAddToCartClick = () => {
    if (quantity > 0) {
      // Call the addToCart function with the plant's data and the specified quantity
      addToCart(plant, quantity);
    }
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
      {currentUser && currentUser.username ? (
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min="1"
      />
      ) : null}
      {currentUser && currentUser.username ? (
        <button onClick={handleAddToCartClick}>Add to Cart</button>
      ) : null}
    
                
    </div>
  );
}

export default PlantCard;
