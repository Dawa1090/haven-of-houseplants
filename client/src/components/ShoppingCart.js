// ShoppingCart.js
import React from "react";


function ShoppingCart({ cart, removeFromCart, checkout, setCart,  }) {
    if (!cart || cart.length === 0) {
        return (
          <div>
            <h2>Shopping Cart</h2>
            <p>Your cart is empty</p>
          </div>
        );
      }
      console.log(cart)
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}

export default ShoppingCart;


