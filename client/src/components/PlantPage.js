import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";



function PlantPage({ plants, onAddPlant, query, onUpdateQuery, cart, removeFromCart, checkout, addToCart, currentUser, selectedRole, isLoggedIn, isStaffLoggedIn, deletePlant, currentStaff }) {

  console.log(selectedRole)
  return (
    <main>
      {isStaffLoggedIn ?
        <>
            <NewPlantForm onAddPlant={onAddPlant} />
        </> : ""
      }
      <PlantList plants={plants} cart={cart} removeFromCart={removeFromCart} checkout={checkout} addToCart={addToCart} currentUser={currentUser} deletePlant={deletePlant} currentStaff={currentStaff} isStaffLoggedIn={isStaffLoggedIn} />
    </main>
  );
}


export default PlantPage;



