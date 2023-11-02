import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import ShoppingCart from "./ShoppingCart";
import AddToCartButton from "./AddToCartButton";


function PlantPage({plants, onAddPlant, query, onUpdateQuery, cart, removeFromCart, checkout, addToCart, currentUser}){
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant}/>
      <Search query={query} onUpdateQuery={onUpdateQuery}/>
      <PlantList plants={plants} cart={cart} removeFromCart={removeFromCart} checkout={checkout} addToCart={addToCart} currentUser={currentUser}/>
      <ShoppingCart cart={cart} removeFromCart={removeFromCart} checkout={checkout} />
      <AddToCartButton addToCart={addToCart} />
    </main>
  );
}

export default PlantPage;
