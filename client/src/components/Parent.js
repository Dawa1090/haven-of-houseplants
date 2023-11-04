import React, { useState } from "react";
import App from "./App";


function ParentComponent() {
  const [cart, setCart] = useState([]);
  const plantsData = [
    
  ];

  const addToCart = (plant) => {
    console.log('heellloo from from the cart')
    setCart([...cart, plant]);
  };

  const removeFromCart = (plantId) => {
    setCart(cart.filter((item) => item.id !== plantId));
  };

  const checkout = () => {
   
  };

  return (
    <App
      plantsData={plantsData}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      checkout={checkout}
      cart={cart}
    />
    
  );
}
   


export default ParentComponent;
