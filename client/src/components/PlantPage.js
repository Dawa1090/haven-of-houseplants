import React, { useEffect }from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";




function PlantPage({ plants, onAddPlant, query, onUpdateQuery, cart, removeFromCart, checkout, addToCart, currentUser, selectedRole, isLoggedIn, isStaffLoggedIn, deletePlant, currentStaff}) {


  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);


  

return (
  <main>
    {isStaffLoggedIn ? (
      <NewPlantForm onAddPlant={onAddPlant} />
    ) : null}

    
    <Search query={query} onUpdateQuery={onUpdateQuery} />

    <div id="top">
      <PlantList plants={plants} cart={cart} removeFromCart={removeFromCart} checkout={checkout} addToCart={addToCart} currentUser={currentUser} deletePlant={deletePlant} currentStaff={currentStaff} isStaffLoggedIn={isStaffLoggedIn} />
    </div>
  </main>
);
}


export default PlantPage;



