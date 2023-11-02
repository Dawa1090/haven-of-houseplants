// import React from "react";

// import "./style.css";

// function PlantList({ plants, addToCart }) {
//   const [quantities, setQuantities] = useState({});
  
//   const handleQuantityChange = (plantId, quantity) => {
//     setQuantities({
//       ...quantities,
//       [plantId]: quantity,
//     });
//   };

//   return (
//     <div className="plant-container">
//       {plants.map((plant) => (
//         <div key={plant.id} className="plant-card">
//           <img className="plant-image" src={plant.image} alt={plant.name} />
//           <p className="plant-name">{plant.name}</p>
//           <p className="plant-price">${plant.price}</p>
//           <button onClick={() => addToCart(plant)}>Add to Cart</button>
//         </div>
//       ))}
     
//     </div>
//   );
// }

// export default PlantList;





// PlantList.js

import React, { useState } from "react";
import PlantCard from "./PlantCard";



function PlantList({ plants, addToCart }) {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (plantId, quantity) => {
    setQuantities({
      ...quantities,
      [plantId]: quantity,
    });
  };

  return (
    <div className="plant-container">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          quantity={quantities[plant.id] || 1} // Get the quantity for each plant
          onQuantityChange={(quantity) =>
            handleQuantityChange(plant.id, quantity)
          } // Update the quantity in the state
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default PlantList;
