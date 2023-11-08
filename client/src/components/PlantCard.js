import React, { useState } from "react";
import "./PlantCard.css";

function PlantCard({ plant, addToCart, currentUser, currentStaff, deletePlant, isStaffLoggedIn, openModal, closeModal, onImageClick }) {

  const [quantity, setQuantity] = useState(1);
  const handleAddToCartClick = () => {


    


    if (quantity > 0) {
      addToCart(plant, quantity);
    }
  };

  const handleRemove = () => {
    deletePlant(plant.id);
  }

  


  return (


    <div className="col">


      <div className="thumbnail" >


        <img src={plant.image} className="thumb-img" alt={plant.name} style={{ minWidth: '400px' }} onClick={onImageClick} />


        <h5 className="card-title">{plant.name}</h5>

        <p className="card-text">Price: ${plant.price}</p>
        {plant.discounted_price ? <p className="card-text">Discounted Price: ${plant.discounted_price}</p> : null}


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

    // </div>



  );
}

export default PlantCard;
