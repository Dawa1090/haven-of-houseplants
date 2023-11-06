import React, { useState } from "react";
import "./PlantCard.css";

function PlantCard({ plant, addToCart, currentUser, currentStaff, deletePlant, isStaffLoggedIn }) {
  const [stock, setStock] = useState(true);
  const [quantity, setQuantity] = useState(1);
  //console.log(currentUser)
  const handleAddToCartClick = () => {

    if (quantity > 0) {
      // Call the addToCart function with the plant's data and the specified quantity
      addToCart(plant, quantity);
    }
  };

  const handleRemove = () => {
    deletePlant(plant.id);
  }

  return (

    <div className="col">


      <div className="card" style={{ minWidth: '500px' }} >

        <img src={plant.image} className="card-img-top" alt={plant.name} style={{ minWidth: '400px' }} />
        <div className="card-body">
          <h5 className="card-title">{plant.name}</h5>

          <p className="card-text">Price: ${plant.price}</p>



          {currentUser && currentUser.username ? (
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              className="btn-margin"
            />
          ) : null}
          {currentUser && currentUser.username ? (
            <button onClick={handleAddToCartClick}>Add to Cart</button>
          ) : null}

          {isStaffLoggedIn ? (
            <button onClick={handleRemove}>Remove Item</button>
          ) : null}
        </div>
      </div>

    </div>



  );
}

export default PlantCard;
