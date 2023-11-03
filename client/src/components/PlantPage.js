import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";



function PlantPage({ plants, onAddPlant, query, onUpdateQuery, cart, removeFromCart, checkout, addToCart, currentUser }) {
  return (
    <main>
      {currentUser && (
        <>
          {currentUser.role === "staff" && (
            <NewPlantForm onAddPlant={onAddPlant} />
          )}
        </>
      )}
      <Search query={query} onUpdateQuery={onUpdateQuery} />
      <PlantList plants={plants} cart={cart} removeFromCart={removeFromCart} checkout={checkout} addToCart={addToCart} currentUser={currentUser} />
    </main>
  );
}


export default PlantPage;



