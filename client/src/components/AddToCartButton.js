// import React from "react";
// // import { Link } from "react-router-dom";

// function AddToCartButton({ plant, addToCart }) {
//   const handleAddToCart = () => {
//     addToCart(plant);
//   };

//   return (
//     <div>
//       <button onClick={handleAddToCart}>Add to Cart</button>
//       {/* <Link to="/cart">Go to Cart</Link> Add this link to navigate to the cart page */}
//     </div>
//   );
// }

// export default AddToCartButton;



import React, { useState } from "react";

function AddToCartButton({ plant, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log('hiii')
    // Convert quantity to a number (it's currently a string)
    const quantityNumber = parseInt(quantity, 10);

    if (!isNaN(quantityNumber) && quantityNumber > 0) {
      // Call the addToCart function with the plant and quantity
      addToCart(plant, quantityNumber);
    }
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div>
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default AddToCartButton;
