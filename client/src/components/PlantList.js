import React, { useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setCart, addToCart, currentUser, selectedRole, deletePlant, currentStaff, isStaffLoggedIn }) {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (plantId, quantity) => {
    setQuantities({
      ...quantities,
      [plantId]: quantity,
    });
  };

  return (
    <div className="container">
      <div className="row">
        {plants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            quantity={quantities[plant.id] || 1}
            onQuantityChange={(quantity) => handleQuantityChange(plant.id, quantity)}
            addToCart={addToCart}
            setCart={setCart}
            currentUser={currentUser}
            selectedRole={selectedRole}
            deletePlant={deletePlant}
            currentStaff={currentStaff}
            isStaffLoggedIn={isStaffLoggedIn}
          />
        ))}
      </div>
    </div>
  );
}

export default PlantList;

