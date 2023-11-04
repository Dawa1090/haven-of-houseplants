
import React, { useState, useEffect } from "react";

function ShoppingCart({ cart, removeFromCart, checkout, setCart, isLoggedIn, selectedRole }) {
  const [plants, setPlants] = useState([]);
  


  const [cartItems, setCartItems] = useState([]);
  const [promoCode, setPromoCode] = useState("");
  const [billingAddress, setBillingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleAddToCart = (plant) => {
    setCartItems([...cartItems, plant]);
  };


  const calculateTotal = () => {
    const itemsTotal = cartItems.reduce((total, item) => total + item.price, 0);
    const promoDiscount = promoCode === "EXAMPLECODE" ? 5 : 0;
    return itemsTotal - promoDiscount;
  };



  const handleBillingAddressChange = (e) => {
    const { name, value } = e.target;
    setBillingAddress({
      ...billingAddress,
      [name]: value,
    });
  };

  useEffect(() => {
    localStorage.setItem("billingAddress", JSON.stringify(billingAddress));
  }, [billingAddress]);

  return (
    <div className="container">
      {cart.map(item => (
      <div key={item.id}>
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
    ))}


    
    {selectedRole === "customer" ?(
      <main>
        <ul className="list-group mb-3">
          {plants.map((plant) => (
            <li key={plant.id} className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">{plant.name}</h6>
              </div>
              <span className="text-body-secondary">${plant.price}</span>
              <button onClick={() => handleAddToCart(plant)} className="btn btn-primary">
                Add to Cart
              </button>
            </li>
          ))}
          <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
            <div className="text-success">
              <h6 className="my-0">Promo code</h6>
              <small>EXAMPLECODE</small>
            </div>
            <span className="text-success">−$5</span>
          </li>
        </ul>
      </main>
    ) : (
      <div>
          <p>You must be a customer to access the shopping cart.</p>
          {/* Render something else or nothing */}
        </div>
    )}



      <div className="col-md-5 col-lg-4 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
          <span className="badge bg-primary rounded-pill">{cartItems.length}</span>
        </h4>
        <ul className="list-group mb-3">
          {cartItems.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">{item.name}</h6>
              </div>
              <span className="text-body-secondary">${item.price}</span>
            </li>
          ))}
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>${calculateTotal()}</strong>
          </li>
        </ul>
        <form className="card p-2">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary">
              Redeem
            </button>
          </div>
        </form>
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" noValidate>
          <div className="mb-3">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={billingAddress.firstName}
              onChange={handleBillingAddressChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={billingAddress.lastName}
              onChange={handleBillingAddressChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={billingAddress.address}
              onChange={handleBillingAddressChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              value={billingAddress.city}
              onChange={handleBillingAddressChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="state">State</label>
            <input
              type="text"
              className="form-control"
              id="state"
              name="state"
              value={billingAddress.state}
              onChange={handleBillingAddressChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="zip">Zip</label>
            <input
              type="text"
              className="form-control"
              id="zip"
              name="zip"
              value={billingAddress.zip}
              onChange={handleBillingAddressChange}
            />
          </div>

          <div className="mb-3">
  <div className="form-check">
    <input
      type="checkbox"
      className="form-check-input"
      id="sameAsBilling"
    />
    <label className="form-check-label" htmlFor="sameAsBilling">
      Shipping address is the same as my billing address
    </label>
  </div>
</div>

<div className="mb-3">
  <div className="form-check">
    <input
      type="checkbox"
      className="form-check-input"
      id="saveForNextTime"
    />
    <label className="form-check-label" htmlFor="saveForNextTime">
      Save this information for next time
    </label>
  </div>
</div>

<h4 class="mb-3">Payment</h4>

<div className="my-3">
  <div className="form-check">
    <input
      id="credit"
      name="paymentMethod"
      type="radio"
      className="form-check-input"
      checked
      required
    />
    <label className="form-check-label" htmlFor="credit">
      Credit card
    </label>
  </div>
  <div className="form-check">
    <input
      id="debit"
      name="paymentMethod"
      type="radio"
      className="form-check-input"
      required
    />
    <label className="form-check-label" htmlFor="debit">
      Debit card
    </label>
  </div>
  <div className="form-check">
    <input
      id="paypal"
      name="paymentMethod"
      type="radio"
      className="form-check-input"
      required
    />
    <label className="form-check-label" htmlFor="paypal">
      PayPal
    </label>
  </div>
</div>

<div className="row gy-3">
  <div className="col-md-6">
    <label htmlFor="cc-name" className="form-label">
      Name on card
    </label>
    <input
      type="text"
      className="form-control"
      id="cc-name"
      placeholder=""
      required
    />
    <small className="text-body-secondary">Full name as displayed on card</small>
  </div>

  <div className="col-md-6">
    <label htmlFor="cc-number" className="form-label">
      Credit card number
    </label>
    <input
      type="text"
      className="form-control"
      id="cc-number"
      placeholder=""
      required
    />
  </div>

  <div className="col-md-3">
    <label htmlFor="cc-expiration" className="form-label">
      Expiration
    </label>
    <input
      type="text"
      className="form-control"
      id="cc-expiration"
      placeholder=""
      required
    />
  </div>

  <div className="col-md-3">
    <label htmlFor="cc-cvv" className="form-label">
      CVV
    </label>
    <input
      type="text"
      className="form-control"
      id="cc-cvv"
      placeholder=""
      required
    />
  </div>
</div>



<button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>

<footer class="my-5 pt-5 text-body-secondary text-center text-small">
    <p class="mb-1">© 2017–2023 Company Name</p>
    <ul class="list-inline">
      <li class="list-inline-item"><a href="#">Privacy</a></li>
      <li class="list-inline-item"><a href="#">Terms</a></li>
      <li class="list-inline-item"><a href="#">Support</a></li>
    </ul>
  </footer>




        </form>
      </div>
    </div>
  );
}

export default ShoppingCart;
